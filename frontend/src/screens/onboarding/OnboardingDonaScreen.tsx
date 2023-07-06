import React from 'react'
import { ImageBackground, View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import theme from '../../themes/theme'
import { OnboardingButton } from '../../components/buttons/OnboardingButton'
import { styleGlobal } from '../../themes/appTheme'
import { EllipseSlider } from '../../components/EllipseSlider'

export const OnboardingDonaScreen = () => {
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
                    Doná
                  </Text>

                  <Text 
                    style={{ 
                        fontSize: 14, 
                        lineHeight: 24, 
                        color: '#fff', 
                        fontWeight: '700',
                        textAlign: 'center' 
                    }}>
                    Doná prendas o accesorios. Dale una segunda oportunidad a tu ropa, ayudando a alguien mas.
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
                  <EllipseSlider color='transparent' />
                  <EllipseSlider color='transparent' />
                  <EllipseSlider color='primary' />
                
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
                    onPress={() => navigation.navigate('LoginStack' as never)} 
                    text='Comenzar' 
                    color='white'
                    style={{ marginBottom: 10 }}
                  />
                  <OnboardingButton 
                    onPress={() => navigation.goBack()} 
                    text='Volver' 
                    color='black'
                  />
                </View>
            </View>
          </ImageBackground>
          <ImageBackground
            source={require('../../../assets/onboarding3.png')}
            style={{ width: '100%', height: '100%' }}
          />
        </View>
    </View>
  )
}
