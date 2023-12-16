import json
import logging
from flask import Flask, request, jsonify
from flask_cors import CORS
import base64
from io import BytesIO
import os
import uuid
import shutil
import sys
import subprocess

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = 'uploads'

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Configure the logging module with INFO level
logging.basicConfig(level=logging.INFO) 

def create_upload_folder():
    if not os.path.exists(UPLOAD_FOLDER):
        os.makedirs(UPLOAD_FOLDER)

create_upload_folder()

@app.route('/generate-pdf', methods=['POST'])
def generate_pdf():
    try:
        
        parent_directory = os.path.dirname(os.getcwd())
        d1= 'Langchain\data\input'
        direct= os.path.join(parent_directory, d1)
        data = request.get_json()

        # Extract userObject and pdfData from the request
        user_object = data.get('userObject', {})
        modifiedfilename = user_object.get('modifiedfilename', '')  # Access modifiedfilename
        pdf_data = data.get('pdfData', '')

        

        if isinstance(data, str):
            data = json.loads(data)
        
        # Decode base64 data and create a BytesIO object
        pdf_bytes = base64.b64decode(pdf_data)
        pdf_io = BytesIO(pdf_bytes)

        # Generate a unique filename for the PDF
        filename = modifiedfilename + '.pdf'

        # Save the PDF file in the "uploads" folder
        pdf_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        with open(pdf_path, 'wb') as pdf_file:
            pdf_file.write(pdf_bytes)


        # Move the PDF file to the Langchain folder
        langchain_path = os.path.join(direct, filename)
        shutil.move(pdf_path, langchain_path)

        if os.path.exists(langchain_path):

            # Log user_object and the success message
            logging.info(f'user_object: {user_object}')
            logging.info(f'PDF file moved to Langchain folder. Filename: {filename}')

            parent_directory = os.path.dirname(os.getcwd())
            l2= 'Langchain\train.py'
            train_script= os.path.join(parent_directory, l2)
            
            try:
                subprocess.run(["python", train_script, filename], check=True)
                print("Subprocess completed successfully.")
            except subprocess.CalledProcessError as e:
                print(f"Subprocess failed with exit code {e.returncode}.")


            return jsonify({'message': 'PDF file saved and moved successfully', 'filename': filename }), 200
        
        else:
            return jsonify({'message': 'there is something wrong with moving PDF file ', 'filename': filename }), 200

    except Exception as e:
        # Log the error and return an error response
        logging.error(f'Error generating PDF: {str(e)}')
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True, port=8000)