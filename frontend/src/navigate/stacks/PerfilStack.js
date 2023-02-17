import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { PerfilScreen } from '../../screens/perfil/PerfilScreen'
import { AyudaScreen } from '../../screens/perfil/ayuda/AyudaScreen'
import { QuieroComprarScreen } from '../../screens/perfil/ayuda/QuieroComprarScreen'
import { QuieroVenderScreen } from '../../screens/perfil/ayuda/QuieroVenderScreen'
import { DevolucionesScreen } from '../../screens/perfil/ayuda/DevolucionesScreen'
import { DonacionesScreen } from '../../screens/perfil/ayuda/DonacionesScreen'
import { BajarCuentaScreen } from '../../screens/perfil/ayuda/BajarCuentaScreen'
import { VenderScreen } from '../../screens/perfil/vender/VenderScreen'
import { GananciasScreen } from '../../screens/perfil/vender/GananciasScreen'
import { PublicacionesScreen } from '../../screens/perfil/vender/PublicacionesScreen'
import { MediosCobrosScreen } from '../../screens/perfil/vender/MediosCobrosScreen'
import { ComprasScreen } from '../../screens/perfil/compras/ComprasScreen'
import { FavoritosScreen } from '../../screens/perfil/favoritos/FavoritosScreen'
import { MensajesScreen } from '../../screens/perfil/mensajes/MensajesScreen'

const Stack = createNativeStackNavigator()

const AyudaStack = () => {

    return (
        <Stack.Navigator
            initialRouteName='AyudaScreen'
        >
            <Stack.Screen
                name='AyudaScreen'
                component={AyudaScreen}
            />

            <Stack.Screen
                name='QuieroComprarScreen'
                component={QuieroComprarScreen}
            />

            <Stack.Screen
                name='QuieroVenderScreen'
                component={QuieroVenderScreen}
            />

            <Stack.Screen
                name='DevolucionesScreen'
                component={DevolucionesScreen}
            />

            <Stack.Screen
                name='DonacionesScreen'
                component={DonacionesScreen}
            />

            <Stack.Screen
                name='BajarCuentaScreen'
                component={BajarCuentaScreen}
            />
        </Stack.Navigator>
    )

}

const VenderStack = () => {

    return (

        <Stack.Navigator
            initialRouteName='VenderScreen'
        >
            <Stack.Screen
                name='VenderScreen'
                component={VenderScreen}
            />

            <Stack.Screen
                name='GananciasScreen'
                component={GananciasScreen}
            />

            <Stack.Screen
                name='PublicacionesScreen'
                component={PublicacionesScreen}
            />

            <Stack.Screen
                name='MediosCobrosScreen'
                component={MediosCobrosScreen}
            />
        </Stack.Navigator>

    )
}

export const PerfilStack = () => {


    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName='PerfilScreen'
        >
            <Stack.Screen
                name='PerfilScreen'
                component={PerfilScreen}
            />

            <Stack.Screen
                name='AyudaStack'
                component={AyudaStack}
            />

            <Stack.Screen
                name='VenderStack'
                component={VenderStack}
            />

            <Stack.Screen
                name='ComprasScreen'
                component={ComprasScreen}
            />

            <Stack.Screen
                name='FavoritosScreen'
                component={FavoritosScreen}
            />

            <Stack.Screen
                name='MensajesScreen'
                component={MensajesScreen}
            />
        </Stack.Navigator>
    )
}
