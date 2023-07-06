import React from 'react'
import { StyleSheet, TextInput, useWindowDimensions, View } from 'react-native'
import StyledView from '../../../styledComponents/StyledView'
import { Slider46 } from '../../../components/icons/Slider4-6'
import StyledText from '../../../styledComponents/StyledText'
import SyledButton from '../../../styledComponents/StyledButton'
import theme from '../../../themes/theme'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useVender } from '../../../hooks/useVender'

export const DescripcionScreen = () => {
  const { width, height } = useWindowDimensions()
  const {
    onChangeDescription,
    onChangePrice,
    onChangeProfit,
    nextButtonDescription,
    description
  } = useVender()

  return (
    <KeyboardAwareScrollView
      style={{
        backgroundColor: theme.colors.appBackground,
        height: '100%'
      }}
    >
      <StyledView container height100>
        <View
          style={{
            ...styles.containerSlide,

            height: height * 0.1
          }}
        >
          <Slider46 />
        </View>

        <StyledText left>
          Agrega una descripción{' '}
          <StyledText fontStyle='italic'>(hasta 500 caracteres)</StyledText>
        </StyledText>

        <TextInput
          style={styles.input}
          multiline
          numberOfLines={8}
          maxLength={60}
          onChangeText={onChangeDescription}
          value={description}
          placeholder='Vestido verde con botones en el frente'
          returnKeyType='done'
          keyboardType='default'
          placeholderTextColor='rgba(255,255,255,0.5)'
        />

        <View style={styles.containerText}>
          <View style={styles.text}>
            <StyledText>Precio de publicación:</StyledText>
            <TextInput
              style={styles.inputText}
              keyboardType='text'
              placeholderTextColor='rgba(255,255,255,0.5)'
              placeholder='$20.000.-'
              onChangeText={onChangePrice}
            />
          </View>

          <View style={styles.text}>
            <StyledText>Tu ganancia:</StyledText>
            <TextInput
              style={styles.inputText}
              keyboardType='text'
              placeholderTextColor='rgba(255,255,255,0.5)'
              placeholder='$18.000.-'
              onChangeText={onChangeProfit}
            />
          </View>
        </View>

        <View style={styles.containerBtn}>
          <SyledButton
            marginTop={40}
            white
            title='Siguiente'
            onPress={nextButtonDescription}
          />
        </View>
      </StyledView>
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  containerSlide: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30
  },
  containerBtn: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 12
  },
  input: {
    marginTop: 20,
    marginBottom: 40,
    paddingHorizontal: 15,
    backgroundColor: theme.colors.greyPrimary,
    color: '#fff',
    borderRadius: 20
  },
  containerText: {},
  inputText: {
    color: '#ffffff',
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    width: '30%',
    paddingVertical: 5
  },
  text: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 20
  }
})
