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
    },
    height50: {
        height: '50%',
    },
    height100: {
        height: '100%',
    },
    center: {
        justifyContent: 'center',
    },
    spaceEvenly: {
        justifyContent: 'space-evenly'
    }
});

export default function StyledView({
    children,
    dark,
    grey,
    container,
    center,
    height50,
    height100,
    spaceEvenly,
    ...props
}) {
    const viewStyles = [
        dark && styles.dark,
        grey && styles.grey,
        container && styles.container,
        center && styles.center,
        height50 && styles.height50,
        height100 && styles.height100,
        spaceEvenly && styles.spaceEvenly,
    ];
    return (
        <View style={viewStyles} {...props}>
            {children}
        </View>
    );
}
