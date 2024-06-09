import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import TabNavigation from "./TabNavigation";
import AuthScreen from './screens/AuthScreen';
import firebaseConfig from './firebaseConfig';
import { writeUserData } from "./firebase_fns/userDataFns";


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);




export default App = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null); // Track user authentication state
    const [isLogin, setIsLogin] = useState(true);
    const [name, setName] = useState('');

    const auth = getAuth(app);
    console.log('app js');
    console.log(database);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });

        return () => unsubscribe();
    }, [auth]);


    const handleAuthentication = async () => {
        try {
            if (user) {
                // If user is already authenticated, log out
                console.log('User logged out successfully!');
                await signOut(auth);
            } else {
                // Sign in or sign up
                if (isLogin) {
                    // Sign in
                    await signInWithEmailAndPassword(auth, email, password);
                    console.log('User signed in successfully!');
                } else {
                    // Sign up
                    await createUserWithEmailAndPassword(auth, email, password);
                    console.log('User created successfully!');
                    writeUserData(database, email, name);
                }
            }
        } catch (error) {
            console.error('Authentication error:', error.message);
            alert(error.message);
        }
    };

    return (
        <View
            // contentContainerStyle={styles.container}
            style={styles.container}
        >
            {user ? (
                // Show user's email if user is authenticated
                <TabNavigation database={database}/>
            ) : (
                // Show sign-in or sign-up form if user is not authenticated
                <AuthScreen
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    name={name}
                    setName={setName}
                    isLogin={isLogin}
                    setIsLogin={setIsLogin}
                    handleAuthentication={handleAuthentication}
                />
            )}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexGrow: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // padding: 16,
        // backgroundColor: '#f0f0f0',
    },

});