from twilio.rest import Client
from twilio.base.exceptions import TwilioException
from config import config

account_sid = config.TWILIO_SID
auth_token = config.TWILIO_TOKEN
client = Client(account_sid, auth_token)


def send_message(to: str, message: str) -> None:
    try:
        print('------------------------ to ---------------------------', to)
        print('------------------------ from -------------------------', 'whatsapp:' + config.FROM)
        message = client.messages.create(
            from_='whatsapp:' + config.FROM,
            body=message,
            to=to
        )
        print(f"Message sent successfully. SID: {message.sid}")
    except TwilioException as e:
        print(f"Error sending message: {str(e)}")
