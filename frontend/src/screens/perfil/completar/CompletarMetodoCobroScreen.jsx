import React from 'react';
import { View } from 'react-native';
import { EcoBtnNavigate } from '../../../components/EcoBtnNavigate';
import StyledView from '../../../styledComponents/StyledView';
import { useNavigation } from '@react-navigation/native';
import StyledText from '../../../styledComponents/StyledText';

export const CompletarMetodoCobroScreen = () => {
  const navigator = useNavigation();
  return (
    <StyledView dark>
      <StyledView container height100>
        <View
          style={{
            justifyContent: 'center',
            marginBottom: 150,
            marginTop: 50,
          }}
        >
          <StyledText size12>Elegí un medio para recibir pagos.</StyledText>
        </View>
        <StyledView>
          <EcoBtnNavigate
            text="Tranferencia Bancaria"
            onPress={() => navigator.navigate('MetodoCobroTRFScreen')}
          />
          <StyledText></StyledText>
          <EcoBtnNavigate
            text="Billetera virtual"
            // navigate={'MetodoCobroBVScreen'}
            onPress={() => navigator.navigate('MetodoCobroBVScreen')}
          />
        </StyledView>
      </StyledView>
    </StyledView>
  );
};
