import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import StyledText from '../../styledComponents/StyledText';
import StyledView from '../../styledComponents/StyledView';
import { BuySteps } from '../../components/BuySteps';
import { EcoBtnNavigate } from '../../components/EcoBtnNavigate';
import { MaterialIcons } from '@expo/vector-icons';
import theme from '../../themes/theme';

export const MetodoDeEntrega = () => {
    const navigator = useNavigation();

    return (
        <StyledView dark height100>
            <StyledView container flex={1} spaceBetween>
                <BuySteps step={1} />
                <StyledView flex={1} marginTop={50}>
                    <EcoBtnNavigate
                        text="Envío a domicilio"
                        onPress={() => navigator.navigate('Selecciona un método de pago')}
                        borderRadius={12}
                        styleText={{fontSize: 12}}
                    />

                    <TouchableOpacity onPress={() => navigator.navigate('Selecciona un método de pago')}>
                        <StyledView
                            row
                            spaceBetween
                            paddingHorizontal={12}
                            grey
                            height={81}
                            borderRadius={12}
                        >
                            <StyledView center>
                                <StyledText size12 left marginVertical={6}>
                                    Buscar por punto de entrega
                                </StyledText>
                                <StyledText size12 left opacity={0.4}>
                                    Barrio Núñez
                                </StyledText>
                            </StyledView>
                            <MaterialIcons
                                name="arrow-forward-ios"
                                size={24}
                                color={theme.colors.yellowPrimary}
                                style={{ alignSelf: 'center' }}
                            />
                        </StyledView>
                    </TouchableOpacity>
                </StyledView>
                <StyledView marginBottom={80}>
                    <StyledView
                        borderWidth={0.7}
                        borderColor={'white'}
                        height={1}
                        backgroundColor={'white'}
                        opacity={0.31}
                        marginBottom={10}
                    ></StyledView>
                    <StyledView row spaceBetween>
                        <StyledText size18 weight500>
                            Total
                        </StyledText>
                        <StyledText size18 weight500>
                            $5000
                        </StyledText>
                    </StyledView>
                </StyledView>
            </StyledView>
        </StyledView>
    );
};
