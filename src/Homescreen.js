
// src/Homescreen.js
import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { useProfile } from '../hooks/useProfile';

export default function Homescreen() {
  const { getProfile } = useProfile();

  useEffect(() => {
    getProfile().then(data => {
      console.log(data);
    }).catch(error => {
      console.log(error);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Homescreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});