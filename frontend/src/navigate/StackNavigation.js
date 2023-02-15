import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TabNavigation } from './TabNavigation'
import { InicioSesionScreen } from '../screens/login/InicioSesionScreen'
import { RegistroNombreScreen } from '../screens/login/RegistroNombreScreen'
import { BienvenidaScreen } from '../screens/login/BienvenidaScreen'
import { LoginScreen } from '../screens/login/LoginScreen'

const Stack = createNativeStackNavigator()

const StackMain = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName='LoginStack'
        >
            <Stack.Screen name='LoginStack' component={LoginStack} />
            <Stack.Screen name='Tabs' component={TabNavigation} />
        </Stack.Navigator>
    )
}

const LoginStack = () => {
    return (
        <Stack.Navigator>
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
            <Stack.Screen name='LoginScreen' component={LoginScreen} />
        </Stack.Navigator>
    )
}

export { StackMain }
