import * as functions from 'firebase-functions';
import * as admin from "firebase-admin";
admin.initializeApp();

const defaultNotebookCover = 'https://firebasestorage.googleapis.com/v0/b/p-notes-a0a79.appspot.com/o/default%2Fdefault%20notebook%20cover.jpeg?alt=media&token=4294c47b-d9c1-49c1-bbdd-85a6ded10a80';

export const createDefaultNotebook = functions.auth.user().onCreate((user, context) => {
    return admin.firestore().doc(`notebooks/${user.uid}/notebooks/default`).create(({name: 'Default Notebook', cover:defaultNotebookCover, description: 'This is the default notebook', permanent: true, createdAt: admin.firestore.FieldValue.serverTimestamp(), updatedAt: admin.firestore.FieldValue.serverTimestamp()}));
})

export const setDefaultNotebookCover = functions.firestore.document(`notebooks/{userId}/notebooks/{notebookId}`).onWrite((change, context) =>{
    const data = change.before.data() || {};
    if('cover' in data && !data.cover){
        data.cover = defaultNotebookCover;
    }
});
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
