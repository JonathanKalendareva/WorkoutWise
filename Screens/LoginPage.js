import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, SafeAreaView, Alert, TouchableOpacity, Dimensions, PixelRatio, NavigationContainer, TextInput } from 'react-native';
import CustomInput from '../src/components/customInput';
import CustomButton from '../src/components/CustomButton';
import { useForm, Controller } from 'react-hook-form'

export function LoginPage({ navigation }) {

    const { control, handleSubmit, formState: { errors } } = useForm();

    console.log(errors)

    /* functions for button functionality*/
    const onLogInPressed = (data) => {
        console.log(data)
    }

    const onForgotPasswordPressed = () => {
        console.warn("Forgot Password")
    }

    const onSignUpPressed = () => {
        navigation.navigate("SignUpPage")
    }

    return (
        <SafeAreaView style={styles.container}>
            {/* margin for the top of the page */}
            <View style={{ marginTop: 40 }} />

            {/* inputs for typing in email and password */}
            <CustomInput
                name="email"
                placeholder={"Email"}
                control={control}
                rules={{
                    required: 'Email is required',
                    pattern: {
                        value: /^\w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/,
                        message: 'Invalid email address'
                    }
                }}
            />
            <CustomInput
                name="password"
                placeholder={"Password"}
                control={control}
                rules={{ required: 'Password is required' }}
                secureTextEntry />

            {/* buttons for logging in and forgetting password */}
            <CustomButton
                text="Log In"
                onPress={handleSubmit(onLogInPressed)} />
            <CustomButton
                text="Forgot Password?"
                onPress={onForgotPasswordPressed}
                type="tertiary" />
            <CustomButton
                text="Don't have an account? Create one :)"
                onPress={onSignUpPressed}
                type="tertiary" />

            {/* the -----OR----- visual */}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15, marginTop: 15 }}>
                <View style={{ width: Dimensions.get('window').width / 2.84, height: 1, backgroundColor: 'white' }} />
                <View>
                    <Text style={{ width: 50, textAlign: 'center', color: 'white' }}>OR</Text>
                </View>
                <View style={{ width: Dimensions.get('window').width / 2.84, height: 1, backgroundColor: 'white' }} />
            </View>

            {/* buttons for logging in with third party accounts */}
            <View style={styles.container_row}>
                <TouchableOpacity style={styles.container_image}>
                    <Image
                        style={styles.image}
                        source={require('../assets/images/google.png')} />
                    <Text
                        style={styles.text}
                        numberOfLines={1}>Log in with Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.container_image}>
                    <Image
                        style={styles.image}
                        source={require('../assets/images/facebook.png')} />
                    <Text
                        style={styles.text}
                        numberOfLines={1}>Log in with Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.container_image}>
                    <Image
                        style={styles.image}
                        source={require('../assets/images/apple.png')} />
                    <Text
                        style={styles.text}
                        numberOfLines={1}>Log in with Apple</Text>
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
        marginLeft: Dimensions.get('window').width / 5,
        marginRight: 5,
    },

    container_image: {
        backgroundColor: '#FDB927',
        marginLeft: Dimensions.get('window').height / 60,
        marginRight: Dimensions.get('window').height / 60,
        marginBottom: 10,
        borderRadius: 5,

        padding: 5,
        width: Dimensions.get('window').width / 1.22,
        flexDirection: 'row',

        alignItems: 'center',
    },

    container_row: {
        flexDirection: 'column',
        padding: 10,
    },

    text: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#552583',
    }
}
);