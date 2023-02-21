import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const styles = StyleSheet.create({
    textGeneral: {
        fontFamily: 'Inter_500Medium',
        fontSize: 18,
    },
    buttonGeneral: {
        width: '100%',
        height: 40,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    black: {
        button: {
            backgroundColor: '#121111',
            borderWidth: 1,
            borderColor: '#D6F066',
        },
        text: {
            color: '#D6F066',
        },
    },
    white: {
        button: {
            backgroundColor: '#FFFFFF',
            border: '1px solid #000000',
        },
        text: {
            color: '#000000',
        },
    },
});

export default function SyledButton({ onPress, title, black, white }) {
    const button = [styles.buttonGeneral, white && styles.white.button, black && styles.black.button];
    const text = [styles.textGeneral, white && styles.white.text, black && styles.black.text];

    return (
        <TouchableOpacity style={button} onPress={onPress}>
            <Text style={text}>{title}</Text>
        </TouchableOpacity>
    );
}
