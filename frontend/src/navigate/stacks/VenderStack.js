import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { VenderScreen } from '../../screens/vender/VenderScreen'
import { FotoProductoScreen } from '../../screens/vender/FotoProductoScreen'
import { CategoriaScreen } from '../../screens/vender/CategoriaScreen'
import TipoProductoScreen from '../../screens/vender/TipoProductoScreen'
import { DescripcionScreen } from '../../screens/vender/DescripcionScreen'
import { MetodoPagoScreen } from '../../screens/vender/MetodoPagoScreen'
import CheckeoFinalScreen from '../../screens/vender/CheckeoFinalScreen'
import { PublicacionesScreen } from '../../screens/perfil/vender/PublicacionesScreen'
import { ArticuloPublicado } from '../../screens/vender/ArticuloPublicado'

export const VenderStack = () => {

    const Stack = createNativeStackNavigator()


    return (
        <Stack.Navigator
            // screenOptions={{ headerShown: true }}
            initialRouteName='VenderScreen'
        >
            <Stack.Screen
                name='VenderScreen'
                component={VenderScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name='FotoProductoScreen'
                component={FotoProductoScreen}
            />

            <Stack.Screen
                name='CategoriaScreen'
                component={CategoriaScreen}
            />

            <Stack.Screen
                name='TipoProductoScreen'
                component={TipoProductoScreen}
            />

            <Stack.Screen
                name='DescripcionScreen'
                component={DescripcionScreen}
            />

            <Stack.Screen
                name='MetodoPagoScreen'
                component={MetodoPagoScreen}
            />

            <Stack.Screen
                name='CheckeoFinalScreen'
                component={CheckeoFinalScreen}
            />

            <Stack.Screen
                name='ArticuloPublicado'
                component={ArticuloPublicado}
            />
        </Stack.Navigator>
    )
}
