import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from '../screens/HomeScreen'
import { ComprarScreen } from '../screens/ComprarScreen'
import { VenderScreen } from '../screens/VenderScreen'
import { DonarScreen } from '../screens/DonarScreen'
import { PerfilScreen } from '../screens/PerfilScreen'

const Tabs = createBottomTabNavigator()

export const TabNavigation = () => {
    return (
        <Tabs.Navigator screenOptions={{ headerShown: false }}>
            <Tabs.Screen name='HomeScreen' component={HomeScreen} />
            <Tabs.Screen name='ComprarScreen' component={ComprarScreen} />
            <Tabs.Screen name='VenderScreen' component={VenderScreen} />
            <Tabs.Screen name='DonarScreen' component={DonarScreen} />
            <Tabs.Screen name='PerfilScreen' component={PerfilScreen} />
        </Tabs.Navigator>
    )
}
