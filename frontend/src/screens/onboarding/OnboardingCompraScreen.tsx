import React from 'react'
import { ImageBackground, View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import theme from '../../themes/theme'
import { OnboardingButton } from '../../components/buttons/OnboardingButton'
import { styleGlobal } from '../../themes/appTheme'
import { EllipseSlider } from '../../components/EllipseSlider'

export const OnboardingCompraScreen = () => {
  const navigation = useNavigation()

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.appBackground }}>
        <View>
          <ImageBackground
            source={require('../../../assets/onboardingGradient.png')}
            style={{
              width: '100%',
              height: '100%',
              zIndex: 1,
              position: 'absolute'
            }}
          >
            <View  style={{ flex: 1 }} />
            <View style={{
                ...styleGlobal.globalMargin,
                flex: 1,
              }}>
                
                <View  style={{ flex: 1 }} />
                {/* Titulo y texto */}
                <View>
                  <Text 
                    style={{ 
                      fontSize: 32, 
                      color: '#fff',
                      fontWeight: '700',
                      textAlign: 'center',
                      marginBottom: 10,
                    }}>
                    Comprá
                  </Text>

                  <Text 
                    style={{ 
                        fontSize: 14, 
                        lineHeight: 24, 
                        color: '#fff', 
                        fontWeight: '700',
                        textAlign: 'center' 
                    }}>
                    Comprá prendas de segunda mano y contribuí al medio ambiente.
                  </Text>
                </View>
                
                {/* Sliders */}
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginRight: 5,
                    flex: 1,
                    alignItems: 'center'
                  }}
                >
                  <EllipseSlider color='primary' />
                  <EllipseSlider color='transparent' />
                  <EllipseSlider color='transparent' />
                
                </View>

                {/* Button container */}
                <View 
                  style={{ 
                    flex: 1, 
                    // backgroundColor: 'blue', 
                    justifyContent: 'flex-end',
                    paddingBottom: 15 
                  }}>
                  <OnboardingButton 
                    onPress={() => navigation.navigate('OnboardingVendeScreen' as never)} 
                    text='Siguiente' 
                    color='white'
                    style={{ marginBottom: 10 }}
                  />
                  <OnboardingButton 
                    onPress={() => console.log('Omitir')} 
                    text='Omitir' 
                    color='black'
                  />
                </View>
            </View>
          </ImageBackground>
          <ImageBackground
            source={require('../../../assets/onboarding1.png')}
            style={{ width: '100%', height: '100%' }}
          />
        </View>
    </View>
  )
}
