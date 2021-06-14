import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <Text>{users.length}</Text>
            {
                users.map(user => <Text key={user._id}>{user.name}</Text>)
            }
        </View>
    )
}

const styles = StyleSheet.create({})
