import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ComprasCard as PublicacionesCard } from '../../../components/ComprasCard';
import { EcoBtnRender } from '../../../components/EcoBtnRender';
import { SettingBtn } from '../../../components/SettingBtn';
import StyledView from '../../../styledComponents/StyledView';

const PublicacionesActivas = () => {
  return (
    <>
      <SettingBtn text="Recientes" />
      <View style={styles.contariner}>
        <PublicacionesCard
          img={'https://picsum.photos/id/1/127/104'}
          name={'Campera ZARA'}
          price={'15.000'}
        />
        <PublicacionesCard
          img={'https://picsum.photos/id/1/127/104'}
          name={'Jean VER'}
          price={'8.000'}
        />
        <PublicacionesCard
          img={'https://picsum.photos/id/1/127/104'}
          name={'10 prendas'}
          price={'Donacion'}
        />
      </View>
    </>
  );
};

const Historial = () => {
  return (
    <>
      <SettingBtn text="Ventas realizadas" />
      <View style={styles.contariner}>
        <PublicacionesCard
          img={'https://picsum.photos/id/1/127/104'}
          name={'Pollera ZARA'}
          price={'5.000'}
        />
        <PublicacionesCard
          img={'https://picsum.photos/id/1/127/104'}
          name={'Remera VER'}
          price={'1.000'}
        />
        <PublicacionesCard
          img={'https://picsum.photos/id/1/127/104'}
          name={'Cartera'}
          price={'9.000'}
        />
      </View>
    </>
  );
};

export const PublicacionesScreen = () => {
  return (
    <StyledView dark container height100>
      <EcoBtnRender
        text1="Publicaciones activas"
        text2="Historial"
        render1={<PublicacionesActivas />}
        render2={<Historial />}
        w1={0.45}
        w2={0.25}
      />
    </StyledView>
  );
};

const styles = StyleSheet.create({
  contariner: {
    marginTop: 30,
  },
});
