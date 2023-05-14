import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, SafeAreaView, Alert, TouchableOpacity, Dimensions, PixelRatio, NavigationContainer, TextInput } from 'react-native';
import CustomInput from '../src/components/customInput';
import CustomButton from '../src/components/CustomButton';
import { useForm, Controller } from 'react-hook-form'
import { useNavigation, useRoute } from '@react-navigation/native';
import { Auth } from 'aws-amplify';

export function ConfirmationPage() {
  const route = useRoute();
  const { control, handleSubmit } = useForm({
    defaultValues: { email: route.params?.email },
  });
  const navigation = useNavigation();

  /* function for button functionality */
  const onConfirmPressed = async (formData) => {
    try {
      const { username, code } = formData;
      const response = await Auth.confirmSignUp(username, code);
      console.log(response);
    } catch (e) {
      Alert.alert("Oops", e.message);
    }
  };

  const onResendCodePressed = () => {
    console.log("pressed resend code");
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomInput
        name="username"
        placeholder={"Username"}
        control={control}
        rules={{
          required: 'Username is required',
        }}
      />
      <CustomInput
  name="code" // Added code field
  placeholder={"Confirmation code"}
  control={control}
  rules={{
    required: 'Confirmation code is required',
  }}
/>

      <CustomButton
        text="Confirmed"
        onPress={handleSubmit(onConfirmPressed)}
      />
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