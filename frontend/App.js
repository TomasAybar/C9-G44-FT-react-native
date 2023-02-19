import 'react-native-gesture-handler';
import * as React from 'react';
import { MainNavigation } from './src/navigate/MainNavigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './src/components/Home.jsx';
import { Profile } from './src/components/Profile.jsx';
import { Settings } from './src/components/Settings.jsx';
import { Feed } from './src/components/Feed.jsx';
import { Notifications } from './src/components/Notifications.jsx';
import { NavigationContainer } from '@react-navigation/native';
import { DonarScreen } from './src/screens/donar/DonarScreen';
import { PerfilScreen } from './src/screens/perfil/PerfilScreen';

// export default function App() {
//   return (
//     <MainNavigation />
//   );
// }


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// function HomeStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={Home} />
//       <Stack.Screen name="Profile" component={Profile} />
//       <Stack.Screen name="Settings" component={Settings} />
//     </Stack.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={HomeStack} />
//         <Tab.Screen name="Feed" component={Feed} />
//         <Tab.Screen name="Notifications" component={Notifications} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Notifications" component={Notifications} />
    </Tab.Navigator>
  );
}




export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeTabs} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

