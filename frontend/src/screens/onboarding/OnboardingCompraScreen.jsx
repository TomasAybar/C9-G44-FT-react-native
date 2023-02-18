import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { style } from '../../themes/appTheme';
import StyledText from '../../styledComponents/StyledText';
import StyledView from '../../styledComponents/StyledView';

export const OnboardingCompraScreen = () => {
    const navigator = useNavigation();

    return (
        <StyledView dark>
            <StyledView grey container center>
                <StyledText size32>Comprá</StyledText>
				<StyledText size12>Comprá prendas de segunda mano y contribuí al medio ambiente.</StyledText>
                <TouchableOpacity style={{ width: '100%', alignSelf: 'center' }}>
                    <Button
                        title="Siguiente"
                        onPress={() => navigator.navigate('OnboardingVendeScreen')}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{ width: '100%', alignSelf: 'center' }}>
                    <Button title="Omitir" onPress={() => navigator.navigate('LoginStack')} />
                </TouchableOpacity>
            </StyledView>
        </StyledView>
    );
};
