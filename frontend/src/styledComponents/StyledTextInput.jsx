import React from 'react'
import { TextInput, StyleSheet } from 'react-native'
import theme from '../themes/theme';

const styles = StyleSheet.create({
    textInput:{
        color: '#ffffff',
        opacity: 0.5,
        fontSize: 12,
        flexGrow: 1,
        borderRadius: 12,
        borderWidth: 1,
        backgroundColor: theme.colors.greyPrimary,
        padding: 16,
        marginVertical: 10
    },
    error: {
        borderColor: 'red'
    }
})


const StyledTextInput = ({ style = {}, error, ...props }) => {
    const inputStyle= [
        styles.textInput,
        style,
        error && styles.error
    ]
  return  <TextInput style={inputStyle} {...props}/>
    
  
}

export default StyledTextInput