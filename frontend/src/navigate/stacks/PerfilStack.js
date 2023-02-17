import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { PerfilScreen } from '../../screens/PerfilScreen'

export const PerfilStack = () => {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName='PerfilScreen'
        >
            <Stack.Screen
                name='PerfilScreen'
                component={PerfilScreen}
            />
        </Stack.Navigator>
    )
}
