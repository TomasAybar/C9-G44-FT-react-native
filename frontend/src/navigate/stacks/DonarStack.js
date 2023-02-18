import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { DetalleDonarScreen } from '../../screens/donar/DetalleDonarScreen'
import { InformacionScreen } from '../../screens/donar/InformacionScreen'
import { DonarScreen } from '../../screens/donar/DonarScreen'
import ArticuloPublicado from '../../screens/donar/ArticuloPublicado'

export const DonarStack = () => {

    const Stack = createNativeStackNavigator()


    return (
        <Stack.Navigator
            screenOptions={{ headerShown: true }}
            initialRouteName='DonarScreen'
        >
            <Stack.Screen
                name='DetalleDonarScreen'
                component={DetalleDonarScreen}
                options={{ title: 'Detalle de la donación' }}
            />

            <Stack.Screen
                name='InformacionScreen'
                component={InformacionScreen}
                options={{ title: 'Información para la recoleción' }}
            />

            <Stack.Screen
                name='DonarScreen'
                component={DonarScreen}
                options={{ title: 'Donar' }}
            />

            <Stack.Screen
                name='ArticuloPublicado'
                component={ArticuloPublicado}
                options={{ title: 'Publicaciones' }}
            />
        </Stack.Navigator>
    )
}
