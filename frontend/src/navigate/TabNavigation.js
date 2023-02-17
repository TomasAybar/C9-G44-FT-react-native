import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeStack } from './stacks/HomeStack'
import { ComprarStack } from './stacks/ComprarStack'
import { VenderStack } from './stacks/VenderStack'
import { DonarStack } from './stacks/DonarStack'
import { PerfilStack } from './stacks/PerfilStack'

const Tabs = createBottomTabNavigator()

export const TabNavigation = () => {
    return (
        <Tabs.Navigator screenOptions={{ headerShown: false }}>
            <Tabs.Screen name='HomeStack' component={HomeStack} />
            <Tabs.Screen name='ComprarStack' component={ComprarStack} />
            <Tabs.Screen name='VenderStack' component={VenderStack} />
            <Tabs.Screen name='DonarStack' component={DonarStack} />
            <Tabs.Screen name='PerfilStack' component={PerfilStack} />
        </Tabs.Navigator>
    )
}
