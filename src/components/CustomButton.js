import React from "react";
import { View, Text, StyleSheet, Pressable } from 'react-native';

const CustomButton = ({ onPress, text, type = "primary" }) => {
    return (
        <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
            <Text
                style={[styles.text, styles[`text_${type}`]]}>
                {text}
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '85%',
        padding: 13,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
    },

    container_primary: {
        backgroundColor: '#FDB927',
    },

    container_tertiary: {
        padding: 4,
    },

    text: {
        fontWeight: 'bold',
        color: '#552583'
    },
    text_tertiary: {
        color: 'gray',
    },
})

export default CustomButton;