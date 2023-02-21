import React from 'react';
import { View, StyleSheet } from 'react-native';
import theme from '../themes/theme';

const styles = StyleSheet.create({
    dark: {
        backgroundColor: theme.colors.appBackground,
    },
    grey: {
        backgroundColor: theme.colors.greyPrimary,
    },
    container: {
        marginHorizontal: 25,
        height: '100%',
    },
    center: {
        justifyContent: 'center',
    },
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
