import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
export const  AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const provider = new GoogleAuthProvider();
const createUser = (email,password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
}
const updateUser = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo)
}
const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
}
const resetPassword = (email) => {
    return sendPasswordResetEmail(auth,email )
}
const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
    .then(() => {
      console.log("email verification sent")
    });
  }
const logout = () =>{
    return signOut(auth)
}
useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        console.log("user observing");
        setUser(currentUser);
        setLoading(false);
    });
    return () => unsubscribe();
}, [])
    const authInfo = {
        createUser,
        updateUser,
        loginUser,
        user,
        resetPassword,
        verifyEmail,
        logout
    }
    
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;