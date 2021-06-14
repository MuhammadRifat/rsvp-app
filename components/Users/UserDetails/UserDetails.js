import React, { useState } from 'react'
import { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'

export default function UserDetails({ route }) {
    const { id } = route.params;
    const [userData, setUserData] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://pacific-hollows-82109.herokuapp.com/userData', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: id })
        })
            .then(res => res.json())
            .then(data => {
                setUserData(data);
                setIsLoading(false);
            });
    }, [])

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            {
                isLoading &&
                <ActivityIndicator size="large" color="darkred" style={{ marginBottom: 5 }} />
            }
            <View>
                <View style={styles.dataContainer}>
                    <Text style={{ color: 'darkgray' }}>Name</Text>
                    <Text style={styles.userData}>{userData.name}</Text>
                </View>
                <View style={styles.dataContainer}>
                    <Text style={{ color: 'darkgray' }}>Age</Text>
                    <Text style={styles.userData}>{userData.age}</Text>
                </View>
                <View style={styles.dataContainer}>
                    <Text style={{ color: 'darkgray' }}>Date of Birth</Text>
                    <Text style={styles.userData}>{userData.dob}</Text>
                </View>
                <View style={styles.dataContainer}>
                    <Text style={{ color: 'darkgray' }}>Profession</Text>
                    <Text style={styles.userData}>{userData.profession}</Text>
                </View>
                <View style={styles.dataContainer}>
                    <Text style={{ color: 'darkgray' }}>Locality</Text>
                    <Text style={styles.userData}>{userData.locality}</Text>
                </View>
                <View style={styles.dataContainer}>
                    <Text style={{ color: 'darkgray' }}>Number of Guests</Text>
                    <Text style={styles.userData}>{userData.guests}</Text>
                </View>
                <View style={styles.dataContainer}>
                    <Text style={{ color: 'darkgray' }}>Address</Text>
                    <Text style={styles.userData}>{userData.address}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    userData: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    dataContainer: {
        backgroundColor: 'darkred',
        borderRadius: 20,
        padding: 10,
        margin: 5,
        alignItems: 'center'
    }
})
