import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import UserHome from './UserHome/UserHome';
import UserDetails from './UserDetails/UserDetails';

const Stack = createStackNavigator();

export default function Users() {
    return (
        <Stack.Navigator initialRouteName="UserHome">
            <Stack.Screen name="UserHome" component={UserHome} options={{ headerShown: false }} />
            <Stack.Screen name="UserDetails" component={UserDetails} options={{ title: "" }} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    
})
