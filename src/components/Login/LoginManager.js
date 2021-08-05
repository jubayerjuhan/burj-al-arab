import "firebase/auth";
import { firebaseConfig } from "./Firebase-config";
import firebase from "firebase/app";

!firebase.apps.length ?
    firebase.initializeApp(firebaseConfig) : firebase.app();

export const signInWithGoogle = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const user = result.user;
                const { displayName, email } = user;
                const signedInUser = {
                    name: displayName,
                    email: email,
                }
                return signedInUser;
                // history.replace(from);

                //................................
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = error.credential;
                return errorMessage;
                // ...
            });
}