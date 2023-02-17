import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ComprarScreen } from '../../screens/ComprarScreen'

export const ComprarStack = () => {

    const Stack = createNativeStackNavigator()


    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName='ComprarScreen'
        >
            <Stack.Screen
                name='ComprarScreen'
                component={ComprarScreen}
            />
        </Stack.Navigator>
    )
}
