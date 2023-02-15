import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StackMain } from './StackNavigation'

export default function MainNavigation() {
    return (
        <NavigationContainer>
            <StackMain />
        </NavigationContainer>
    )
}
