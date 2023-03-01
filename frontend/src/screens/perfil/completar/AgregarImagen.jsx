import React, { useState } from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text, Pressable } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { AddCircle } from '../../../components/icons/AddCircle';
import theme from '../../../themes/theme';


export const AgregarImagen = () => {
  const [imageUri, setImageUri] = useState(null);

  const handleChoosePhoto = async () => {
    const result = await ImagePicker.launchImageLibraryAsync();
    if (!result.cancelled) {
      setImageUri(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleChoosePhoto}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <View style={styles.placeholder}>
            <AddCircle/>
          </View>
          
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginBottom: 20
  },
  image: {
    width: 83,
    height: 79,
    borderRadius: 75,
    backgroundColor: theme.colors.greyPrimary
  },
  placeholder: {
    width: 100,
    height: 100,
    borderRadius: 75,
    backgroundColor: theme.colors.greyPrimary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
