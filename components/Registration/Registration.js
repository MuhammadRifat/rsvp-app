import { DrawerActions } from '@react-navigation/native';
import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function Registration({ navigation }) {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [dob, setDob] = useState(new Date());
    const [profession, setProfession] = useState('');
    const [locality, setLocality] = useState('');
    const [guests, setGuests] = useState('');
    const [address, setAddress] = useState('');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || dob;
        setDob(currentDate);
        setShow(false);
    };

    const showDatepicker = () => {
        setShow(true);
    }

    const handleSubmit = () => {
        if (name && age && dob && profession && locality && guests && address) {
            const newOb = {
                name: name,
                age: age,
                dob: dob,
                profession: profession,
                locality: locality,
                guests: guests,
                address: address
            };
            fetch('https://pacific-hollows-82109.herokuapp.com/addInfo', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newOb)
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        alert("Added successfully");
                    }
                })
        }
        else {
            alert("Please fill up all boxes");
        }
    }
    return (
        <ScrollView>
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    name="name"
                    placeholder="Name"
                    onChangeText={value => setName(value)}
                    defaultValue={name}
                />
                <TextInput
                    style={styles.textInput}
                    name="age"
                    placeholder="Age"
                    onChangeText={value => setAge(value)}
                    defaultValue={age}
                />
                <TouchableOpacity onPress={showDatepicker} style={styles.datePicker}>
                    <Text>Date of Birth</Text>
                </TouchableOpacity>
                <TextInput
                    style={styles.textInput}
                    name="profession"
                    placeholder="Profession"
                    onChangeText={value => setProfession(value)}
                    defaultValue={profession}
                />
                <TextInput
                    style={styles.textInput}
                    name="locality"
                    placeholder="Locality"
                    onChangeText={value => setLocality(value)}
                    defaultValue={locality}
                />
                <Picker
                    style={styles.picker}
                    selectedValue={guests}
                    onValueChange={(itemValue, itemIndex) =>
                        setGuests(itemValue)
                    }>
                    <Picker.Item label="Number of Guests" value="" />
                    <Picker.Item label="0" value="0" />
                    <Picker.Item label="1" value="1" />
                    <Picker.Item label="2" value="2" />
                </Picker>
                <TextInput
                    style={styles.textInput}
                    name="address"
                    placeholder="Address"
                    onChangeText={value => setAddress(value)}
                    defaultValue={address}
                />
                {
                    show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={dob}
                            mode='date'
                            display="default"
                            onChange={onChange}
                        />
                    )
                }

                <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 5,
        width: 300,
        marginBottom: 10,
        padding: 8,
        fontSize: 16
    },
    button: {
        backgroundColor: "darkgreen",
        padding: 10,
        borderRadius: 5,
        width: 300
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "600",
        color: '#fff',
        textAlign: "center",
    },
    datePicker: {
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        width: 300,
        marginBottom: 10
    },
    picker: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        width: 300,
        marginBottom: 10,
        padding: 10,
        fontSize: 16
    }
})
