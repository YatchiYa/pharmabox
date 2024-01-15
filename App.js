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
import HomeTabs from './src/index';
import SearMedoc from "./src/layouts/models/searchMedoc"
import ScanLedoc from "./src/layouts/models/scanMedoc"
import MedicInfo from "./src/layouts/models/medic_info"
import Settings from "./src/layouts/settings/settings"
 

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();
const RootStack = createStackNavigator();

export default function App() { 

  return ( 
  <NavigationContainer>
  <RootStack.Navigator>
    <RootStack.Group>
          <Stack.Screen name="MainPage" component={HomeTabs}
            options={{ 
              headerShown:false,
            }} />
          <Stack.Screen name="Settings" component={Settings} />
    </RootStack.Group>
    <RootStack.Group screenOptions={{ presentation: 'modal' }}>
      <RootStack.Screen name="Details du Medédicament" component={MedicInfo} />
      <RootStack.Screen name="Recherche de médicaments" component={SearMedoc} />
      <RootStack.Screen name="Scanner un médicament" component={ScanLedoc} />
    </RootStack.Group>
  </RootStack.Navigator>
  </NavigationContainer>
  );
}
