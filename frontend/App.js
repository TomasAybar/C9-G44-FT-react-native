import 'react-native-gesture-handler';
import * as React from 'react';
import { MainNavigation } from './src/navigate/MainNavigation';
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
  Inter_600SemiBold,
} from '@expo-google-fonts/inter';
import { StatusBar } from 'react-native';
import theme from './src/themes/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar
        backgroundColor={theme.colors.appBackground}
        barStyle="light-content"
      />

      <MainNavigation />
    </>
  );
}
