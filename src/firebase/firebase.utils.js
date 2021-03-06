import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config =  {
    apiKey: "AIzaSyANZX5RqU1Y-Zk7OM4XpH0SoqSnYdW3mek",
    authDomain: "e-commerce-db-1c9a0.firebaseapp.com",
    projectId: "e-commerce-db-1c9a0",
    storageBucket: "e-commerce-db-1c9a0.appspot.com",
    messagingSenderId: "764033488955",
    appId: "1:764033488955:web:f195e5e9c257c02ce7a41e",
    measurementId: "G-L9E7EMTR5S"
}

firebase.initializeApp(config)

export const  createUserProfileDocument = async (userAuth,addtionalData) =>{
    if(!userAuth)return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot =  await userRef.get()
    if(!snapShot.exists){
        const {displayName,email} = userAuth
        const createdAt = new Date()
        try{

            await userRef.set({
                    displayName,
                    email,
                    createdAt,
                    ...addtionalData
            })
        }catch(err){
            console.log("error saving user to db",err.message)
        }
        
    }

    return userRef
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;