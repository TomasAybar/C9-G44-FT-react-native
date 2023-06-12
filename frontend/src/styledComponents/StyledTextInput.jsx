import React, { useState } from 'react'
import { TextInput, StyleSheet } from 'react-native'
import theme from '../themes/theme'

const styles = StyleSheet.create({
  textInput: {
    color: '#ffffff',
    opacity: 0.5,
    fontSize: 12,
    // flexGrow: 1,
    borderRadius: 12,
    borderWidth: 1,
    backgroundColor: theme.colors.greyPrimary,
    marginVertical: 5,
    height: 54,
    paddingHorizontal: 15,
    marginTop: 5
  },
  error: {
    borderColor: 'red'
  },
  inputFocused: {
    borderColor: theme.colors.yellowPrimary
  }
})

const StyledTextInput = ({ style = {}, error, ...props }) => {
  const inputStyle = [styles.textInput, style, error && styles.error]
  const [inputFocused, setInputFocused] = useState(false)

  const handleFocus = () => {
    setInputFocused(true)
  }

  const handleBlur = () => {
    setInputFocused(false)
  }

  return (
    <TextInput
      style={[inputStyle, inputFocused && styles.inputFocused]}
      onFocus={handleFocus}
      onBlur={handleBlur}
      {...props}
    />
  )
}

export default StyledTextInput
