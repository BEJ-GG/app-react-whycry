import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Home from './components/Home';
import Cadastro from './components/Cadastro';
import Login from './components/Login';
import Dicas from './components/Dicas';
import SeuBebe from './components/SeuBebe';
import Perfil from './components/Perfil';
import TelaVideo from './components/TelaVideo';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Gravar"
        options={{
          headerTintColor: '#7ea8cb',
          headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf: 'center',
            fontSize: 30,
          },
          tabBarIcon: () => (
            <FontAwesome name="microphone" size={30} color="#7ea8cb" />
          ),
        }}
        component={Home}
      />
      <Tab.Screen
        name="Dicas"
        options={{
          headerTintColor: '#7ea8cb',
          headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf: 'center',
            fontSize: 30,
          },
          tabBarIcon: () => (
            <FontAwesome5 name="book" size={30} color="#7ea8cb" />
          ),
        }}
        component={Dicas}
      />
      <Tab.Screen
        name="Seu Bebê"
        options={{
          headerTintColor: '#7ea8cb',
          headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf: 'center',
            fontSize: 30,
          },
          tabBarIcon: () => (
            <FontAwesome5 name="baby" size={30} color="#7ea8cb" />
          ),
        }}
        component={SeuBebe}
      />
      <Tab.Screen
        name="Perfil"
        options={{
          headerTintColor: '#7ea8cb',
          headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf: 'center',
            fontSize: 30,
          },
          tabBarIcon: () => (
            <Ionicons name="person" size={30} color="#7ea8cb" />
          ),
        }}
        component={Perfil}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
