import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import StyledText from '../styledComponents/StyledText';
import StyledView from '../styledComponents/StyledView';
import StyledTextInput from '../styledComponents/StyledTextInput';
import Search from '../../assets/icons/Search.jsx';

export const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <StyledView dark height100>
            <StyledView container>
                <StyledView row>
                    <StyledTextInput style={{ borderWidth: 0, opacity: 1 }}>Buscador</StyledTextInput>
                    <Search style={{ position: 'absolute', alignSelf: 'center', right: 15 }} />
                </StyledView>
                <StyledView style={{ alignItems: 'center' }}>
                    <Image source={require('../../assets/homeBanner.png')} style={{ width: '100%' }} />
                </StyledView>
                <StyledView row spaceBetween>
                    <StyledText weight500>Categorías</StyledText>
                    <StyledText weight500>Ver más</StyledText>
                </StyledView>
                <StyledView row>
                    <StyledView grey width50 radius12 row spaceAround >
                        <StyledText size16 weight500>Remera</StyledText>
                        <Image source={{uri:'https://picsum.photos/id/1/55/70'}} style={{width: 50, height: 70}}></Image>
                    </StyledView>
                </StyledView>
            </StyledView>
        </StyledView>
    );
};
