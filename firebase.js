const admin = require("firebase-admin");

const serviceAccount = {
  "type": "service_account",
  "project_id": "lemon-pr",
  "private_key_id": "fc6d8c41082c2e70e7456f1db2189bacd053ccaa",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDSsEK/r9eg4pcJ\nW6yZElKWMKIxWyCBWlG7QPBAmQ+kxIcs/C8kPPyaZ7W5ptp6Xba1w97qi0jf/UZv\nK+4ck6iPlSg26ie2NrUuoYE6s70AaDpDBJNHpVVVEcg50aDflviaI3bWYIjadiAD\nMuqJSHXlMWbZSI1sgmKBTYCw9NlQr3X7It6jolkFs8MYoGbSIJTGEsyqLiJgjkPT\n9qzbqkM21PCd0gEsYfvmdj13dKjkPTsMdmuwGdIJvQtnsGaI9VTWAWb+G/pfNR0V\nz20WgCLGj6ky4EsHfnyrHxRvVS0vZZt/lUOOnYRNWONGvshqLQznJwkMhE7Kd2HQ\nZEyqof/nAgMBAAECggEAB8PuWeFRycDAP1yNIoEt4RI+0CHjM1FQZN3yXPcnP/Ps\nZYiP9j53Mvuyk3qmX883bkCfZTaoA3Vy1KMiXhRFKLGfL1L3Dry6ddMHD9JTG4I7\n739qLEBYQk/q+NKUotkOJaQ7+4/IS4ECEgwc3913VvC4sTZ+2+p8Vfa00RDdN5+G\n0gDEwIyk3R6QDEY183g7U86SukqOs559WMVJ/1FJfc+76nLYD+/sjQFLX32WNFBY\niB4Ii5ZLTrHuoFAQWFS3QHe7m4eQW08aFUTpwnnTXpGkhpxyOqWz0kOhFFY7GahD\nYduoGa6gCi9QmOAjbBh3dRNFFJYga8wJyWphQ6pAVQKBgQDudQUcK7GUEOuJ8zHK\n2m+Tqnl3yaB/43HXvq48NUS6eYCkImi+66fhUctbnV72xnqzXrbCX1sJRLgn2iA9\n0eZe3aHFOiaX3bnaardCY1/HdYn39iJotZYvVSwBy9AcyiL3y6rypur8C0hPrNp9\nBjdbmfhAkKzI98kwkvfaaFZPbQKBgQDiMELhHd3cWa9aSG6ISeoLVLvgybyjehH8\nj/FmduLua0ZxqZeE1TWgmk0MRH7BpzamXU0hYWbG+BO+zd/JtpM3xAUdeMyKa+si\n1Zf6b8QCdirvXnJxEWytW/FXNnv0zI3vhSxLW6vHY/6VK7LE7WCfffamKSdhKUWv\nXRg5cp80IwKBgQDGHQEG26Jowvn+HchDoeHLjHnotOKc/imKNojpytP0HZhsRY5C\n+OT8xYkv73qDinlM5ybuLG0lMSvTKF1bHzXHoVmS0/JWgEe2GK1zAb8Epznegmcq\nGZvSbW/neh7InIQa3eKEQXu/tdv5HkJUV0LM3worEkgLnBpSOfikQ8VZrQKBgEd9\njYXtlLQSvLPCdP0qr4jJTWCtIqxg5tJ3BIuoQ+2rhmZiffuEECEk4/lepNm8ai+H\nCdvlF0EII+WI2JS+2iUkFaHNDokptvYZoKGNNdy5ULS7m1xVb44To2I3XFJxXOM5\nqlhfLxokZtDrMOPBS2rdu1mlZEb3bokQ2Zk+u0cVAoGBAIuvkl+TjBJXZytVAVzc\ngSR9d5KmEwe2chHka2U6ytUEp3xt/uZdHBfOVFZCszr8yTxmVIRCUG8Eas7TzrD4\nFzNQUHZbFG1h1uyyBp7ivCm4QzQ6dHU0kC7h3XZEzK62JmcF2zIWwAPpsflDlNM5\ngcSU9YXZtWOV2u1BE9xgPGA6\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-fbsvc@lemon-pr.iam.gserviceaccount.com",
  "client_id": "100919557449976939261",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40lemon-pr.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
};

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://lemon-pr-default-rtdb.asia-southeast1.firebasedatabase.app/",
  });
}

module.exports = admin;
