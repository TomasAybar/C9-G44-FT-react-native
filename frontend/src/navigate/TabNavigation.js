import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from '../screens/HomeScreen'
import { CategoriaScreen } from '../screens/comprar/CategoriaScreen'
import { VenderScreen } from '../screens/vender/VenderScreen'
import { DonarScreen } from '../screens/donar/DonarScreen'
import { PerfilScreen } from '../screens/perfil/PerfilScreen'

const Tab = createBottomTabNavigator()

export const TabNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Bienvenix!' component={HomeScreen} />
            <Tab.Screen name='ComprarScreen' component={CategoriaScreen} />
            <Tab.Screen name='VenderScreen' component={VenderScreen} />
            <Tab.Screen name='DonarScreen' component={DonarScreen} options={{ title: 'Donar' }} />
            <Tab.Screen name='PerfilScreen' component={PerfilScreen} options={{ title: 'Perfil' }} />
        </Tab.Navigator>
    )
}
