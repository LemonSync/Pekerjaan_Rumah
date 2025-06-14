const admin = require('firebase-admin');

if (!admin.apps.length) {
  console.log("PRIVATE_KEY raw:");
console.log(process.env.FIREBASE_PRIVATE_KEY);
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    }),
  });
}

const db = admin.firestore();

module.exports = { db };
