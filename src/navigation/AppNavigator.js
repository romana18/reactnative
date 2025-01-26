// src/navigation/AppNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import ServicesScreen from '../screens/ServicesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Icon from 'react-native-vector-icons/FontAwesome'; // Using FontAwesome

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home'; // FontAwesome 'home' icon
          } else if (route.name === 'Services') {
            iconName = 'wrench'; // FontAwesome 'wrench' icon
          } else if (route.name === 'Profile') {
            iconName = 'user'; // FontAwesome 'user' icon
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { paddingBottom: 5, height: 60 }, // Optional styling
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Services" component={ServicesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
