
// src/Profilescreen.js
import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useProfile } from '../hooks/useProfile';

export default function Profilescreen() {
    const { getProfile, saveProfile } = useProfile();
    const [profile, setProfile] = useState({ email: '', phone: '' });

    useEffect(() => {
        getProfile().then(data => {
            if (data) setProfile(data);
        }).catch(error => {
            console.log(error);
        });
    }, []);

    const save = () => {
        saveProfile(profile).then(() => {
            console.log('Profile saved' + JSON.stringify(profile));
        }).catch(error => {
            console.log(error);
        });
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.field}
                value={profile.email}
                label="Email"
                keyboardType="email-address"
                onChangeText={(text) => setProfile({ ...profile, email: text })}
            />
            <TextInput
                style={styles.field}
                value={profile.phone}
                label="Phone"
                onChangeText={(text) => setProfile({ ...profile, phone: text })}
                keyboardType="phone-pad"
            />
            <Button onPress={save}>Save</Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    field: {
        marginBottom: 16,
    },
});