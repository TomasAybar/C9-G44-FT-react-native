import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ConvertCube } from '../../../components/icons/ConvertCube';
import StyledText from '../../../styledComponents/StyledText';
import StyledView from '../../../styledComponents/StyledView';

export const DevolucionesScreen = () => {
  return (
    <StyledView dark container height100>
      <View style={styles.containerTitle}>
        <ConvertCube />
        <StyledText weight700 size16 marginStart={10} left>
          Devoluciones:
        </StyledText>
      </View>

      <StyledText left size16 marginBottom={5}>
        Cada vendedor establece sus políticas de devolución.
      </StyledText>

      <StyledText left size16>
        Te sugerimos que antes de iniciar la compra, contactes al vendedor y
        consultes su política de cambio y/o devolución.
      </StyledText>
    </StyledView>
  );
};

const styles = StyleSheet.create({
  containerTitle: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginVertical: 40,
  },
});
