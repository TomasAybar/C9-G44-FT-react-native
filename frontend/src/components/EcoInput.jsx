import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import theme from '../themes/theme';

export const EcoInput = ({ type = 'text', placeholder = '' }) => {
  const [onchangeInput, setOnchangeInput] = useState('');

  return (
    <TextInput
      style={style.input}
      value={onchangeInput}
      keyboardType={type}
      placeholder={placeholder}
      placeholderTextColor={'#fff'}
      onChangeText={setOnchangeInput}
    />
  );
};

const style = StyleSheet.create({
  input: {
    height: 60,
    paddingHorizontal: 12,
    backgroundColor: theme.colors.greyPrimary,
    borderRadius: 10,
    color: '#fff',
  },
});
