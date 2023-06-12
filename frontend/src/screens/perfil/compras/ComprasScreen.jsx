import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ComprasCard } from '../../../components/ComprasCard';
import { EcoBtnRender } from '../../../components/EcoBtnRender';
import { SettingBtn } from '../../../components/SettingBtn';
import StyledText from '../../../styledComponents/StyledText';
import StyledView from '../../../styledComponents/StyledView';

const ComprasRealizadas = () => {
  return (
    <>
      <SettingBtn text="Recientes" />

      <View style={styles.containerCards}>
        <ComprasCard
          img={'https://picsum.photos/id/1/127/104'}
          name={'Campera ZARA'}
          price={'15.000'}
        />

        <ComprasCard
          img={'https://picsum.photos/id/1/127/104'}
          name={'Jean VER'}
          price={'8.000'}
        />
      </View>
    </>
  );
};

const ComprasCanceladas = () => {
  return (
    <View>
      <StyledText size20 fontStyle={'italic'}>
        No has cancelado ninguna compra.
      </StyledText>
    </View>
  );
};

export const ComprasScreen = () => {
  return (
    <StyledView dark container height100>
      <EcoBtnRender
        text1="Compras realizadas"
        text2="Compras canceladas"
        render1={<ComprasRealizadas />}
        render2={<ComprasCanceladas />}
        fs={12}
      />
    </StyledView>
  );
};

const styles = StyleSheet.create({
  containerBtn: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 15,
  },
  containerCards: {
    width: '100%',
    marginTop: 30,
  },
});
