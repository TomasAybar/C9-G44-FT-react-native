import { Image } from 'react-native';
import StyledText from '../../styledComponents/StyledText';
import StyledView from '../../styledComponents/StyledView';
import StyledButton from '../../styledComponents/StyledButton';

export const Producto = () => {
    return (
        <StyledView dark>
            <StyledView container height100>
                <StyledView>
                    <Image></Image>
                    <StyledView>
                        <StyledView>
                            <StyledText />
                            <StyledText />
                            <StyledText />
                            <StyledText />
                        </StyledView>
                        <StyledView>
                            <StyledText />
                        </StyledView>
                    </StyledView>
                    <StyledView>
                        
                        <StyledButton black title={'hola'} width={'30%'}></StyledButton>
                    </StyledView>
                </StyledView>
            </StyledView>
        </StyledView>
    );
};
