import React from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import StyledText from '../../styledComponents/StyledText';
import StyledView from '../../styledComponents/StyledView';
import StyledButton from '../../styledComponents/StyledButton';
import { BuySteps } from '../../components/BuySteps';
import { ItemCarrito } from '../../components/ItemCarrito';

export const Carrito = () => {
    // Carrito: array vacio muestra el carrito vacio, array con contenido muestra el detalle de compra
    const items = [1];

    const navigator = useNavigation();

    return (
        <StyledView dark height100>
            <StyledView container flex={1} spaceBetween>
                {/* Lógica para ver si hay items en el carrito y renderizar lo correspondiente */}
                {items.length === 0 ? (
                    <>
                        <StyledView marginTop={70}>
                            <StyledText size16 weight700>
                                (0) productos
                            </StyledText>
                            <StyledText size16 weight700>
                                Tu carrito de compras está vacío
                            </StyledText>
                        </StyledView>
                        <StyledView height={95} spaceBetween marginBottom={20}>
                            <StyledButton
                                white
                                title={'Ir a comprar'}
                                onPress={() => navigator.navigate('Categorías')}
                            />
                        </StyledView>
                    </>
                ) : (
                    <>
                        <BuySteps step={0} />
                        <StyledView flex={1} paddingVertical={25}>
                            <ScrollView>
                                <ItemCarrito
                                    title={'Jean Zara'}
                                    price={5000}
                                    image={'https://picsum.photos/id/1/127/104'}
                                />
                                <ItemCarrito
                                    title={'Remera'}
                                    price={6000}
                                    image={'https://picsum.photos/id/1/127/104'}
                                />
                                <ItemCarrito
                                    title={'Pantalón'}
                                    price={8000}
                                    image={'https://picsum.photos/id/1/127/104'}
                                />
                                <ItemCarrito
                                    title={'Zapatos'}
                                    price={10000}
                                    image={'https://picsum.photos/id/1/127/104'}
                                />
                            </ScrollView>
                        </StyledView>
                        <StyledView height={95} spaceBetween marginBottom={20}>
                            <StyledButton
                                white
                                title={'Iniciar compra'}
                                onPress={() => navigator.navigate('Selecciona un método de entrega')}
                            />
                            <StyledButton
                                black
                                title={'Seguir comprando'}
                                onPress={() => navigator.navigate('Categorías')}
                            />
                        </StyledView>
                    </>
                )}
            </StyledView>
        </StyledView>
    );
};
