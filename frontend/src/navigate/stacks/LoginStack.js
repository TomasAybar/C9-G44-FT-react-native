import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { BienvenidaScreen } from '../../screens/login/BienvenidaScreen'
import { InicioSesionScreen } from '../../screens/login/InicioSesionScreen'
import { LoginScreen } from '../../screens/login/LoginScreen'
import { RegistroNombreScreen } from '../../screens/login/RegistroNombreScreen'
import { StackNavigation } from '../StackNavigation'
import { CompletarPerfilScreen } from '../../screens/perfil/completar/CompletarPerfilScreen'
import { CompletarMetodoCobroScreen } from '../../screens/perfil/completar/CompletarMetodoCobroScreen'
import { MetodoCobroTRFScreen } from '../../screens/perfil/completar/MetodoCobroTRFScreen'
import { MetodoCobroBVScreen } from '../../screens/perfil/completar/MetodoCobroBVScreen'
import { CongratsScreen } from '../../screens/perfil/completar/CongratsScreen'

const Stack = createNativeStackNavigator()

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

// cuando tocas comenzar en el screen bienvenida, ir al stack completar perfil

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
