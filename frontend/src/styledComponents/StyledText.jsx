import React from 'react';
import { Text, StyleSheet } from 'react-native';
import theme from '../themes/theme';

const styles = StyleSheet.create({
    general: {
        color: '#ffffff',
        alignSelf: 'center',
        textAlign: 'center',
        fontFamily: 'Inter_400Regular',
    },
    yellow: {
        color: theme.colors.yellowPrimary,
    },
    black: {
        color: '#000000',
    },
    left: {
        textAlign: 'left',
        alignSelf: 'flex-start',
    },
    right: {
        textAlign: 'right',
        alignSelf: 'flex-end',
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
    size20: {
        fontSize: 20,
    },
    size24: {
        fontSize: 24,
    },
    size25: {
        fontSize: 25,
    },
    size32: {
        fontSize: 32,
    },
    line24: {
        lineHeight: 24,
    },
    line32: {
        lineHeight: 32,
    },
    weight500: {
        fontFamily: 'Inter_500Medium',
    },
    weight600: {
        fontFamily: 'Inter_600SemiBold',
    },
    weight700: {
        fontFamily: 'Inter_700Bold',
    },
    size50: {
        fontSize: 50,
    },
    alignSelf: {
        alignSelf: 'center',
    },

    alignStretch: {
        alignSelf: 'stretch',
    },
   
});

export default function StyledText({
    children,
    yellow,
    black,
    right,
    left,
    size10,
    size12,
    size14,
    size16,
    size18,
    size20,
    size24,
    size25,
    size32,
    weight500,
    weight600,
    weight700,
    line24,
    line32,
    alignSelf,
    alignStretch,
    
    ...props
}) {
    const textStyles = [
        styles.general,
        yellow && styles.yellow,
        black && styles.black,
        right && styles.right,
        left && styles.left,
        size10 && styles.size10,
        size12 && styles.size12,
        size14 && styles.size14,
        size16 && styles.size16,
        size18 && styles.size18,
        size20 && styles.size20,
        size24 && styles.size24,
        size25 && styles.size25,
        size32 && styles.size32,
        weight500 && styles.weight500,
        weight600 && styles.weight600,
        weight700 && styles.weight700,
        line24 && styles.line24,
        line32 && styles.line32,
        alignSelf && styles.alignSelf,
        alignStretch && styles.alignStretch,
    ];
    return (
        <Text style={[textStyles, {...props}]}>
            {children}
        </Text>
    );
}
