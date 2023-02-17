import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { VenderScreen } from '../../screens/VenderScreen'

export const VenderStack = () => {

    const Stack = createNativeStackNavigator()


    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName='VenderScreen'
        >
            <Stack.Screen
                name='VenderScreen'
                component={VenderScreen}
            />
        </Stack.Navigator>
    )
}
