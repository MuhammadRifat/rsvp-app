import React, { useState } from 'react'
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native'

export default function UserDetails({route}) {
    const {id} = route.params;
    const [userData, setUserData] = useState({});

    useEffect( () => {
        fetch('http://localhost:5000/userData', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({id: id})
        })
        .then(res => res.json())
        .then(data => setUserData(data));
    }, [])
    return (
        <View style={{ flex: 1, alignItems: 'center'}}>
            <View>
                <Text>Name: {userData.name}</Text>
                <Text>Age: {userData.age}</Text>
                <Text>Date of Birth: {userData.dob}</Text>
                <Text>Profession: {userData.profession}</Text>
                <Text>Locality: {userData.locality}</Text>
                <Text>Number of Guests: {userData.guests}</Text>
                <Text>Address: {userData.address}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})
