import React, { useState } from 'react'
import { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'

export default function Reports() {
    const [totalByAge, setTotalByAge] = useState({});
    const [locality, setLocality] = useState([]);
    const [profession, setProfession] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // load reports from database
    useEffect(() => {
        setIsLoading(true);
        fetch('https://pacific-hollows-82109.herokuapp.com/reports')
            .then(res => res.json())
            .then(data => {
                setTotalByAge(data);
                setIsLoading(false);
            });
    }, [])

    // Load locality and profession data with group by.
    useEffect(() => {
        setIsLoading(true);
        fetch('https://pacific-hollows-82109.herokuapp.com/localityAndProfession')
            .then(res => res.json())
            .then(data => {
                setLocality(data[0]);
                setProfession(data[1]);
                setIsLoading(false);
            });
    }, [])

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            {
                isLoading &&
                <ActivityIndicator size="large" color="darkred" style={{ marginBottom: 5 }} />
            }
            <View style={{ flexDirection: "row", padding: 10 }}>
                <View style={styles.ageComponent}>
                    <Text style={styles.total}>{totalByAge.age13To17}</Text>
                    <Text style={styles.ageText}>Age Range</Text>
                    <Text style={styles.ageText}>13 - 17 </Text>
                </View>
                <View style={styles.ageComponent}>
                    <Text style={styles.total}>{totalByAge.age18To25}</Text>
                    <Text style={styles.ageText}>Age Range</Text>
                    <Text style={styles.ageText}>18 - 25 </Text>
                </View>
                <View style={styles.ageComponent}>
                    <Text style={styles.total}>{totalByAge.age25Plus}</Text>
                    <Text style={styles.ageText}>Age Range</Text>
                    <Text style={styles.ageText}>25+</Text>
                </View>
            </View>

            <View style={styles.locality}>
                {
                    locality.map(lc => {
                        return <View key={lc._id} style={{ marginBottom: 5, borderRadius: 10, padding: 5 }}>
                            <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold' }}>{lc._id}: {lc.count}</Text>
                        </View>
                    })
                }
            </View>

            <View style={styles.profession}>
                {
                    profession.map(pf => {
                        return <View key={pf._id} style={{ marginBottom: 5, borderRadius: 10, padding: 5 }}>
                            <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold' }}>{pf._id}: {pf.count}</Text>
                        </View>
                    })
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ageComponent: {
        flex: 1,
        alignItems: 'center',
        borderWidth: 1,
        margin: 5,
        borderColor: 'lightgray',
        borderRadius: 50,
        backgroundColor: 'darkred',
        padding: 10,
    },
    total: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
    },
    ageText: {
        color: 'lightgray',
    },
    locality: {
        backgroundColor: 'darkgreen',
        width: '90%',
        padding: 10,
        margin: 10,
        borderRadius: 20,
        alignItems: 'center'
    },
    profession: {
        backgroundColor: 'darkred',
        width: '90%',
        padding: 10,
        margin: 10,
        borderRadius: 20,
        alignItems: 'center'
    }
})
