import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import StyledText from '../../styledComponents/StyledText';
import StyledView from '../../styledComponents/StyledView';
import StyledButton from '../../styledComponents/StyledButton';
import { BuySteps } from '../../components/BuySteps';
import { Image } from 'react-native';

export const ProcesamientoPago = () => {
    const navigator = useNavigation();

    const [completed, setCompleted] = useState(false);

    useEffect(() => {
      setTimeout(() => setCompleted(true), 1500);
    }, []);

    return (
        <StyledView dark height100>
            {completed ? (
                <StyledView position={'absolute'} height100 width100 zIndex={10} marginTop={55}>
                    <StyledView grey marginHorizontal={25} borderRadius={16} padding={20}>
                        <Image
                            source={require('../../../assets/icons/loader-completed.png')}
                            alignSelf={'center'}
                            marginVertical={5}
                        />
                        <StyledText size16 weight700 marginVertical={15}>
                            ¡Pago confirmado!
                        </StyledText>
                        <StyledText width={210} opacity={0.8} lineHeight={20}>
                            Te enviamos a tu Email toda la información para la entrega.
                        </StyledText>
                        <StyledView marginTop={30}>
                            <StyledButton
                                white
                                width={'90%'}
                                marginBottom={12}
                                alignSelf={'center'}
                                title={'Cerrar'}
                                onPress={() => navigator.navigate('HomeScreen')}
                            />
                            <StyledButton
                                black
                                backgroundColor={'transparent'}
                                width={'90%'}
                                alignSelf={'center'}
                                title={'Seguir comprando'}
                                onPress={() => navigator.navigate('Categorías')}
                            />
                        </StyledView>
                    </StyledView>
                </StyledView>
            ) : (
                <StyledView position={'absolute'} height100 width100 zIndex={10} marginTop={55}>
                    <StyledView grey marginHorizontal={25} borderRadius={16} padding={20}>
                        <StyledText size16 weight700 marginVertical={10}>
                            Procesando el pago
                        </StyledText>
                        <Image
                            source={require('../../../assets/icons/loader.png')}
                            alignSelf={'center'}
                            marginVertical={10}
                        />
                        <StyledButton
                            white
                            width={'90%'}
                            marginVertical={20}
                            alignSelf={'center'}
                            title={'Cancelar'}
                            onPress={() => navigator.goBack()}
                        />
                    </StyledView>
                </StyledView>
            )}
            <StyledView container flex={1} spaceBetween>
                <BuySteps step={completed ? 4 : 3} />
                <StyledView>
                    <StyledView marginBottom={35}>
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
                    <StyledButton
                        white
                        title={'Confirmar compra'}
                        onPress={() => navigator.navigate('Procesamiento de pago')}
                        marginBottom={30}
                    />
                </StyledView>
            </StyledView>
        </StyledView>
    );
};
