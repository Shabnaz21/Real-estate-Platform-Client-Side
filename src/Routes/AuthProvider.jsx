import {
    GithubAuthProvider, GoogleAuthProvider,
    createUserWithEmailAndPassword, getAuth, onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword, signInWithPopup, signOut,
}
    from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import useAxios from "../Hooks/useAxios";




export const AuthContext = createContext(null);
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const AuthProvider = ({ children }) => {
    const axios = useAxios();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(true);

    // create
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // signIn
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    // Google
    const googleSignIn = () => {
        setLoading(true);
        setError(true)
        return signInWithPopup(auth, googleProvider);
    }
   
    // gitHub
    const githubSignIn = () => {
        setLoading(true);
        setError(true)
        return signInWithPopup(auth, githubProvider);
    }
    
    // logout
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // rest password
    const resetPassword = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(() => {
        const outsider = onAuthStateChanged(auth, currentUser => {

            if (currentUser) {
                //get token
                const userInfo = { email: currentUser.email }
                axios.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);
                    }
                })
            } else {
                //TODO :remove token
                localStorage.removeItem('access-token');
            }
            setUser(currentUser);
            setLoading(false);

        });
        return () => {
            outsider();
        }
    }, [])
    const authInfo = {

        user,
        createUser,
        loading,
        resetPassword,
        signIn,
        error,
        googleSignIn,
        githubSignIn,
        logOut

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;