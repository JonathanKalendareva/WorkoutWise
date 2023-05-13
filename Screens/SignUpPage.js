import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, SafeAreaView, Alert, TouchableOpacity, Dimensions, PixelRatio, NavigationContainer, TextInput } from 'react-native';
import CustomInput from '../src/components/customInput';
import CustomButton from '../src/components/CustomButton';
import { useForm, Controller } from 'react-hook-form'
import { useNavigation, useRoute } from '@react-navigation/native';

import { Auth } from 'aws-amplify';


export function SignUpPage() {
    const { control, handleSubmit, formState: { errors } } = useForm();
    const navigation = useNavigation();
    
    async function onSubmit(data) {
        try {
            await signUp(data.email, data.password);
        } catch (error) {
            console.log(error);
        }
    }
    
    async function signUp( email = string, password = string ) {
        try {
            const { user } = await Auth.signUp({
                username: email,
                password,
                attributes: {
                    email,
                },
                autoSignIn: { 
                    enabled: true,
                }
            });
            console.log('successfully signed up:', email)
            navigation.navigate("ConfirmationPage", {username});
            return user;
        } catch (error) {
            console.warn('Email already exists');
            throw error;
        }
    }
    
    return (    
        <SafeAreaView style={styles.container}>
            {/* Sign Up text boxes for Email, Passwords, and Confirm Password*/}
            <View style={{ marginTop: Dimensions.get('window').width / 17 }} />
            <View style={{ marginTop: Dimensions.get('window').width / 17 }} />

            <CustomInput
                name="email"
                placeholder={"Email"}
                control={control}
                rules={{
                    required: 'Email is required',
                    pattern: {
                        value: /^[a-zA-Z0-9]+(?:[._-][a-zA-Z0-9]+)*@[a-zA-Z0-9]+.[a-zA-Z]{2,}$/,
                        message: 'Invalid email address'
                    }
                }}
            />

            <CustomInput
                name="password"
                placeholder={"Password"}
                control={control}
                secureTextEntry
                rules={{
                    required: 'Password is required',
                    pattern: {
                        value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                        message: 'Password must: \
                                    \nContain at least one uppercase\
                                    \nContain at least one lowercase\
                                    \nContain at least one positive integer\
                                    \nContain at least one special character\
                                    \nBe at least 8 characters long'
                    },
                }}
            />

            <CustomButton
                text="Sign Up"
                onPress={handleSubmit(onSubmit)} />

            {/* White line before OR and White Line after */}

            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15, marginTop: 15 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15, marginTop: 15 }}>
                    <View style={{ width: Dimensions.get('window').width / 2.84, height: 1, backgroundColor: 'white' }} />
                    <View>
                        <Text style={{ width: 50, textAlign: 'center', color: 'white' }}>OR</Text>
                    </View>
                    <View style={{ width: Dimensions.get('window').width / 2.84, height: 1, backgroundColor: 'white' }} />
                </View>
            </View>

            {/* Sign Up for Google, Facebook, and Apple */}

            <View style={styles.container_row}>
                <TouchableOpacity style={styles.container_image}>
                    <Image
                        style={styles.image}
                        source={require('../assets/images/google.png')} />
                    <Text
                        style={styles.text}
                        numberOfLines={1}>Sign Up with Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.container_image}>
                    <Image
                        style={styles.image}
                        source={require('../assets/images/facebook.png')} />
                    <Text
                        style={styles.text}
                        numberOfLines={1}>Sign Up with Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.container_image}>
                    <Image
                        style={styles.image}
                        source={require('../assets/images/apple.png')} />
                    <Text
                        style={styles.text}
                        numberOfLines={1}>Sign Up with Apple</Text>
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