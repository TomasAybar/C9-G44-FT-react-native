import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, ScrollView } from 'react-native';
import StyledText from '../styledComponents/StyledText';
import StyledView from '../styledComponents/StyledView';
import StyledTextInput from '../styledComponents/StyledTextInput';
import Search from '../../assets/icons/Search.jsx';

export const HomeScreen = () => {
    const navigation = useNavigation();

    return (
        <StyledView dark height100>
            <ScrollView>
                <StyledView container>
                    <StyledView row marginTop={10}>
                        <StyledTextInput style={{ borderWidth: 0, opacity: 1, flexGrow: 1 }}>
                            Buscador
                        </StyledTextInput>
                        <Search
                            style={{
                                position: 'absolute',
                                alignSelf: 'center',
                                right: 15,
                            }}
                        />
                    </StyledView>
                    <StyledView alignIntems={'center'} marginTop={20}>
                        <Image
                            source={require('../../assets/homeBanner.png')}
                            style={{ width: '100%' }}
                        />
                    </StyledView>
                    <StyledView row spaceBetween marginTop={30}>
                        <StyledText weight500>Categorías</StyledText>
                        <StyledText weight500>Ver más</StyledText>
                    </StyledView>
                    <StyledView row spaceBetween marginTop={15}>
                        <StyledView
                            grey
                            radius12
                            row
                            spaceAround
                            width={'48%'}
                            marginRight={10}
                            padding={7}
                        >
                            <StyledText size16 weight500>
                                Remera
                            </StyledText>
                            <Image
                                source={{ uri: 'https://picsum.photos/id/1/55/70' }}
                                style={{ width: 50, height: 70 }}
                            />
                        </StyledView>
                        <StyledView
                            grey
                            radius12
                            row
                            spaceAround
                            width={'48%'}
                            marginRight={10}
                            padding={7}
                        >
                            <StyledText size16 weight500>
                                Remera
                            </StyledText>
                            <Image
                                source={{ uri: 'https://picsum.photos/id/1/55/70' }}
                                style={{ width: 50, height: 70 }}
                            />
                        </StyledView>
                        <StyledView
                            grey
                            radius12
                            row
                            spaceAround
                            width={'48%'}
                            marginRight={10}
                            padding={7}
                        >
                            <StyledText size16 weight500>
                                Remera
                            </StyledText>
                            <Image
                                source={{ uri: 'https://picsum.photos/id/1/55/70' }}
                                style={{ width: 50, height: 70 }}
                            />
                        </StyledView>
                    </StyledView>
                    <StyledView row spaceBetween marginTop={15}>
                        <StyledText weight500>Publicados recientemente</StyledText>
                        <StyledText weight500>Ver más</StyledText>
                    </StyledView>
                    <StyledView row marginTop={20}>
                        <StyledView borderRadius12 width100 height100>
                            <Image
                                source={{ uri: 'https://picsum.photos/id/1/162/192' }}
                                style={{ width: '48%', height: 192, borderRadius: 12 }}
                            />
                            <StyledView paddingVertical={25} paddingHorizontal={12}>
                                <StyledText size12 left>
                                    Zapatillas
                                </StyledText>
                                <StyledText size16 left weight700 marginTop={1}>
                                    $ 10000
                                </StyledText>
                            </StyledView>
                        </StyledView>
                    </StyledView>
                </StyledView>
            </ScrollView>
        </StyledView>
    );
};
