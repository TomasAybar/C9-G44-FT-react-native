import React, { useState } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import StyledText from '../../styledComponents/StyledText';
import StyledView from '../../styledComponents/StyledView';
import StyledButton from '../../styledComponents/StyledButton';
import Star from '../../components/icons/Star';
import Message from '../../components/icons/Message'
import theme from '../../themes/theme';

export const Producto = () => {
    const [favorite, setFavorite] = useState(false);
    const navigator = useNavigation();

    return (
        <StyledView dark>
            <StyledView container height100>
                <StyledView>
                    <StyledView marginTop={10}>
                        <Image
                            source={{ uri: 'https://picsum.photos/id/1/342/331' }}
                            style={{ width: 342, height: 331, alignSelf: 'center', borderRadius: 20 }}
                        ></Image>
                        <StyledView
                            radius12
                            grey
                            opacity={0.6}
                            width={32}
                            height={32}
                            position={'absolute'}
                            zIndex={1}
                            right={20}
                            top={15}
                            center
                        >
                            <TouchableOpacity
                                zIndex={20}
                                elevation={20}
                                onPress={() => setFavorite(!favorite)}
                            >
                                <StyledView>
                                    <Star
                                        alignSelf={'center'}
                                        fill={favorite ? theme.colors.yellowPrimary : null}
                                    />
                                </StyledView>
                            </TouchableOpacity>
                        </StyledView>
                    </StyledView>
                    <StyledView row spaceBetween marginTop={30}>
                        <StyledView>
                            <StyledText left size16 weight700 marginBottom={15}>
                                Jean ZARA
                            </StyledText>
                            <StyledText left size12 marginBottom={15}>
                                Jean con poco uso
                            </StyledText>
                            <StyledText left size12 marginBottom={15}>
                                Talle:{' '}
                                <StyledText size16 weight600>
                                    42
                                </StyledText>
                            </StyledText>
                            <StyledText left size12 marginBottom={15}>
                                Color:{' '}
                                <StyledText size16 weight600>
                                    azul claro
                                </StyledText>
                            </StyledText>
                        </StyledView>
                        <StyledView>
                            <StyledText size16 weight700 marginRight={40}>
                                $5000
                            </StyledText>
                        </StyledView>
                    </StyledView>
                    <StyledView row spaceBetween marginTop={20}>
                        <StyledButton
                            white
                            title={'Añadir al carrito'}
                            width={'73%'}
                            onPress={() => navigator.navigate('Carrito de compras')}
                        />
                        <StyledView
                            radius12
                            borderColor={theme.colors.yellowPrimary}
                            borderWidth={1}
                            height={40}
                            width={'22%'}
                            >
                            <TouchableOpacity>
                                <StyledView width100 height100 center>
                                    <Message alignSelf={'center'}/>
                                </StyledView>
                            </TouchableOpacity>
                        </StyledView>
                    </StyledView>
                </StyledView>
            </StyledView>
        </StyledView>
    );
};
