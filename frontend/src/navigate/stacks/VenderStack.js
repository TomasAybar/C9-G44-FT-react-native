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
                options={{ headerTitle: 'Vender' }}

            />

            <Stack.Screen
                name='FotoProductoScreen'
                component={FotoProductoScreen}
                options={{ headerTitle: 'Foto del producto' }}
            />

            <Stack.Screen
                name='CategoriaScreen'
                component={CategoriaScreen}
                options={{ headerTitle: 'Selecciona una categoría' }}

            />

            <Stack.Screen
                name='TipoProductoScreen'
                component={TipoProductoScreen}
                options={{ headerTitle: '¿Qué tipo de producto es?' }}

            />

            <Stack.Screen
                name='DescripcionScreen'
                component={DescripcionScreen}
                options={{ headerTitle: 'Descripción y precio' }}

            />

            <Stack.Screen
                name='MetodoPagoScreen'
                component={MetodoPagoScreen}
                options={{ headerTitle: 'Método de cobro' }}

            />

            <Stack.Screen
                name='CheckeoFinalScreen'
                component={CheckeoFinalScreen}
                options={{ headerTitle: 'Revisá y publicá' }}

            />

            <Stack.Screen
                name='ArticuloPublicado'
                component={ArticuloPublicado}
                options={{ headerTitle: 'Publicaciones' }}

            />
        </Stack.Navigator>
    )
}
