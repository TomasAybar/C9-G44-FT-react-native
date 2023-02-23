import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { BienvenidaScreen } from '../../screens/login/BienvenidaScreen'
import { InicioSesionScreen } from '../../screens/login/InicioSesionScreen'
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

export const CompletarPerfilStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='CompletarPerfilScreen' component={CompletarPerfilScreen} />
            <Stack.Screen name='CompletarMetodoCobroScreen' component={CompletarMetodoCobroScreen} />
            <Stack.Screen name='MetodoCobroTRFScreen' component={MetodoCobroTRFScreen} />
            <Stack.Screen name='MetodoCobroBVScreen' component={MetodoCobroBVScreen} />
            <Stack.Screen name='CongratsScreen' component={CongratsScreen} />
        </Stack.Navigator>
    )
}

export const LoginStack = () => {


    return (
        <Stack.Navigator
            initialRouteName='LoginScreen'
        >
            <Stack.Screen
                name='InicioSesionScreen'
                component={InicioSesionScreen}
            />
            <Stack.Screen
                name='RegistroNombreScreen'
                component={RegistroNombreScreen}
                options={{ headerTitle: 'Ingresa tus datos' }}
            />
            <Stack.Screen
                name='RegistroExitoso'
                component={RegistroExitoso}
            />
            <Stack.Screen
                name='CompletarPerfilScreen'
                component={CompletarPerfilScreen}
            />
            <Stack.Screen
                name='BienvenidaScreen'
                component={BienvenidaScreen}
                options={{ headerShown: false }}

            />
            <Stack.Screen
                name='LoginScreen'
                component={LoginScreen}
                options={{ headerShown: false }}
            />

            {/* <Stack.Screen
                name='StackNavigation'
                component={StackNavigation}
                options={{ headerShown: false }}
            /> */}

            {/* <Stack.Screen
                name='CompletarPerfilStack'
                component={CompletarPerfilStack}
                options={{ headerShown: false }}
            /> */}
        </Stack.Navigator>
    )
}


