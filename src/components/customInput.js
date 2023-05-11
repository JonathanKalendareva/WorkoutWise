import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native'
import { Controller } from 'react-hook-form'
import { Entypo } from "@expo/vector-icons"

const temp = Dimensions.get('window').width / 13.3;

const CustomInput = ({ control, name, rules = {}, placeholder, secureTextEntry }) => {
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(true);

    const togglePassword = () => {
        setShowPassword(!showPassword)
    }
    
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
                            secureTextEntry={secureTextEntry ? showPassword : false}
                        
                        />
                        {secureTextEntry && (
                            <TouchableOpacity onPress={togglePassword}>
                                {showPassword ? (<Entypo name="eye" size={27} color="white" />
                                ) : (<Entypo name="eye-with-line" size={27} color="white" />)}
                            </TouchableOpacity>
                        )}
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
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    input: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Arial',
        flex: 1,
    },

    err_msg: {
        color: 'red',
        alignSelf: 'stretch',
        marginLeft: temp,
    },

    image: {
        height: Dimensions.get('window').height / 31.4159265358979,
        width: Dimensions.get('window').height / 31.4159265358979,
    },

});

export default CustomInput;