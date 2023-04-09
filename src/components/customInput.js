import React from "react";
import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native'
import { Controller } from 'react-hook-form'

const temp = Dimensions.get('window').width / 13.3;

const CustomInput = ({ control, name, rules = {}, placeholder, secureTextEntry }) => {

    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                <>
                    <View
                        style={[styles.container,
                        { borderColor: error ? 'red' : '#E8E8E8' }]}>
                        <TextInput
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            placeholder={placeholder}
                            placeholderTextColor="#A5A5A5"
                            style={styles.input}
                            secureTextEntry={secureTextEntry}
                        />
                    </View>
                    {error && (
                        <Text style={styles.err_msg}>{error.message || 'Error'}</Text>)}
                </>
            )}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#361650',
        width: '85%',
        height: 40,

        borderWidth: 1,
        borderRadius: 5,

        paddingHorizontal: 10,
        paddingVertical: 5,
        marginVertical: 7,
        justifyContent: 'center',

    },
    input: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Arial',
    },
    err_msg: {
        color: 'red',
        alignSelf: 'stretch',
        marginLeft: temp,

    }
});

export default CustomInput;