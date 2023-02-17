import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { DonarScreen } from '../../screens/DonarScreen'

export const DonarStack = () => {

    const Stack = createNativeStackNavigator()


    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName='DonarScreen'
        >
            <Stack.Screen
                name='DonarScreen'
                component={DonarScreen}
            />
        </Stack.Navigator>
    )
}
