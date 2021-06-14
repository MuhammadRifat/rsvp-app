import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native'
import UserHome from './UserHome/UserHome';
import UserDetails from './UserDetails/UserDetails';

const Stack = createStackNavigator();

export default function Users() {
    return (
        // nested navigation
        <Stack.Navigator initialRouteName="UserHome">
            <Stack.Screen name="UserHome" component={UserHome} options={{ headerShown: false }} />
            <Stack.Screen name="UserDetails" component={UserDetails} options={{ title: "" }} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    
})
