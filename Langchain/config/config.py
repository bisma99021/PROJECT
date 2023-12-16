import os
from dotenv import load_dotenv, find_dotenv
load_dotenv(find_dotenv())

OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')
# TWILIO_SID = os.getenv('TWILIO_SID')
# TWILIO_TOKEN = os.getenv('TWILIO_TOKEN')
#FROM = os.getenv('FROM')
TWILIO_SID = os.getenv('TWILIO_ACCOUNT_SID')
TWILIO_TOKEN = os.getenv('TWILIO_AUTH_TOKEN')
FROM = os.getenv('TWILIO_PHONE_NUMBER')



# DB_DIR = os.path.join('D:','for_bismah 3', 'Langchain', 'data', 'db')
# OUTPUT_DIR = os.path.join('D:','for_bismah 3', 'Langchain', 'data', 'output')

# INPUT_FILE_PATH = 'data/input/sample.pdf'
DB_DIR = 'data/db'
# OUTPUT_DIR ='data/output'