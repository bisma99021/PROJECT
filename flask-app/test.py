from langchain.vectorstores.chroma import Chroma
import os
import subprocess

print("hi")

parent_directory = os.path.dirname(os.getcwd())
#l2 = 'Langchaintest.py'  # or use 'Langchain/test.py'
create_index_script = os.path.join(parent_directory, 'Langchain','document_gpt','helper','test.py')
print('parent_directory-------------------',create_index_script)
#D:\new_one\flask-app

try:
    #subprocess.run([os.path.join(parent_directory, 'venv', 'Scripts', 'python'), create_index_script, 'test.py'], check=True)
    subprocess.run(["python", create_index_script, 'test.py'], check=True)
    print("Subprocess completed successfully.")
except subprocess.CalledProcessError as e:
    print(f"Subprocess failed with exit code {e.returncode}.")
