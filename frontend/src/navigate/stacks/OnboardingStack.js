import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { OnboardingCompraScreen } from '../../screens/onboarding/OnboardingCompraScreen'
import { OnboardingDonaScreen } from '../../screens/onboarding/OnboardingDonaScreen'
import { OnboardingVendeScreen } from '../../screens/onboarding/OnboardingVendeScreen'

export const OnboardingStack = () => {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name='OnboardingCompraScreen'
                component={OnboardingCompraScreen}
            />
            <Stack.Screen
                name='OnboardingVendeScreen'
                component={OnboardingVendeScreen}
            />
            <Stack.Screen
                name='OnboardingDonaScreen'
                component={OnboardingDonaScreen}
            />
        </Stack.Navigator>
    )
}