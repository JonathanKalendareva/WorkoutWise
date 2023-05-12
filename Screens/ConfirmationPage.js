import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, SafeAreaView, Alert, TouchableOpacity, Dimensions, PixelRatio, NavigationContainer, TextInput } from 'react-native';
import CustomInput from '../src/components/customInput';
import CustomButton from '../src/components/CustomButton';
import { useForm, Controller } from 'react-hook-form'
import { useNavigation, useRoute } from '@react-navigation/native';
import {Auth} from 'aws-amplify';

export function ConfirmationPage(){
    const { control, handleSubmit, formState: { errors } } = useForm();
    console.log(errors);
    const navigation = useNavigation();

    /* functions for button functionality*/
    const onConfirmPressed = async data => {
        try{
           const response =  await Auth.confirmSignUp(data.code);
           console.log(response);
        } catch(e) {
            Alert.alert("Oops", e.message);
        }

    }

    const onResendCodePressed = () => {
        console.log("pressed resend code")
    }

    return(
        <SafeAreaView style={styles.container}>
            <CustomInput
                name="Confirmation Code"
                placeholder={"Confirmation Code"}
                control={control}
                rules={{
                    required: 'Confirmation Code',
                    pattern: {
                        value: /^[0-9]{1,6}$/,
                        message: 'Invalid Confirmation Code'
                    }
                }}
            />
            <CustomButton
                text="Confirmed"
                onPress={onConfirmPressed} />
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