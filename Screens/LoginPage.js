import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, SafeAreaView, Alert, TouchableOpacity, Dimensions, PixelRatio, NavigationContainer, TextInput } from 'react-native';
import CustomInput from '../src/components/customInput';
import CustomButton from '../src/components/CustomButton';
import { GoogleSVG } from '../assets/images/google.svg'
import facebookSVG from '../assets/images/facebook.svg'
import appleSVG from '../assets/images/apple.svg'


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

            <View style={styles.container_row}>
                <TouchableOpacity style={styles.container_image}>
                    <Image
                        style={styles.image}
                        source={require('../assets/images/google.svg')} />
                    <Text
                        numberOfLines={1}>Log in with Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.container_image}>
                    <Image
                        style={styles.image}
                        source={require('../assets/images/facebook.svg')} />
                    <Text numberOfLines={1}>Log in with Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.container_image}>
                    <Image
                        style={styles.image}
                        source={require('../assets/images/apple.svg')} />
                    <Text numberOfLines={1}>Log in with Apple</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#552583',
        alignItems: 'center',
    },

    image: {
        height: Dimensions.get('window').height / 31.4159265358979,
        width: Dimensions.get('window').height / 31.4159265358979,
    },

    container_image: {
        backgroundColor: 'white',
        marginLeft: Dimensions.get('window').height / 60,
        marginRight: Dimensions.get('window').height / 60,
        marginBottom: 10,

        borderColor: '#000',
        borderRadius: 5,
        borderWidth: 1.5,

        padding: 5,
        width: Dimensions.get('window').width / 1.22,
        flexDirection: 'row'
    },

    container_row: {
        flexDirection: 'column',
        padding: 10,
    },

    text: {

    }
}
);