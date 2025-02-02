
import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Image,
} from 'react-native';

const LoginScreen = ({ navigation, setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isEnterprise, setIsEnterprise] = useState(false);

  // Hardcoded username and password
  const validUsername = 'user123';
  const validPassword = 'password123';

  // Handle the login action
  const handleLogin = () => {
    if (username === validUsername && password === validPassword) {
      Alert.alert('Success', 'Login successful!');
 // Update the app state to reflect login
      navigation.replace('Home'); // Navigate to the Home screen and replace Login screen
    } else {
      Alert.alert('Error', 'Invalid username or password');
    }
  };

  return (
    <View style={styles.container}>
      <Image
                 source={{
                   uri: 'https://i.ibb.co/1rvcSj8/Untitled-design-2-removebg-preview.png',
                 }}
                 style={styles.logo}
               />

      <Text style={styles.title}>Welcome Back!</Text>

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
            Individual Login
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
            Enterprise Login
          </Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('SignUp')}
        style={styles.signupLink}
      >
        <Text style={styles.signupText}>Don't have an account? Sign Up</Text>
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
    width: 200,
    height: 200,
    marginBottom: 10,
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
  loginButton: {
    backgroundColor: '#079094',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupLink: {
    marginTop: 20,
  },
  signupText: {
    color: '#079094',
    textDecorationLine: 'underline',
    fontSize: 14,
  },
});

export default LoginScreen;