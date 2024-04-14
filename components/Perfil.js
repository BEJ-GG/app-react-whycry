import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Button,
  Text,
  Modal,
  ScrollView,
  Pressable,
  Image,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FotoMb from '../assets/mb.png'

import Login from './Login'
import Cadastro from './Cadastro'
import Home from './Home'
import TelaVideo from './TelaVideo'

const Stack = createStackNavigator();

export default function Perfil() {
  return (
    <Stack.Navigator>
     <Stack.Screen name="Cadastro" component={Cadastro} options={{
        headerTransparent:true,
        headerShow:false,
        title:''
      }} />
      <Stack.Screen name="Login" component={Login} options={{
        headerTransparent:true,
        headerShow:false,
        title:''
      }} />
      <Stack.Screen name="TelaVideo" component={TelaVideo} options={{
        headerTransparent:true,
        headerShow:false,
        title:''
      }} />

    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  
});

