import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabNavigation } from './TabNavigation';
import { FotoProductoScreen } from '../screens/vender/FotoProductoScreen';
import { CategoriasScreen } from '../screens/comprar/CategoriasScreen';
import { CategoriaScreen } from '../screens/comprar/CategoriaScreen';
import { TipoProductoScreen } from '../screens/vender/TipoProductoScreen';
import { DescripcionScreen } from '../screens/vender/DescripcionScreen';
import { MetodoPagoScreen } from '../screens/vender/MetodoPagoScreen';
import { CheckeoFinalScreen } from '../screens/vender/CheckeoFinalScreen';
import { ArticuloPublicado as ArticuloPublicadoVender } from '../screens/vender/ArticuloPublicado';
import { Producto } from '../screens/comprar/Producto';
import { DetalleDonarScreen } from '../screens/donar/DetalleDonarScreen';
import { InformacionScreen } from '../screens/donar/InformacionScreen';
import { DonacionExitosa } from '../screens/donar/DonacionExitosa'
import { ArticuloPublicado as ArticuloPublicadoDonar } from '../screens/donar/ArticuloPublicado';
import { CategoriaScreen as CategoriaScreenVender } from '../screens/vender/CategoriaScreen';
import { Carrito } from '../screens/comprar/Carrito';
import { MetodoDeEntrega } from '../screens/comprar/MetodoDeEntrega';
import { MetodoDePago } from '../screens/comprar/MetodoDePago';
import { SeleccionEfectivo } from '../screens/comprar/SeleccionEfectivo';
import { SeleccionTarjeta } from '../screens/comprar/SeleccionTarjeta';
import { ProcesamientoPago } from '../screens/comprar/ProcesamientoPago';
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
import { CompletarMetodoCobroScreen } from '../screens/perfil/completar/CompletarMetodoCobroScreen';
import { MetodoCobroTRFScreen } from '../screens/perfil/completar/MetodoCobroTRFScreen';
import { MetodoCobroBVScreen } from '../screens/perfil/completar/MetodoCobroBVScreen';

import { CongratsScreen } from '../screens/vender/CongratsScreen';
import { SalirScreen } from '../screens/perfil/salir/SalirScreen';

import { MaterialIcons } from '@expo/vector-icons'

import { useNavigation } from '@react-navigation/native';
import theme from '../themes/theme';



const Stack = createNativeStackNavigator();

export const StackNavigation = () => {

    const navigation = useNavigation()

    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: theme.colors.appBackground,
                },
                headerTitleStyle: {
                    color: '#fff',
                    fontWeight: '700',
                },
                headerTintColor: theme.colors.yellowPrimary,
            }}
        >
            <Stack.Screen
                name="TabNavigation"
                component={TabNavigation}
                options={{ headerShown: false }}
            />

            {/* screens comprar */}
            <Stack.Screen name="Categorías" component={CategoriasScreen} />
            <Stack.Screen name="Categoria" component={CategoriaScreen} />
            <Stack.Screen name="Detalle del producto" component={Producto} />
            <Stack.Screen name="Carrito de compras" component={Carrito} />
            <Stack.Screen name="Selecciona un método de entrega" component={MetodoDeEntrega} />
            <Stack.Screen name="Selecciona un método de pago" component={MetodoDePago} />
            <Stack.Screen name="Efectivo" component={SeleccionEfectivo} />
            <Stack.Screen name="Tarjeta" component={SeleccionTarjeta} />
            <Stack.Screen name="Procesamiento de pago" component={ProcesamientoPago} />


            {/* screens vender */}
            <Stack.Screen name="FotoProductoScreen" component={FotoProductoScreen} options={{ headerTitle: 'Foto del producto' }} />
            <Stack.Screen name="CategoriaScreenVender" component={CategoriaScreenVender} options={{ headerTitle: 'Selecciona una categoría' }} />
            <Stack.Screen name="TipoProductoScreen" component={TipoProductoScreen} options={{ headerTitle: '¿Qué tipo de producto es?' }} />
            <Stack.Screen name="DescripcionScreen" component={DescripcionScreen} options={{ headerTitle: 'Descripción y precio' }} />
            <Stack.Screen name="MetodoPagoScreen" component={MetodoPagoScreen} options={{ headerTitle: 'Método de cobro' }} />
            <Stack.Screen name="CheckeoFinalScreen" component={CheckeoFinalScreen} options={{ headerTitle: 'Revisá y publicá' }} />
            <Stack.Screen name="CongratsScreen" component={CongratsScreen} options={{ headerShown: false }} />
            <Stack.Screen name="ArticuloPublicadoVender" component={ArticuloPublicadoVender} options={{ headerTitle: 'Publicaciones' }} />



            {/* screens donar */}
            <Stack.Screen name="DetalleDonarScreen" component={DetalleDonarScreen} options={{ headerTitle: 'Detalle de la donación' }} />
            <Stack.Screen name="InformacionScreen" component={InformacionScreen} options={{ headerTitle: 'Información para recolección' }} />
            <Stack.Screen name="DonacionExitosa" component={DonacionExitosa} options={{ headerShown: false }} />
            <Stack.Screen name="ArticuloPublicadoDonar" component={ArticuloPublicadoDonar} options={{ headerTitle: 'Publicaciones' }} />

            {/* screens perfil */}
            <Stack.Screen name="ComprasScreen" component={ComprasScreen} options={{ headerTitle: 'Compras' }} />
            <Stack.Screen name="FavoritosScreen" component={FavoritosScreen} options={{ headerTitle: 'Favoritos' }} />
            <Stack.Screen name="MensajesScreen" component={MensajesScreen} options={{ headerTitle: 'Mensajes' }} />
            <Stack.Screen name="SalirScreen" component={SalirScreen} options={{ headerShown: false }} />


            <Stack.Screen
                name="VenderScreenPerfil"
                component={VenderScreen}
                options={{ title: 'Ventas' }}
            />
            <Stack.Screen name="GananciasScreen" component={GananciasScreen} options={{ headerTitle: 'Ganancias' }} />
            <Stack.Screen name="PublicacionesScreen" component={PublicacionesScreen} options={{ headerTitle: 'Publicaciones' }} />
            {/* <Stack.Screen name="MediosCobrosScreen" component={MediosCobrosScreen} /> */}
            <Stack.Screen name="MediosCobrosScreen" component={CompletarMetodoCobroScreen} options={{ headerTitle: 'Método de cobro' }} />

            <Stack.Screen name="AyudaScreen" component={AyudaScreen} options={{ title: 'Perfil' }} />
            <Stack.Screen name="BajarCuentaScreen" component={BajarCuentaScreen} />
            <Stack.Screen name="DevolucionesScreen" component={DevolucionesScreen} options={{ headerTitle: 'Devolución' }} />
            <Stack.Screen name="DonacionesScreen" component={DonacionesScreen} options={{ headerTitle: 'Donar' }} />
            <Stack.Screen name="QuieroComprarScreen" component={QuieroComprarScreen} options={{ headerTitle: '¿Cómo comprar?' }} />
            <Stack.Screen name="QuieroVenderScreen" component={QuieroVenderScreen} options={{ headerTitle: '¿Cómo vender?' }} />

            {/* Login - metodo de cobro dentro de ventas editar metodos de cobro*/}
            <Stack.Screen name='MetodoCobroTRFScreen' component={MetodoCobroTRFScreen} options={{ headerTitle: 'Método de cobro' }} />
            <Stack.Screen name='MetodoCobroBVScreen' component={MetodoCobroBVScreen} options={{ headerTitle: 'Método de cobro' }} />

        </Stack.Navigator>
    );
};
