import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, StyleSheet, Image, Platform } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Screens
import HomeScreen from '../screens/HomeScreen';
import AppointmentScreen from '../screens/AppointmentScreen';
import DashboardScreen from '../screens/DashboardScreen';
import ServicesPage from '../screens/ServicesScreen';
import WellnessTab from '../screens/WellnessScreen';
import LoginScreen from '../screens/LoginScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SignUpScreen from '../screens/SignUp';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: '#079094',
      tabBarInactiveTintColor: 'black',
      headerShown: false,
      tabBarStyle: {
        backgroundColor: '#FFFF',
        height: 70,
        ...Platform.select({
          ios: {
            position: 'absolute',
          },
        }),
      },
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: 'Home',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" size={30} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Appointment"
      component={AppointmentScreen}
      options={{
        title: 'Appointment',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="calendar-check-outline" size={30} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Wellness"
      component={WellnessTab}
      options={{
        title: '',
        tabBarIcon: ({ color }) => (
          <Image
            source={{
              uri: 'https://i.ibb.co/1rvcSj8/Untitled-design-2-removebg-preview.png',
            }}
            style={styles.test}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Services"
      component={ServicesPage}
      options={{
        title: 'Services',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="stethoscope" size={30} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Dashboard"
      component={DashboardScreen}
      options={{
        title: 'Dashboard',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="view-dashboard-outline" size={30} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

const AppNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check for authentication status (replace with actual logic)
    const isLoggedIn = true; // Simulate the user being logged in
    setIsLoggedIn(isLoggedIn);
  }, []);

  const FloatingButton = ({ onPress }) => (
    <TouchableOpacity style={styles.floatingButton} onPress={onPress}>
      <MaterialCommunityIcons name="phone-outline" size={30} color="#fff" />
    </TouchableOpacity>
  );

  const handleCallPress = () => {
    console.log('Call button pressed');
  };

  const renderAuthStack = () => (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" options={{ headerShown: false }}>
        {(props) => <LoginScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
      </Stack.Screen>
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );

  const renderMainStack = () => (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: 'Profile' }}
      />
      <Stack.Screen
        name="ServicesPage"
        component={ServicesPage}
        options={{ title: 'ServicesPage' }}
      />
    </Stack.Navigator>
  );

  return (
    <>
      <NavigationContainer>
        {/* Always render TabNavigator */}
        {isLoggedIn ? renderMainStack() : renderAuthStack()}
      </NavigationContainer>

      {/* Floating Call Button */}
      <FloatingButton onPress={handleCallPress} />
    </>
  );
};

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    right: 20,
    bottom: 100,
    backgroundColor: '#079094',
    borderRadius: 50,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  test: {
    bottom: -10,
    height: 100,
    width: 100,
  },
});

export default AppNavigator;
