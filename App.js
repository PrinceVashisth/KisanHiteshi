import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import * as Expo from 'expo';
import RegisterForm from './pages/RegistrationScreen';
import {StyleSheet} from 'react-native';
import Home from './pages/Home';
import VoiceCard from './components/VoiceCard';
export default function App() {
  return (
    <View style={styles.container}>
    <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
   container:{
    marginTop:40
   }
})
