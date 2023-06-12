import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import { useCompletarPerfil } from '../store/completarPerfil';

export const useRegistro = () => {
  const navigation = useNavigation();

  const [imageUri, setImageUri] = useState(null);

  const addProp = useCompletarPerfil((state) => state.addProps);

  const handleChoosePhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  const btnNavigate = (metodo, navigate) => {
    navigation.navigate(navigate);

    console.log('metodo');
    addProp({ metodo });
  };

  return {
    handleChoosePhoto,
    imageUri,
    btnNavigate,
  };
};
