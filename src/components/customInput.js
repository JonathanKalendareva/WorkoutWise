import React from "react";
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { Controller } from 'react-hook-form'

const CustomInput = ({ control, name, placeholder, secureTextEntry }) => {
    return (
        <View style={styles.container}>
            <Controller
                control={control}
                name={name}
                render={({ field: { value, onChange, onBlur } }) => (
                    <TextInput
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        placeholder={placeholder}
                        style={styles.input}
                        secureTextEntry={secureTextEntry}
                    />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#361650',
        width: '85%',
        height: 40,

        borderColor: '#E8E8E8',
        borderWidth: 1,
        borderRadius: 5,

        paddingHorizontal: 10,
        paddingVertical: 5,
        marginVertical: 7,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    input: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Arial',
    }
});

export default CustomInput;