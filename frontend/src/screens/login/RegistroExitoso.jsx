import React from 'react';
import { useNavigation } from '@react-navigation/native';
import StyledText from '../../styledComponents/StyledText';
import StyledView from '../../styledComponents/StyledView';
import StyledButtton from '../../styledComponents/StyledButton';

export const RegistroExitoso = () => {
    const navigator = useNavigation();

    return (
        <StyledView dark>
            <StyledView container center>
                <StyledText size16 weight700>
                    ¡Felicitaciones!
                </StyledText>
                <StyledText size16 weight700>
                    Tu cuenta fue creada con éxito.
                </StyledText>
                <StyledText size12>
                    Ahora te vamos a pedir unos datos para completar tu perfil.
                </StyledText>
                <StyledButtton
                    white
                    title={'Completar perfil'}
                    onPress={() => navigator.navigate('CompletarPerfilScreen')}
                ></StyledButtton>
                <StyledButtton
                    black
                    title={'Omitir'}
                    onPress={() => navigator.navigate('RegistroModal')}
                ></StyledButtton>
            </StyledView>
        </StyledView>
    );
};
