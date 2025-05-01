"use client"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import auth from './firebaseConfig';



export const authContext = createContext('');
const AuthProvider = ({ children }) => {

    // Manage State
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Handle Register User from Firebase
    const handleRegister = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Handle Login User form Firebase
    const handleLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Handle LogOut User 
    const handleLogOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    // Get SingIn Current User & Observerd
    useEffect(() => {
        const unSubscrive = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            const userInfo = {email: currentUser?.email}
            // console.log(userInfo)
            if (currentUser) {
                // // Jwt Related Work
                // axiosPublic.post('/jwt', userInfo)
                //     .then(res => {
                //         console.log(res.data)
                //     })
            }
        })
        return () => {
            return unSubscrive();
        }
    }, [])

    // Auth value
    const authValue = {
        user,
        loading,
        handleRegister,
        handleLogin,
        handleLogOut,
    };

    return (
        <authContext.Provider value={authValue}>
            {children}
        </authContext.Provider>
    )
}

export default AuthProvider
