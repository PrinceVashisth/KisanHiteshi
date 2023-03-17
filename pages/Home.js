import { View, Text } from 'react-native';
import React from 'react';
import Navbar from '../components/Navbar';
import Cards from '../components/Cards';
import VoiceCard from '../components/VoiceCard';

export default function Home() {
  return (
    <View>
     <Navbar/>
     <Cards/>
    </View>
  )
}