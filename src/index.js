import * as React from 'react';
import { View, Button, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator, } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconFeather from 'react-native-vector-icons/Feather';

import MedocScreen from './screens/medicament';

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Médicaments"
        onPress={() => navigation.navigate('Details du Medédicament')}
      />
    </View>
  );
}

function AccountScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>This is the home screen!</Text>
      <Button
        onPress={() => navigation.navigate('MyModal')}
        title="Open Modal"
      />
    </View>
  );
}


const Tab = createBottomTabNavigator();

function HomeTabs() {

  return (
    <Tab.Navigator  
    
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#40a9ff",
        tabBarInactiveTintColor: "#15b149",
        //tabBarShowLabel: false,
        tabBarStyle: {  
          backgroundColor: "#ebe9eb",
          borderTopWidth: 0,
          borderTopColor: "#ebe9eb",
          shadowColor: "#ebe9eb"
      },
    })}
    >
      <Tab.Screen 
        name="Médicaments" 
        component={MedocScreen}
        options={{ 
          headerShown:false,
          //headerTransparent: 100,
          //headerTintColor: "green",
          headerTitleStyle: {
            fontWeight: '200',
          },
          tabBarLabel: 'Médicaments',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="pill" color={color} size={size} />
          ),
        }} />
      <Tab.Screen name="Hopitaux" component={ProfileScreen}
        options={{ 
          headerTitleStyle: {
            fontWeight: '200',
          },
          tabBarLabel: 'Hospitals',
          tabBarIcon: ({ color, size }) => (
            <Icon name="hospital-o" color={color} size={size} />
          ),
        }} />
      <Tab.Screen name="Médecins" component={AccountScreen} 
        options={{ 
          headerTitleStyle: {
            fontWeight: '200',
          },
          tabBarLabel: 'Médecins',
          tabBarIcon: ({ color, size }) => (
            <IconFontisto name="doctor" color={color} size={size} />
          ),
        }} />
      <Tab.Screen name="Profil" component={AccountScreen} 
        options={{ 
          headerTitleStyle: {
            fontWeight: '200',
          },
          tabBarLabel: 'Profil Plus',
          tabBarIcon: ({ color, size }) => (
            <IconFeather name="user-plus" color={color} size={size} />
          ),
        }} />
    </Tab.Navigator>
  );
}
export default HomeTabs