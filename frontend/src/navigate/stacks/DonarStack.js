import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { DetalleDonarScreen } from '../../screens/donar/DetalleDonarScreen'
import { InformacionScreen } from '../../screens/donar/InformacionScreen'

export const DonarStack = () => {

    const Stack = createNativeStackNavigator()


    return (
        <Stack.Navigator
            screenOptions={{ headerShown: true }}
            initialRouteName='DetalleDonarScreen'
        >
            <Stack.Screen
                name='DetalleDonarScreen'
                component={DetalleDonarScreen}
            />

            <Stack.Screen
                name='InformacionScreen'
                component={InformacionScreen}
            />
        </Stack.Navigator>
    )
}
