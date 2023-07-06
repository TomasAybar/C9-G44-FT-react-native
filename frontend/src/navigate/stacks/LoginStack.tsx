import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoginScreen } from '../../screens/login/LoginScreen'
import { RegistroExitoso } from '../../screens/login/RegistroExitoso'
import { RegistroNombreScreen } from '../../screens/login/RegistroNombreScreen'
import { CompletarPerfilScreen } from '../../screens/perfil/completar/CompletarPerfilScreen'
import { CompletarMetodoCobroScreen } from '../../screens/perfil/completar/CompletarMetodoCobroScreen'
import { MetodoCobroTRFScreen } from '../../screens/perfil/completar/MetodoCobroTRFScreen'
import { MetodoCobroBVScreen } from '../../screens/perfil/completar/MetodoCobroBVScreen'
import { CongratsScreen } from '../../screens/perfil/completar/CongratsScreen'
import { OnboardingCompraScreen } from '../../screens/onboarding/OnboardingCompraScreen'
import { OnboardingVendeScreen } from '../../screens/onboarding/OnboardingVendeScreen'
import { OnboardingDonaScreen } from '../../screens/onboarding/OnboardingDonaScreen'
import theme from '../../themes/theme'

const Stack = createNativeStackNavigator()

export const OnboardingStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name='OnboardingCompraScreen'
        component={OnboardingCompraScreen}
      />
      <Stack.Screen
        name='OnboardingVendeScreen'
        component={OnboardingVendeScreen}
      />
      <Stack.Screen
        name='OnboardingDonaScreen'
        component={OnboardingDonaScreen}
      />
    </Stack.Navigator>
  )
}

export const LoginStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='LoginScreen'
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.appBackground
        },
        headerTitleStyle: {
          color: '#fff',
          fontWeight: '700'
        },
        headerTintColor: theme.colors.yellowPrimary
      }}
    >
      <Stack.Screen
        name='RegistroNombreScreen'
        component={RegistroNombreScreen}
        options={{ headerTitle: 'Ingresa tus datos' }}
      />
      <Stack.Screen
        name='RegistroExitoso'
        component={RegistroExitoso}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='CompletarPerfilScreen'
        component={CompletarPerfilScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='CompletarMetodoCobroScreen'
        component={CompletarMetodoCobroScreen}
        options={{ headerTitle: 'Método de cobro' }}
      />
      <Stack.Screen
        name='MetodoCobroTRFScreen'
        component={MetodoCobroTRFScreen}
        options={{ headerTitle: 'Método de cobro' }}
      />
      <Stack.Screen
        name='MetodoCobroBVScreen'
        component={MetodoCobroBVScreen}
        options={{ headerTitle: 'Método de cobro' }}
      />
      <Stack.Screen
        name='CongratsScreen'
        component={CongratsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='LoginScreen'
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
