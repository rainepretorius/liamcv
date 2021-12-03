import imaplib
import email
from email.header import decode_header
import os
from onesignal_sdk.client import Client
from onesignal_sdk.error import OneSignalHTTPError
import time

# Create a One Signal client using API KEYS.
APP_ID = 'b3c4867b-7343-4cde-bff6-894eb638fa23'
REST_API_KEY = 'NDU5ZWQ1MWQtMGZmNy00YWRmLWE4N2YtYjY2NzgyZjViODMz'
USER_AUTH_KEY = 'MzljZmY4YmEtNjVhYy00YjdlLThlMWUtYWE0MDhiNDAxMTFl'

# account credentials
username = "raine.pretorius1@gmail.com"
password = "ahfhkyjxpgovttym"

def send_push(subject):
    client = Client(app_id=APP_ID, rest_api_key=REST_API_KEY, user_auth_key=USER_AUTH_KEY)
    notification_body = {
        'contents': {'en': f'{subject}'},
        'included_segments': ['Active Users'],
        'filters': [{'field': 'tag', 'key': 'level', 'relation': '>', 'value': 10}],
    }
    response = client.send_notification(notification_body)
    print(response.body)

    try:
        notification_body = {
            'contents': {'en': f'{subject}'},
            'included_segments': ['Active Users'],
        }

        # Make a request to OneSignal and parse response
        response = client.send_notification(notification_body)
        print(response.body) # JSON parsed response
        print(response.status_code) # Status code of response
        print(response.http_response) # Original http response object.

    except OneSignalHTTPError as e: # An exception is raised if response.status_code != 2xx
        print(e)
        print(e.status_code)
        print(e.http_response.json()) # You can see the details of error by parsing original response

def clean(text):
    # clean text for creating a folder
    return "".join(c if c.isalnum() else "_" for c in text)

while True:
    # create an IMAP4 class with SSL 
    imap = imaplib.IMAP4_SSL("imap.gmail.com")
    # authenticate
    imap.login(username, password)

    status, messages = imap.select("INBOX")
    # number of top emails to fetch
    N = 3
    # total number of emails
    messages = int(messages[0])

    for i in range(messages, messages-N, -1):
        # fetch the email message by ID
        res, msg = imap.fetch(str(i), "(RFC822)")
        for response in msg:
            try:
                if isinstance(response, tuple):
                    # parse a bytes email into a message object
                    msg = email.message_from_bytes(response[1])
                    # decode the email subject
                    subject, encoding = decode_header(msg["Subject"])[0]
                    if isinstance(subject, bytes):
                        # if it's a bytes, decode to str
                        subject = subject.decode(encoding)
                    # decode email sender
                    From, encoding = decode_header(msg.get("From"))[0]
                    if isinstance(From, bytes):
                        From = From.decode(encoding)
                    print("Subject:", subject)
                    print("From:", From)
                    # if the email message is multipart
                    if 'no-reply@bawkbox.com' in str(From).lower():
                        send_push(subject)

                    if msg.is_multipart():
                        # iterate over email parts
                        for part in msg.walk():
                            # extract content type of email
                            content_type = part.get_content_type()
                            content_disposition = str(part.get("Content-Disposition"))
                            try:
                                # get the email body
                                body = part.get_payload(decode=True).decode()
                            except:
                                pass
                    else:
                        # extract content type of email
                        content_type = msg.get_content_type()
                        # get the email body
                        body = msg.get_payload(decode=True).decode()
                        if content_type == "text/plain":
                            # print only text email parts
                            print(body)
                    print("="*100)
            except Exception:
                pass

    # close the connection and logout
    imap.close()
    imap.logout()
    time.sleep(10)