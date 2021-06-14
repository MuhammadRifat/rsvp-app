import React, { useState } from 'react'
import { useEffect } from 'react';
import { StyleSheet, TextInput, Text, View, TouchableOpacity, ScrollView } from 'react-native'

export default function UserHome({ navigation }) {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('https://pacific-hollows-82109.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    useEffect(() => {
        fetch('https://pacific-hollows-82109.herokuapp.com/searchUser', {
            method: 'POSt',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({search: search})
        })
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [search])

    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={{ flex:1, alignItems: 'center'}}>
                <TextInput
                    style={styles.textInput}
                    name="search"
                    placeholder=" Search"
                    onChangeText={value => setSearch(value)}
                    defaultValue={search}
                />
            </View>
            {
                users.map(user => {
                    return <TouchableOpacity key={user._id} onPress={() => navigation.navigate('Users', { screen: 'UserDetails', params: { id: user._id }, })}>
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
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'lightgray',
        width: 300,
        margin: 10,
        padding: 8,
        fontSize: 16
    },
})
