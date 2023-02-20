import React from 'react';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    general: {
        color: '#ffffff',
        alignSelf: 'center',
        textAlign: 'center',
        fontFamily: 'Inter_400Regular',
    },
    size10: {
        fontSize: 10,
    },
    size12: {
        fontSize: 12,
    },
    size14: {
        fontSize: 14,
    },
    size16: {
        fontSize: 16,
    },
    size18: {
        fontSize: 18,
    },
    size32: {
        fontSize: 32,
    },
    weight500: {
        fontFamily: 'Inter_500Medium',
    },
    weight700: {
        fontFamily: 'Inter_700Bold',
    },
    size50: {
        fontSize: 50,
    },
});

export default function StyledText({
    children,
    size10,
    size12,
    size14,
    size16,
    size18,
    size32,
    weight500,
    weight700,
    ...props
}) {
    const textStyles = [
        styles.general,
        size10 && styles.size10,
        size12 && styles.size12,
        size14 && styles.size14,
        size16 && styles.size16,
        size18 && styles.size18,
        size32 && styles.size32,
        weight500 && styles.weight500,
        weight700 && styles.weight700,
    ];
    return (
        <Text style={textStyles} {...props}>
            {children}
        </Text>
    );
}
