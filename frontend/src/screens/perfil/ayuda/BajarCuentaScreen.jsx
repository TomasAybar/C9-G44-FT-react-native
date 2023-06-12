import React from 'react';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

export const BajarCuentaScreen = () => {
  const navigator = useNavigation();

  const alertNavigate = () => {
    Alert.alert(
      'Atención!',
      'Tu cuenta ecoModa sera dada de baja. Queres cerrar la cuenta de todas formas?',
      [
        {
          text: 'Si, cerrar cuenta',
          onPress: () => baja(),
        },
        {
          text: 'Volver',
          onPress: () => navigator.goBack(),
        },
      ]
    );
  };

  const baja = () => {
    Alert.alert(
      'Listo!',
      'Tu cuenta fue dada de baja. Esperemos volver a verte pronto',
      [
        {
          text: 'Ir al inicio',
          onPress: () => navigator.popToTop(),
        },
      ]
    );
  };

  useEffect(() => {
    alertNavigate();
  }, []);
};
