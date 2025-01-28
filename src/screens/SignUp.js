import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
  Image,
} from 'react-native';

const SignUpScreen = ({ navigation }) => {
  const [isEnterprise, setIsEnterprise] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');

  const handleSignUp = () => {
    if (isEnterprise) {
      if (!companyName || !email || !password) {
        Alert.alert('Error', 'Please fill all the fields for Enterprise Sign Up');
        return;
      }
      Alert.alert('Success', 'Enterprise account created successfully!');
    } else {
      if (!age || !phone || !email || !password) {
        Alert.alert('Error', 'Please fill all the fields for Individual Sign Up');
        return;
      }
      Alert.alert('Success', 'Individual account created successfully!');
    }
    navigation.goBack(); // Navigate back to the login screen
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://via.placeholder.com/150' }}
        style={styles.logo}
      />

      <Text style={styles.title}>Create Your Account</Text>

      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            isEnterprise ? styles.inactiveToggle : styles.activeToggle,
          ]}
          onPress={() => setIsEnterprise(false)}
        >
          <Text
            style={isEnterprise ? styles.inactiveText : styles.activeText}
          >
            Individual
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.toggleButton,
            isEnterprise ? styles.activeToggle : styles.inactiveToggle,
          ]}
          onPress={() => setIsEnterprise(true)}
        >
          <Text
            style={isEnterprise ? styles.activeText : styles.inactiveText}
          >
            Enterprise
          </Text>
        </TouchableOpacity>
      </View>

      {isEnterprise ? (
        <TextInput
          style={styles.input}
          placeholder="Company Name"
          value={companyName}
          onChangeText={setCompanyName}
        />
      ) : (
        <TextInput
          style={styles.input}
          placeholder="Age"
          value={age}
          onChangeText={setAge}
          keyboardType="numeric"
        />
      )}

      {isEnterprise ? null : (
        <TextInput
          style={styles.input}
          placeholder="Phone"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
      )}

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.loginLink}
      >
        <Text style={styles.loginText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  toggleContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  toggleButton: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    alignItems: 'center',
  },
  activeToggle: {
    backgroundColor: '#079094',
  },
  inactiveToggle: {
    backgroundColor: '#e0e0e0',
  },
  activeText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  inactiveText: {
    color: '#333',
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  signUpButton: {
    backgroundColor: '#079094',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  signUpButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginLink: {
    marginTop: 20,
  },
  loginText: {
    color: '#079094',
    textDecorationLine: 'underline',
    fontSize: 14,
  },
});

export default SignUpScreen;
