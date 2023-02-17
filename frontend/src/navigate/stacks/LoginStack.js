import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { BienvenidaScreen } from '../../screens/login/BienvenidaScreen'
import { InicioSesionScreen } from '../../screens/login/InicioSesionScreen'
import { LoginScreen } from '../../screens/login/LoginScreen'
import { RegistroNombreScreen } from '../../screens/login/RegistroNombreScreen'
import { TabNavigation } from '../TabNavigation'

export const LoginStack = () => {

    const Stack = createNativeStackNavigator()

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
            />
            <Stack.Screen
                name='BienvenidaScreen'
                component={BienvenidaScreen}
            />
            <Stack.Screen
                name='LoginScreen'
                component={LoginScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Tabs'
                component={TabNavigation}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}
