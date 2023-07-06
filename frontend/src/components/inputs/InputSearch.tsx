import React, { useEffect, useState } from 'react';
import { StyleProp,
  StyleSheet,
  TextInput,
  View,
  ViewStyle, } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons'; 
import { useDebouncedValue } from '../../hooks/useDebouncedValue';
import theme from '../../themes/theme';
  

interface Props {
  onDebounce: (value: string) => void;
  style?: StyleProp<ViewStyle>;
}

export const InputSearch = ({ style, onDebounce }: Props) => {

     const [textValue, setTextValue] = useState('');

  const debouncedValue = useDebouncedValue(textValue);

  useEffect(() => {
    onDebounce(debouncedValue);
  }, [debouncedValue]);

  return (
    <View
      style={{
        ...styles.container,
        ...(style as any),
      }}
    >
      <View style={styles.textBackground}>
        <TextInput
          placeholder="Buscador"
          placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
          style={styles.textInput}
          autoCapitalize="none"
          autoCorrect={false}
          value={textValue}
          onChangeText={setTextValue}
        />
        <Ionicons name="search-outline" color={theme.colors.yellowPrimary} size={30} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
    // backgroundColor: 'red',
    // paddingVertical: 20,

  },
  textBackground: {
    backgroundColor: 'rgba(43, 43, 43, 1)',
    borderRadius: 10,
    // height: 40,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  textInput: {
    flex: 1,
    fontSize: 15,
    color: '#FFFFFF',
    // paddingVertical: 20,
  },
});