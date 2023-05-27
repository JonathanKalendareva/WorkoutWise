import React, { useState } from 'react';
import { StyleSheet, Text, Image, View, SafeAreaView, Alert, TouchableOpacity, Dimensions, PixelRatio, NavigationContainer, TextInput } from 'react-native';
import CustomInput from '../src/components/customInput';
import CustomButton from '../src/components/CustomButton';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Auth } from 'aws-amplify';


export function ConfirmationPage({route}) {
  const {email} = route.params;
  const { control, handleSubmit } = useForm({
    defaultValues: { email },
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

const onResendCodePressed = async () => {
    try {
      await Auth.resendSignUp(email);
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <CustomInput
        name = {email}
        placeholder="Email"
        control={control} // Pass the `control` prop correctly
        rules={{
          required: 'Username is required',
        }}
      />

      <CustomInput
        name="code"
        placeholder="Confirmation code"
        control={control} // Pass the `control` prop correctly
        rules={{
          required: 'Confirmation code is required',
        }}
      />

      <CustomButton
        text="Confirmed"
        onPress={handleSubmit(onConfirmPressed)}
      />
      <CustomButton
        text="Resend Code"
        onPress={onResendCodePressed}
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