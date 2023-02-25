import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from '../screens/HomeScreen'
import { CategoriasScreen } from '../screens/comprar/CategoriasScreen'
import { VenderScreen } from '../screens/vender/VenderScreen'
import { DonarScreen } from '../screens/donar/DonarScreen'
import { PerfilScreen } from '../screens/perfil/PerfilScreen'
import theme from '../themes/theme'
import { Image, StyleSheet, Text } from 'react-native'

const Tab = createBottomTabNavigator()

export const TabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: theme.colors.yellowPrimary,
                tabBarInactiveTintColor: theme.colors.yellowPrimary,
                tabBarStyle: {
                    height: 55,
                    position: 'absolute',
                    bottom: 8,
                    borderRadius: 24,
                    marginHorizontal: 10,
                    backgroundColor: theme.colors.greyPrimary
                },
                tabBarLabelStyle: styles.tabBarLabel,
                tabBarIconStyle: {
                    marginBottom: -5
                }

            }}
        >
            <Tab.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={{
                    headerTitle: 'Bienvenidx!',
                    tabBarIcon: ({ color, size, focused }) => (

                        <Image
                            source={
                                focused
                                    ? require('../../assets/icons/tab-bar/house-focused.png')
                                    : require('../../assets/icons/tab-bar/house.png')
                            }
                            style={{
                                height: size,
                                width: size,
                                tintColor: color,
                            }}
                        />
                    ),
                    tabBarLabel: ({ focused }) => (
                        <Text style={{
                            ...styles.tabBarLabel,
                            fontWeight: focused ? '600' : '400'
                        }}>Inicio</Text>
                    )
                }}
            />

            <Tab.Screen
                name='ComprarScreen'
                component={CategoriasScreen}
                options={{
                    headerTitle: 'Comprar',
                    tabBarIcon: ({ color, size, focused }) => (

                        <Image
                            source={
                                focused
                                    ? require('../../assets/icons/tab-bar/bag-focused.png')
                                    : require('../../assets/icons/tab-bar/bag.png')
                            }
                            style={{
                                height: size,
                                width: size,
                                tintColor: color
                            }}
                        />

                    ),
                    tabBarLabel: ({ focused }) => (
                        <Text style={{
                            ...styles.tabBarLabel,
                            fontWeight: focused ? '600' : '400'
                        }}>Comprar</Text>
                    )
                }}
            />

            <Tab.Screen
                name='VenderScreen'
                component={VenderScreen}
                options={{
                    headerTitle: 'Vender',
                    tabBarIcon: ({ color, size, focused }) => (

                        <Image
                            source={
                                focused
                                    ? require('../../assets/icons/tab-bar/sell-focused.png')
                                    : require('../../assets/icons/tab-bar/sell.png')
                            }
                            style={{
                                height: size,
                                width: size,
                                tintColor: color
                            }}
                        />

                    ),
                    tabBarLabel: ({ focused }) => (
                        <Text style={{
                            ...styles.tabBarLabel,
                            fontWeight: focused ? '600' : '400'
                        }}>Vender</Text>
                    )
                }}
            />

            <Tab.Screen
                name='DonarScreen'
                component={DonarScreen}
                options={{
                    headerTitle: 'Donar',
                    tabBarIcon: ({ color, size, focused }) => (

                        <Image
                            source={
                                focused
                                    ? require('../../assets/icons/tab-bar/donar-focused.png')
                                    : require('../../assets/icons/tab-bar/donar.png')
                            }
                            style={{
                                height: size,
                                width: size,
                                tintColor: color
                            }}
                        />

                    ),
                    tabBarLabel: ({ focused }) => (
                        <Text style={{
                            ...styles.tabBarLabel,
                            fontWeight: focused ? '600' : '400'
                        }}>Donar</Text>
                    )
                }}
            />

            <Tab.Screen
                name='PerfilScreen'
                component={PerfilScreen}
                options={{
                    headerTitle: 'Perfil',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Image
                            source={
                                focused
                                    ? require('../../assets/icons/tab-bar/perfil-focused.png')
                                    : require('../../assets/icons/tab-bar/perfil.png')
                            }
                            style={{
                                height: size,
                                width: size,
                                tintColor: color
                            }}
                        />
                    ),
                    tabBarLabel: ({ focused }) => (
                        <Text style={{
                            ...styles.tabBarLabel,
                            fontWeight: focused ? '600' : '400'
                        }}>Perfil</Text>
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBarLabel: {
        marginBottom: 5,
        fontWeight: '400',
        color: theme.colors.yellowPrimary,
        fontSize: 12
    },
})