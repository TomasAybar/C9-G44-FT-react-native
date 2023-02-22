import React from 'react';
import { Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import StyledText from '../../styledComponents/StyledText';
import StyledView from '../../styledComponents/StyledView';
import StyledButtton from '../../styledComponents/StyledButton';

export const OnboardingDonaScreen = () => {
    const navigator = useNavigation();

    return (
        <StyledView dark height100>
            <StyledView height50>
                <ImageBackground
                    source={require('../../../assets/onboardingGradient.png')}
                    style={{ width: '100%', height: '100%', zIndex: 1, position: 'absolute' }}
                />
                <ImageBackground
                    source={require('../../../assets/onboarding3.png')}
                    style={{ width: '100%', height: '100%' }}
                />
            </StyledView>
            <StyledView container spaceEvenly height50 height90>
                <StyledText size32 weight700>
                    Doná
                </StyledText>
                <StyledText size12 line24>
                    Doná prendas o accesorios. Dale una segunda oportunidad a tu ropa, ayudando a alguien
                    mas.
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
                        source={require('../../../assets/icons/ellipse.png')}
                    />
                    <Image
                        style={{ marginHorizontal: 4 }}
                        source={require('../../../assets/icons/ellipse.png')}
                    />
                    <Image
                        style={{ marginHorizontal: 4 }}
                        source={require('../../../assets/icons/ellipse-active.png')}
                    />
                </StyledView>
                <StyledButtton
                    white
                    title={'Comenzar'}
                    onPress={() => navigator.navigate('LoginStack')}
                ></StyledButtton>
                <StyledButtton
                    black
                    title={'Volver'}
                    onPress={() => navigator.navigate('OnboardingCompraScreen')}
                ></StyledButtton>
            </StyledView>
        </StyledView>
    );
};
