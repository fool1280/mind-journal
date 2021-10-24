import os
from twilio.rest import Client


# Find your Account SID and Auth Token at twilio.com/console
# and set the environment variables. See http://twil.io/secure
# account_sid = os.environ['TWILIO_ACCOUNT_SID']
# auth_token = os.environ['TWILIO_AUTH_TOKEN']
client = Client('ACd79c6a204249ff859c65ace6bb1cf1a6',
                '173c160353fbaebc3374949068b98b34')

message = client.messages \
                .create(
                    body="Thank you for logging your thoughts today! You're amazing!",
                    from_='+14174572955',
                    to='+16178747285'
                )

print(message.sid)
