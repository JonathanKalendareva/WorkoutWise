import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, SafeAreaView, Alert, TouchableOpacity, Dimensions, PixelRatio, NavigationContainer, TextInput } from 'react-native';
import CustomInput from '../src/components/customInput';
import CustomButton from '../src/components/CustomButton';
import { useForm, Controller } from 'react-hook-form'
import { useNavigation, useRoute } from '@react-navigation/native';

export function ConfirmationPage(){
    const { control, handleSubmit, formState: { errors } } = useForm();
    console.log(errors);
    const navigation = useNavigation();

    /* functions for button functionality*/
    const onConfirmPressed = () => {
        console.log("confirm pressed")
    }

    const onResendCodePressed = () => {
        console.log("pressed resend code")
    }

    const onBackToSignIn = () => {
        navigation.navigate("SignUpPage")
    }

    return(
        <SafeAreaView style={styles.container}>
            <Text>Confirm Your Email</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#552583',
        alignItems: 'center',
    },

}
);