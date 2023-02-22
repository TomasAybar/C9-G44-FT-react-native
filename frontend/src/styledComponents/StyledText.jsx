import React from 'react';
import { Text, StyleSheet } from 'react-native';
import theme from '../themes/theme';

const styles = StyleSheet.create({
    general: {
        color: '#ffffff',
        textAlign: 'center',
        fontFamily: 'Inter_400Regular',
    },
    alignCenter:{
        alignSelf: 'center'
    },
    alignStretch: {
        alignSelf: 'stretch'
    },
    alignItem: {
        display: 'flex',
        alignItems: 'flex-start'
    },
    yellow: {
        color: theme.colors.yellowPrimary,
    },
    black: {
        color: '#000000',
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
    }
});

export default function StyledText({
    children,
    yellow,
    black,
    size10,
    size12,
    size14,
    size16,
    size18,
    size32,
    weight500,
    weight700,
    alignItem,
    ...props
}) {
    const textStyles = [
        styles.general,
        yellow && styles.yellow,
        black && styles.black,
        size10 && styles.size10,
        size12 && styles.size12,
        size14 && styles.size14,
        size16 && styles.size16,
        size18 && styles.size18,
        size32 && styles.size32,
        weight500 && styles.weight500,
        weight700 && styles.weight700,
        alignItem && styles.alignItem,
    ];
    return (
        <Text style={textStyles} {...props}>
            {children}
        </Text>
    );
}
