import React from 'react';
import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import theme from '../../themes/theme';

interface Props {
    onPress: () => void
    text: string
    color: 'white' | 'black'
    style?: StyleProp<ViewStyle>
}

export const OnboardingButton = ({ onPress, text, color, style } : Props) => {
  return (
    <View
        style={{
        ...(style as any),
      }}
    >
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.7}
            style={
                color === 'white' 
                ? styles.buttonWhite 
                : styles.buttonBlack
            }
        >
            <Text 
                style={
                    color === 'white'
                    ? styles.textWhite
                    : styles.textBlack
                }>{ text }</Text>
                
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    buttonWhite: {
        backgroundColor: '#FFFFFF',
        borderRadius: 13,
        paddingVertical: 12
    },
    textWhite: {
        textAlign: 'center' ,
        fontWeight: '500',
        fontSize: 18
    },
    buttonBlack: {
        borderColor: theme.colors.yellowPrimary,
        backgroundColor: theme.colors.appBackground,
        borderWidth: 1,
        borderRadius: 13,
        paddingVertical: 12
    },
    textBlack: {
        textAlign: 'center' ,
        fontWeight: '500',
        fontSize: 18,
        color: theme.colors.yellowPrimary
    }
});