import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import firebase from 'firebase/app';
import 'firebase/auth';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => console.log('Logged in'))
      .catch(error => console.log(error));
  }

  return (
    <View style={styles.container}>
      <Input
        placeholder="Email"
        leftIcon={<FontAwesome name="envelope" size={24} color="black" />}
        onChangeText={setEmail}
      />
      <Input
        placeholder="Password"
        leftIcon={<FontAwesome name="lock" size={24} color="black" />}
        secureTextEntry={true}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
