import os
import sys
from dotenv import load_dotenv
from PyPDF2 import PdfReader
from langchain.text_splitter import CharacterTextSplitter
from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.vectorstores import FAISS
from langchain.chains.question_answering import load_qa_chain
from langchain.llms import OpenAI
#from langchain.embeddings.openai import RateLimitError

import time
from twilio_api import send_message

from flask import Flask, request
from conversation import create_conversation

app = Flask(__name__)

def process_pdf(file_path):
    with open(file_path, 'rb') as file:
        pdf_reader = PdfReader(file)
        text = ""
        for page in pdf_reader.pages:
            text += page.extract_text()

    # Splitting Text into Chunks
    text_splitter = CharacterTextSplitter(
        separator="\n",
        chunk_size=1000,
        chunk_overlap=200,
        length_function=len
    )
    chunks = text_splitter.split_text(text)

    # Creating Embeddings
    embeddings = OpenAIEmbeddings()
    knowledge_base = FAISS.from_texts(chunks, embeddings)

    return knowledge_base, embeddings


qa = create_conversation(OpenAIEmbeddings())

@app.route('/', methods=['GET', 'POST'])
def home():
    return 'OK', 200


@app.route('/twilio', methods=['POST'])
def twilio():
    try:
        query = request.form['Body']
        sender_id = request.form['From']
        print(sender_id, query)

        #filename = sys.argv[1]
        filename = 'bismah.pdf'
        dir1 = os.path.dirname(os.getcwd())
        pdfdatafile = os.path.join(dir1, 'Langchain', 'data', 'input', filename)

        knowledge_base, embeddings = process_pdf(pdfdatafile)  # Unpack the tuple

        # Assuming that `knowledge_base` has the required method `similarity_search`
        docs = knowledge_base.similarity_search(query)

        llm = OpenAI()

        # Handle Rate Limit Exceeded Error
        try:
            chain = load_qa_chain(llm, chain_type="stuff")
            res = chain.run(input_documents=docs, question=query)
        except RateLimitError as e:
            print(f"Rate limit exceeded. Waiting for 20 seconds before retrying. Error: {str(e)}")
            time.sleep(20)  # Wait for 20 seconds
            chain = load_qa_chain(llm, chain_type="stuff")
            res = chain.run(input_documents=docs, question=query)

        print(sender_id, res)

        # Print the response before attempting to access 'answer'
        print(res)

        # Check the type of res
        print(type(res))

        # Check if res is a string
        if isinstance(res, str):
            send_message(sender_id, res)
        else:
            send_message(sender_id, res['answer'])

        return 'OK', 200
    except Exception as e:
        print(f"Error in /twilio route: {str(e)}")
        return 'Internal Server Error', 500




if __name__ == '__main__':
    app.run(port=5000)
