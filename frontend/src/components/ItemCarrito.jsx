import React from 'react';
import { Image } from 'react-native';
import StyledView from '../styledComponents/StyledView';
import StyledText from '../styledComponents/StyledText';
import Trash from '../components/icons/Trash';

export const ItemCarrito = ({title, price, image}) => {
    return (
        <StyledView row spaceBetween>
            <Image
                source={{ uri: image }}
                style={{ width: 127, height: 104, borderRadius: 12 }}
            />
            <StyledView flex={1} paddingLeft={23} paddingTop={20}>
                <StyledText size12 left>
                    {title}
                </StyledText>
                <StyledText size16 weight700 left marginVertical={6}>
                    ${price}
                </StyledText>
            </StyledView>
            <Trash marginTop={28} marginRight={8} />
        </StyledView>
    );
};
