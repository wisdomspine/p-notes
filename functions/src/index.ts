import * as functions from 'firebase-functions';
import * as admin from "firebase-admin";
import { Notebook } from './Notebook';
admin.initializeApp();
export const createDefaultNotebook = functions.auth.user().onCreate((user, context) => {
    
    admin.firestore().doc(`notebooks/${user.uid}/reviews/default`).create((new Notebook({
        name: 'Default Notebook',
        permanent: true, //This notebook can't be deleted
        description: 'This is a default notebook, it can\' be deleted',
        id: 'default'
    }))).then(e => {
        console.log(e);
        
    }).catch((e)=>{
        console.log(e);
        
    })
})
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
