

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
export const AuthContext = createContext()
const AuthProvider = ({children}) => {

    const auth = getAuth(app)

    const [user,setUser] = useState()

    const [loading,setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider()


    const signUp = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (name, image) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })
    }


    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubtribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)

        }) 

        return () =>{
            unSubtribe()
        }

    },[auth, setLoading, setUser])


    const authInfo = {
        user,
        loading,
        signUp,
        updateUser,
        signIn,
        googleSignIn,
        logOut
    }


    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;