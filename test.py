from onesignal_sdk.client import Client
from onesignal_sdk.error import OneSignalHTTPError

# Create a One Signal client using API KEYS.
APP_ID = 'b3c4867b-7343-4cde-bff6-894eb638fa23'
REST_API_KEY = 'NDU5ZWQ1MWQtMGZmNy00YWRmLWE4N2YtYjY2NzgyZjViODMz'
USER_AUTH_KEY = 'MzljZmY4YmEtNjVhYy00YjdlLThlMWUtYWE0MDhiNDAxMTFl'

client = Client(app_id=APP_ID, rest_api_key=REST_API_KEY, user_auth_key=USER_AUTH_KEY)

try:
    notification_body = {
        'title': {'en': 'Test Notification'},
        'contents': {'en': 'New notification'},
        'included_segments': ['Subscribed Users'],
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