import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function RegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [state, setState] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [userType, setUserType] = useState('person');

  const handleRegister = () => {
    // Handle user registration logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your full name"
          value={name}
          onChangeText={setName}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email address"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>State</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your state"
          value={state}
          onChangeText={setState}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your address"
          value={address}
          onChangeText={setAddress}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>City</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your city"
          value={city}
          onChangeText={setCity}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Zip Code</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your zip code"
          value={zip}
          onChangeText={setZip}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Register as:</Text>
        <View style={styles.radioContainer}>
          <TouchableOpacity
            style={[styles.radioButton, userType === 'person' && styles.radioButtonSelected]}
            onPress={() => setUserType('person')}>
            <Text style={[styles.radioLabel, userType === 'person' && styles.radioLabelSelected]}>
              Person
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.radioButton, userType === 'farmer' && styles.radioButtonSelected]}
            onPress={() => setUserType('farmer')}>
            <Text style={[styles.radioLabel, userType === 'farmer' && styles.radioLabelSelected]}>
              Farmer
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  inputContainer: {
    margin: 10,
    width: '80%',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    padding: 10,
    fontSize: 16,
    borderRadius: 5,
  },
  buttonContainer: {
    backgroundColor: '#0066CC',
}
})