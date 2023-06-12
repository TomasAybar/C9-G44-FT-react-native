import React from 'react';
import StyledView from '../styledComponents/StyledView';
import RadioButton from './icons/RadioButton';
import StyledText from '../styledComponents/StyledText';

export const BuySteps = ({ step }) => {
  const handleSteps = (num) => {
    let validation;
    if (num === 1) {
      validation = [1, 2, 3, 4].includes(step) ? true : false;
    } else if (num === 2) {
      validation = [2, 3, 4].includes(step) ? true : false;
    } else if (num === 3) {
      validation = [3, 4].includes(step) ? true : false;
    } else if (num === 4) {
      validation = [4].includes(step) ? true : false;
    } else {
      validation = <RadioButton />;
    }
    return validation;
  };

  return (
    <StyledView marginTop={35} alignItems={'center'}>
      <StyledView
        borderWidth={0.4}
        borderColor={'white'}
        height={1}
        width={250}
        backgroundColor={'white'}
      >
        <StyledView position={'relative'} bottom={11.6}>
          <StyledView row spaceBetween width={260} right={5}>
            <StyledView>
              {handleSteps(1) ? <RadioButton completed /> : <RadioButton />}
              <StyledText position={'absolute'} top={3} size12 yellow>
                {[1, 2, 3, 4].includes(step) ? (
                  <StyledText black>✔</StyledText>
                ) : (
                  '1'
                )}
              </StyledText>
            </StyledView>
            <StyledView>
              {handleSteps(2) ? <RadioButton completed /> : <RadioButton />}
              <StyledText position={'absolute'} top={3} size12 yellow>
                {[2, 3, 4].includes(step) ? (
                  <StyledText black>✔</StyledText>
                ) : (
                  '2'
                )}
              </StyledText>
            </StyledView>
            <StyledView>
              {handleSteps(3) ? <RadioButton completed /> : <RadioButton />}
              <StyledText position={'absolute'} top={3} size12 yellow>
                {[3, 4].includes(step) ? <StyledText black>✔</StyledText> : '3'}
              </StyledText>
            </StyledView>
            <StyledView>
              {handleSteps(4) ? <RadioButton completed /> : <RadioButton />}
              <StyledText position={'absolute'} top={3} size12 yellow>
                {[4].includes(step) ? <StyledText black>✔</StyledText> : '4'}
              </StyledText>
            </StyledView>
          </StyledView>
        </StyledView>
      </StyledView>
      <StyledView row spaceBetween width={316} left={2} marginTop={20}>
        <StyledText size10 lineHeight={12} flex={1}>
          Carrito
        </StyledText>
        <StyledText size10 lineHeight={12} flex={1}>
          Entrega
        </StyledText>
        <StyledText size10 lineHeight={12} flex={1}>
          Pago
        </StyledText>
        <StyledText size10 lineHeight={12} flex={1}>
          Pedido completado
        </StyledText>
      </StyledView>
    </StyledView>
  );
};
