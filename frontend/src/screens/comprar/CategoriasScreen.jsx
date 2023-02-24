import React from 'react';
import StyledText from '../../styledComponents/StyledText';
import StyledView from '../../styledComponents/StyledView';
import StyledButton from '../../styledComponents/StyledButton';
import { Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const CategoriasScreen = () => {
    const navigator = useNavigation();

    return (
        <StyledView dark height100>
            <ScrollView>
                <StyledView container marginVertical={25}>
                    <StyledView row center>
                        <StyledButton title={'Hombre'} miniButton>
                            Hombre
                        </StyledButton>
                        <StyledButton title={'Mujer'} miniButton>
                            Mujer
                        </StyledButton>
                        <StyledButton title={'Niño'} miniButton>
                            Niño
                        </StyledButton>
                    </StyledView>
                    <StyledView>
                        <TouchableOpacity onPress={() => navigator.navigate('Categoria')}>
                            <StyledView grey width100 row spaceAround radius12 marginTop={25}>
                                <StyledText size16 weight700>
                                    Remeras
                                </StyledText>
                                <Image
                                    source={{ uri: 'https://picsum.photos/115/148' }}
                                    style={{ width: 115, height: 148 }}
                                />
                            </StyledView>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigator.navigate('Categoria')}>
                            <StyledView grey width100 row spaceAround radius12 marginTop={25}>
                                <StyledText size16 weight700>
                                    Jeans
                                </StyledText>
                                <Image
                                    source={{ uri: 'https://picsum.photos/115/148' }}
                                    style={{ width: 115, height: 148 }}
                                />
                            </StyledView>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigator.navigate('Categoria')}>
                            <StyledView grey width100 row spaceAround radius12 marginTop={25}>
                                <StyledText size16 weight700>
                                    Abrigos
                                </StyledText>
                                <Image
                                    source={{ uri: 'https://picsum.photos/115/148' }}
                                    style={{ width: 115, height: 148 }}
                                />
                            </StyledView>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigator.navigate('Categoria')}>
                            <StyledView grey width100 row spaceAround radius12 marginTop={25}>
                                <StyledText size16 weight700>
                                    Vestidos y faldas
                                </StyledText>
                                <Image
                                    source={{ uri: 'https://picsum.photos/115/148' }}
                                    style={{ width: 115, height: 148 }}
                                />
                            </StyledView>
                        </TouchableOpacity>
                    </StyledView>
                </StyledView>
            </ScrollView>
        </StyledView>
    );
};
