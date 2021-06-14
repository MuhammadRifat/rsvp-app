import React, { useState } from 'react'
import { useEffect } from 'react';
import { StyleSheet, TextInput, Text, View, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native'

export default function UserHome({ navigation }) {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // Load all guests
    useEffect(() => {
        setIsLoading(true);
        fetch('https://pacific-hollows-82109.herokuapp.com/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data);
                setIsLoading(false);
            })
    }, [])

    // search guests by name or locality
    useEffect(() => {
        setIsLoading(true);
        fetch('https://pacific-hollows-82109.herokuapp.com/searchUser', {
            method: 'POSt',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ search: search })
        })
            .then(res => res.json())
            .then(data => {
                setUsers(data);
                setIsLoading(false);
            })
    }, [search])

    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <TextInput
                    style={styles.textInput}
                    name="search"
                    placeholder=" Search"
                    onChangeText={value => setSearch(value)}
                    defaultValue={search}
                />
            </View>
            {
                isLoading &&
                <ActivityIndicator size="large" color="darkred" style={{ marginBottom: 5 }} />
            }
            {
                users.map(user => {
                    return <TouchableOpacity key={user._id} onPress={() => navigation.navigate('Users', { screen: 'UserDetails', params: { id: user._id }, })}>
                        <View style={styles.userContainer}>
                            <Text style={{ color: 'white', fontWeight: 'bold' }}>{user.name}</Text>
                            <Text style={{ color: 'white' }}>{user.locality}</Text>
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
        backgroundColor: 'darkred',
        alignItems: 'center',
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