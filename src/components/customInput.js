import React from "react";
import { View, Text, TextInput, StyleSheet } from 'react-native'

const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {
    return (
        <View style={styles.container}>
            <TextInput
                value={value}
                onChangeText={setValue}
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor="grey"
                secureTextEntry={secureTextEntry} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#361650',
        width: '85%',

        borderColor: '#E8E8E8',
        borderWidth: 1,
        borderRadius: 5,

        paddingHorizontal: 10,
        paddingVertical: 5,
        marginVertical: 7,
    },
    input: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Arial'
    }
});

export default CustomInput;