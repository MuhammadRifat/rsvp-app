import React, { useState } from 'react'
import { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'

export default function UserHome({ navigation }) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://pacific-hollows-82109.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <ScrollView style={{ flex: 1 }}>
            {
                users.map(user => {
                    return <TouchableOpacity key={user._id} onPress={() => navigation.navigate('Users', { screen: 'UserDetails', params: { id: user._id },})}>
                        <View style={styles.userContainer}>
                            <Text>{user.name}</Text>
                            <Text>{user.locality}</Text>
                        </View>
                    </TouchableOpacity>
                })
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    userContainer: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        margin: 3,
        padding: 5,
    }
})
