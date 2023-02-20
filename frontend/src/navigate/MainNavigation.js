import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { OnboardingStack } from './stacks/OnboardingStack';
import { LoginStack } from './stacks/LoginStack';


const Stack = createNativeStackNavigator();

export const MainNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="OnboardingStack">
                <Stack.Screen name="OnboardingStack" component={OnboardingStack} />
                <Stack.Screen name="LoginStack" component={LoginStack} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
