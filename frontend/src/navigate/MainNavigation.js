import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { CompletarPerfilStack, LoginStack, OnboardingStack } from './stacks/LoginStack';
import { StackNavigation } from './StackNavigation';

const Stack = createNativeStackNavigator();

export const MainNavigation = () => {
    return (
        <NavigationContainer>

            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="OnboardingStack">

                <Stack.Screen name="OnboardingStack" component={OnboardingStack} />

                <Stack.Screen name="LoginStack" component={LoginStack} />

                <Stack.Screen
                    name='StackNavigation'
                    component={StackNavigation}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name='CompletarPerfilStack'
                    component={CompletarPerfilStack}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>

        </NavigationContainer>
    );
};
