import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabNavigation } from './TabNavigation'
import { FotoProductoScreen } from '../screens/vender/FotoProductoScreen';
import { CategoriaScreen } from '../screens/vender/CategoriaScreen';
import { TipoProductoScreen } from '../screens/vender/TipoProductoScreen';
import { DescripcionScreen } from '../screens/vender/DescripcionScreen';
import { MetodoPagoScreen } from '../screens/vender/MetodoPagoScreen';
import { CheckeoFinalScreen } from '../screens/vender/CheckeoFinalScreen';
import { ArticuloPublicado as ArticuloPublicadoVender } from '../screens/vender/ArticuloPublicado';

import { DetalleDonarScreen } from '../screens/donar/DetalleDonarScreen';
import { InformacionScreen } from '../screens/donar/InformacionScreen';
import { ArticuloPublicado as ArticuloPublicadoDonar } from '../screens/donar/ArticuloPublicado';

import { ComprasScreen } from '../screens/perfil/compras/ComprasScreen';
import { FavoritosScreen } from '../screens/perfil/favoritos/FavoritosScreen';
import { MensajesScreen } from '../screens/perfil/mensajes/MensajesScreen';

import { AyudaScreen } from '../screens/perfil/ayuda/AyudaScreen';
import { QuieroComprarScreen } from '../screens/perfil/ayuda/QuieroComprarScreen';
import { QuieroVenderScreen } from '../screens/perfil/ayuda/QuieroVenderScreen';
import { DevolucionesScreen } from '../screens/perfil/ayuda/DevolucionesScreen';
import { BajarCuentaScreen } from '../screens/perfil/ayuda/BajarCuentaScreen';
import { DonacionesScreen } from '../screens/perfil/ayuda/DonacionesScreen';

import { VenderScreen } from '../screens/perfil/vender/VenderScreen.jsx';
import { GananciasScreen } from '../screens/perfil/vender/GananciasScreen';
import { PublicacionesScreen } from '../screens/perfil/vender/PublicacionesScreen';
import { MediosCobrosScreen } from '../screens/perfil/vender/MediosCobrosScreen';

const Stack = createNativeStackNavigator();

export const StackNavigation = () => {

    return (
        <Stack.Navigator>

            <Stack.Screen name="TabNavigation" component={TabNavigation} options={{ headerShown: false }} />

            {/* screens vender */}
            <Stack.Screen name="FotoProductoScreen" component={FotoProductoScreen} />
            <Stack.Screen name="CategoriaScreen" component={CategoriaScreen} />
            <Stack.Screen name="TipoProductoScreen" component={TipoProductoScreen} />
            <Stack.Screen name="DescripcionScreen" component={DescripcionScreen} />
            <Stack.Screen name="MetodoPagoScreen" component={MetodoPagoScreen} />
            <Stack.Screen name="CheckeoFinalScreen" component={CheckeoFinalScreen} />
            <Stack.Screen name="ArticuloPublicadoVender" component={ArticuloPublicadoVender} />

            {/* screens donar */}
            <Stack.Screen name="DetalleDonarScreen" component={DetalleDonarScreen} />
            <Stack.Screen name="InformacionScreen" component={InformacionScreen} />
            <Stack.Screen name="ArticuloPublicadoDonar" component={ArticuloPublicadoDonar} />

            {/* screens perfil */}
            <Stack.Screen name="ComprasScreen" component={ComprasScreen} />
            <Stack.Screen name="FavoritosScreen" component={FavoritosScreen} />
            <Stack.Screen name="MensajesScreen" component={MensajesScreen} />

            <Stack.Screen name="VenderScreenPerfil" component={VenderScreen} />
            <Stack.Screen name="GananciasScreen" component={GananciasScreen} />
            <Stack.Screen name="PublicacionesScreen" component={PublicacionesScreen} />
            <Stack.Screen name="MediosCobrosScreen" component={MediosCobrosScreen} />

            <Stack.Screen name="AyudaScreen" component={AyudaScreen} />
            <Stack.Screen name="BajarCuentaScreen" component={BajarCuentaScreen} />
            <Stack.Screen name="DevolucionesScreen" component={DevolucionesScreen} />
            <Stack.Screen name="DonacionesScreen" component={DonacionesScreen} />
            <Stack.Screen name="QuieroComprarScreen" component={QuieroComprarScreen} />
            <Stack.Screen name="QuieroVenderScreen" component={QuieroVenderScreen} />

        </Stack.Navigator>
    )
}