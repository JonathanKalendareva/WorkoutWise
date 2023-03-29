import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, SafeAreaView, Alert, TouchableOpacity, Dimensions, PixelRatio, NavigationContainer, TextInput } from 'react-native';
import CustomInput from '../src/components/customInput';
import CustomButton from '../src/components/CustomButton';

export function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onLogInPressed = () => {
        console.warn("Log In")
    }

    const onForgotPasswordPressed = () => {
        console.warn("Forgot Password")
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Log In</Text>

            <CustomInput
                placeholder={"Username"}
                value={username}
                setValue={setUsername} />
            <CustomInput
                placeholder={"Password"}
                value={password}
                setValue={setPassword}
                secureTextEntry />

            <CustomButton
                text="Log In"
                onPress={onLogInPressed} />
            <CustomButton
                text="Forgot Password?"
                onPress={onForgotPasswordPressed}
                type="tertiary" />
            <CustomButton
                text="Don't have an account? Create one :)"
                onPress={onForgotPasswordPressed}
                type="tertiary" />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#552583',
        alignItems: 'center',
    },

    title: {
        marginTop: Dimensions.get('window').height / 31,
        color: '#FDB927',
        textAlign: 'center',
        fontSize: 40 / PixelRatio.getFontScale(),
        fontWeight: 'bold',
    },

}
);