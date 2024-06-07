import {Button, Text, TextInput, View, StyleSheet, Platform, Alert} from "react-native";
import React from "react";

export default AuthScreen = ({ email, setEmail, password, setPassword, name, setName, isLogin, setIsLogin, handleAuthentication }) => {
    console.log(isLogin);
    return (
        <View style={styles.authContainer}>
            <Text style={styles.title}>{isLogin ? 'Sign In' : 'Sign Up'}</Text>


            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                secureTextEntry
            />

            {!isLogin && (
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                    placeholder="Username"
                    secureTextEntry
                />
            )}


            <View style={styles.buttonContainer}>
                <Button title={isLogin ? 'Sign In' : 'Sign Up'} onPress={handleAuthentication} color="#3498db" />
            </View>

            <View style={styles.bottomContainer}>
                <Text style={styles.toggleText} onPress={() => setIsLogin(!isLogin)}>
                    {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Sign In'}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    authContainer: {
        // width: '80%',
        // maxWidth: 400,
        paddingTop: Platform.OS === 'ios' ? 170 : 180,
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,
        // elevation: 3,
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: '#ddd',
        borderWidth: 1,
        marginBottom: 16,
        padding: 8,
        borderRadius: 4,
    },
    buttonContainer: {
        marginBottom: 16,
        paddingLeft: 120,
        paddingRight: 120,
    },
    toggleText: {
        color: '#3498db',
        textAlign: 'center',
    },
    bottomContainer: {
        marginTop: 20,
    },
    emailText: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
    },
})