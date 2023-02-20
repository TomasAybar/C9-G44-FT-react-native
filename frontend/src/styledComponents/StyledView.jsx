import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    dark: {
        backgroundColor: '#121111',
    },
    grey: {
        backgroundColor: '#2B2B2B',
    },
    container: {
        marginHorizontal: 25,
        height: "100%",
    },
    center: {
        justifyContent: 'center',
        //alignItems: 'center',
    }
});

export default function StyledView({ children, dark, grey, container, center, ...props }) {
    const viewStyles = [
        dark && styles.dark,
        grey && styles.grey,
        container && styles.container,
        center && styles.center,
    ];
    return (
        <View style={viewStyles} {...props}>
            {children}
        </View>
    );
}
