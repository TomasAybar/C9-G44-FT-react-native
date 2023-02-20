import 'react-native-gesture-handler';
import * as React from 'react';
import { MainNavigation } from './src/navigate/MainNavigation';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from './src/screens/HomeScreen';
import { ComprarScreen } from './src/screens/ComprarScreen';

import { VenderScreen } from './src/screens/vender/VenderScreen';
import { FotoProductoScreen } from './src/screens/vender/FotoProductoScreen';
import { CategoriaScreen } from './src/screens/vender/CategoriaScreen';
import { TipoProductoScreen } from './src/screens/vender/TipoProductoScreen';
import { DescripcionScreen } from './src/screens/vender/DescripcionScreen';
import { MetodoPagoScreen } from './src/screens/vender/MetodoPagoScreen';
import { CheckeoFinalScreen } from './src/screens/vender/CheckeoFinalScreen';
import { ArticuloPublicado as ArticuloPublicadoVender } from './src/screens/vender/ArticuloPublicado';

import { DonarScreen } from './src/screens/donar/DonarScreen';
import { DetalleDonarScreen } from './src/screens/donar/DetalleDonarScreen';
import { InformacionScreen } from './src/screens/donar/InformacionScreen';
import { ArticuloPublicado as ArticuloPublicadoDonar } from './src/screens/donar/ArticuloPublicado';

import { PerfilScreen } from './src/screens/perfil/PerfilScreen';
import { ComprasScreen } from './src/screens/perfil/compras/ComprasScreen';
import { FavoritosScreen } from './src/screens/perfil/favoritos/FavoritosScreen';
import { MensajesScreen } from './src/screens/perfil/mensajes/MensajesScreen';
import { QuieroVenderScreen } from './src/screens/perfil/ayuda/QuieroVenderScreen';
import { DevolucionesScreen } from './src/screens/perfil/ayuda/DevolucionesScreen';
import { BajarCuentaScreen } from './src/screens/perfil/ayuda/BajarCuentaScreen';
import { QuieroComprarScreen } from './src/screens/perfil/ayuda/QuieroComprarScreen';
import { AyudaScreen } from './src/screens/perfil/ayuda/AyudaScreen';
// import { TabNavigation } from './src/navigate/TabNavigation';

// import { PerfilStack } from './src/navigate/stacks/PerfilStack';
// import { VenderStack } from './src/navigate/stacks/VenderStack';

export default function App() {
  return (
    <MainNavigation />
  );
}


// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>

//       <Stack.Navigator>

//         <Stack.Screen name="TabNavigation" component={TabNavigation} options={{ headerShown: false }} />

//         {/* screens vender */}
//         <Stack.Screen name="FotoProductoScreen" component={FotoProductoScreen} />
//         <Stack.Screen name="CategoriaScreen" component={CategoriaScreen} />
//         <Stack.Screen name="TipoProductoScreen" component={TipoProductoScreen} />
//         <Stack.Screen name="DescripcionScreen" component={DescripcionScreen} />
//         <Stack.Screen name="MetodoPagoScreen" component={MetodoPagoScreen} />
//         <Stack.Screen name="CheckeoFinalScreen" component={CheckeoFinalScreen} />
//         <Stack.Screen name="ArticuloPublicadoVender" component={ArticuloPublicadoVender} />

//         {/* screens donar */}
//         <Stack.Screen name="DetalleDonarScreen" component={DetalleDonarScreen} />
//         <Stack.Screen name="InformacionScreen" component={InformacionScreen} />
//         <Stack.Screen name="ArticuloPublicadoDonar" component={ArticuloPublicadoDonar} />

//         {/* screens perfil */}
//         <Stack.Screen name="ComprasScreen" component={ComprasScreen} />
//         <Stack.Screen name="QuieroComprarScreen" component={QuieroComprarScreen} />
//         <Stack.Screen name="QuieroVenderScreen" component={QuieroVenderScreen} />
//         <Stack.Screen name="FavoritosScreen" component={FavoritosScreen} />
//         <Stack.Screen name="MensajesScreen" component={MensajesScreen} />

//         <Stack.Screen name="AyudaScreen" component={AyudaScreen} />
//         <Stack.Screen name="DevolucionesScreen" component={DevolucionesScreen} />
//         <Stack.Screen name="BajarCuentaScreen" component={BajarCuentaScreen} />






//       </Stack.Navigator>

//     </NavigationContainer>


//   );
// }

