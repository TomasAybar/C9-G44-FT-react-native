import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { ListPaso } from '../../../components/ListPaso';
import StyledText from '../../../styledComponents/StyledText';
import StyledView from '../../../styledComponents/StyledView';

export const QuieroComprarScreen = () => {
  return (
    <StyledView dark container height100>
      <View style={styles.containerTitle}>
        <Image source={require('../../../../assets/icons/tab-bar/bag.png')} />
        <StyledText weight700 size16 marginStart={10}>
          ¡Comprar es muy fácil!
        </StyledText>
      </View>

      <ListPaso number="1" content={'Elegí el artículo que queres.'} />
      <ListPaso number="2" content={'Selecciona el método de pago.'} />
      <ListPaso
        number="3"
        content={'Ingresa tus datos y coordina el método de entrega.'}
      />
      <ListPaso number="4" content={'¡Disfrutá de tu compra!'} />
    </StyledView>
  );
};

const styles = StyleSheet.create({
  containerTitle: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginVertical: 40,
  },
});
