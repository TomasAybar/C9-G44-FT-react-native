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
            <Tabs.Screen name='HomeStack' component={HomeStack} options={{ title: 'Home' }} />
            <Tabs.Screen name='ComprarStack' component={ComprarStack} options={{ title: 'Comprar' }} />
            <Tabs.Screen name='VenderStack' component={VenderStack} options={{ title: 'Vender' }} />
            <Tabs.Screen name='DonarStack' component={DonarStack} options={{ title: 'Donar' }} />
            <Tabs.Screen name='PerfilStack' component={PerfilStack} options={{ title: 'Perfil' }} />
        </Tabs.Navigator>
    )
}
