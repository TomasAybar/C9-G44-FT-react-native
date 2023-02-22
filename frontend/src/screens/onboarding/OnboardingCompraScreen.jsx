import React from 'react';
import { Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import StyledText from '../../styledComponents/StyledText';
import StyledView from '../../styledComponents/StyledView';
import StyledButtton from '../../styledComponents/StyledButton';

export const OnboardingCompraScreen = () => {
    const navigator = useNavigation();

    return (
        <StyledView dark height100>
            <StyledView height50>
                <ImageBackground
                    source={require('../../../assets/onboardingGradient.png')}
                    style={{ width: '100%', height: '100%', zIndex: 1, position: 'absolute' }}
                />
                <ImageBackground
                    source={require('../../../assets/onboarding1.png')}
                    style={{ width: '100%', height: '100%' }}
                />
            </StyledView>
            <StyledView container spaceEvenly height50 height90>
                <StyledText size32 weight700>
                    Comprá
                </StyledText>
                <StyledText size12 line24>
                    Comprá prendas de segunda mano y contribuí al medio ambiente.
                </StyledText>
                <StyledView
                    style={{
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginRight: 5,
                    }}
                >
                    <Image
                        style={{ marginHorizontal: 4 }}
                        source={require('../../../assets/icons/ellipse-active.png')}
                    />
                    <Image
                        style={{ marginHorizontal: 4 }}
                        source={require('../../../assets/icons/ellipse.png')}
                    />
                    <Image
                        style={{ marginHorizontal: 4 }}
                        source={require('../../../assets/icons/ellipse.png')}
                    />
                </StyledView>
                <StyledButtton
                    white
                    title={'Siguiente'}
                    onPress={() => navigator.navigate('OnboardingVendeScreen')}
                ></StyledButtton>
                <StyledButtton
                    black
                    title={'Omitir'}
                    onPress={() => navigator.navigate('LoginStack')}
                ></StyledButtton>
            </StyledView>
        </StyledView>
    );
};
