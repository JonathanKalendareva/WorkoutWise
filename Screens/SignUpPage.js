import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, SafeAreaView, Alert, TouchableOpacity, Dimensions, PixelRatio, NavigationContainer, TextInput } from 'react-native';
import CustomInput from '../src/components/customInput';
import CustomButton from '../src/components/CustomButton';
import { useForm, Controller } from 'react-hook-form'
import { useNavigation } from '@react-navigation/native';

export function SignUpPage({ navigation }) {
    const { control, handleSubmit, watch } = useForm();
    const pwd = watch('password')
    const navigation = useNavigation();

    const onSignUpPressed = () => {
        console.warn("Sign Up Pressed")
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
                secureTextEntry
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
                        value: /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{4,16}$/,
                        message: 'Invalid email address'
                    }
                }}
            />
            <CustomInput
                name="confirm_password"
                placeholder={"Confirm Password"}
                control={control}
                rules={{
                    validate: value => value === pwd || 'Passwords do not match'
                }
                }
            />

            <CustomButton
                text="Sign Up"
                onPress={handleSubmit(onSignUpPressed)} />

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