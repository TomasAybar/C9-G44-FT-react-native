import React from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator } from 'react-native';
import { EcoBtnRenderToggle } from '../../components/EcoBtnRender';
import { CategoriasCardCategorias } from '../../components/CategoriasCardCategorias';
import { useHome } from '../../hooks/useHome';
import theme from '../../themes/theme';

export const ComprarScreen = () => {

    const { products, isLoading } = useHome()

  return (
    <View style={{ backgroundColor: theme.colors.appBackground, paddingHorizontal: 20 }}>
        <ScrollView>
            <View style={{ marginTop: 30 }}>
              <EcoBtnRenderToggle
              text1='Hombre'
              text2='Mujer'
              text3='Niños'
              w1={0.27}
              w2={0.2}
              w3={0.2}
            />  
            </View>

            <View>

                {
                
                isLoading
                ? <ActivityIndicator size={40} color={theme.colors.yellowPrimary} />
                :   products.map(({ type, _id, image }) => (
                    <CategoriasCardCategorias type={type} key={_id} img={image} />))
            
            }
            </View>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({

});