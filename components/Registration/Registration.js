import { DrawerActions } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function Registration({navigation}) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Registration Screen</Text>
            <TouchableOpacity
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            >
            <Text>Open Drawer</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({})
