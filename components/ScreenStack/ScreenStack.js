import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import Registration from '../Registration/Registration';
import Users from '../Users/Users';
import Reports from '../Reports/Reports';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerActions } from '@react-navigation/native';

const Stack = createStackNavigator();

export function firstScreenStack({ navigation }) {
    return (
        <Stack.Navigator initialRouteName="Registration">
            <Stack.Screen
                name="Registration"
                component={Registration}
                options={{
                    title: 'Registration', 
                    headerLeft: () => (
                        <TouchableOpacity
                        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                    >
                        <Image
                            source={{
                                uri:
                                    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
                            }}
                            style={{ width: 25, height: 25, marginLeft: 5 }}
                        />
                    </TouchableOpacity>
                    ),
                    headerStyle: {
                        backgroundColor: 'darkred', //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                }}
            />
        </Stack.Navigator>
    );
}

export function secondScreenStack({ navigation }) {
    return (
        <Stack.Navigator initialRouteName="Users">
            <Stack.Screen
                name="Users"
                component={Users}
                options={{
                    title: 'Users', //Set Header Title
                    headerLeft: () => (
                        <TouchableOpacity
                        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                    >
                        <Image
                            source={{
                                uri:
                                    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
                            }}
                            style={{ width: 25, height: 25, marginLeft: 5 }}
                        />
                    </TouchableOpacity>
                    ),
                    headerStyle: {
                        backgroundColor: 'darkred', //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                }}
            />
        </Stack.Navigator>
    );
}

export function thirdScreenStack({ navigation }) {
    return (
        <Stack.Navigator initialRouteName="Reports">
            <Stack.Screen
                name="Reports"
                component={Reports}
                options={{
                    title: 'Reports', //Set Header Title
                    headerLeft: () => (
                        <TouchableOpacity
                        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                    >
                        <Image
                            source={{
                                uri:
                                    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
                            }}
                            style={{ width: 25, height: 25, marginLeft: 5 }}
                        />
                    </TouchableOpacity>
                    ),
                    headerStyle: {
                        backgroundColor: 'darkred', //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                }}
            />
        </Stack.Navigator>
    );
}