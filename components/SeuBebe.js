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
import FotoB from '../assets/bb.png'

import Home from './Home'

const Stack = createStackNavigator();

export default function SeuBebe() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SeuBebe" component={SeuBebeTodos} options={{
        headerTransparent:true,
        headerShow:false,
        title:''
      }}  />
    </Stack.Navigator>
  );
}

function SeuBebeTodos({ navigation }) {
  return (
     <View style={styles.geral}>

      <View style={styles.marTudo}>
      <View style={styles.carLinhaPe}>
      <Image source={FotoB} style={{borderRadius:200,width:150,height:150,borderWidth:1,borderColor:'#7ea8cb'}} />
     <Text style={styles.tPer}>Beatriz Roberto</Text>
     <Text style={styles.tPD}>03/10/2022</Text>
      </View>
    <View style={styles.carLinhaUm}>
          <View>
            <Pressable
              onPress={() => navigation.navigate('Arquivos')}
              style={styles.carFo}>
              <MaterialCommunityIcons
                name="file-document-edit"
                style={styles.icFo}
              />
            </Pressable>
            <Text style={styles.textCar}>ARQUIVOS</Text>
          </View>
          <View style={{ marginLeft: 10 }}>
            <Pressable
              onPress={() => setModalCVisible(true)}
              style={styles.carFo}>
              <Ionicons name="calendar-sharp" style={styles.icFo} />
            </Pressable>
            <Text style={styles.textCar}>AGENDA</Text>
          </View>
        </View>

        <View style={styles.carLinhaUm}>
          <View>
            <Pressable
              onPress={() => setModalSVisible(true)}
              style={styles.carFo}>
               <Fontisto name="photograph" style={styles.icFoF} />
            </Pressable>
            <Text style={styles.textCar}>ALBÚM</Text>
          </View>
          <View style={{ marginLeft: 10 }}>
            <Pressable
              onPress={() => setModalAVisible(true)}
              style={styles.carFo}>
              <FontAwesome name="book" style={styles.icFo} />
            </Pressable>
            <Text style={styles.textCar}>DIÁRIO</Text>
          </View>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  geral: {
    backgroundColor: '#dae6f0',
    flex: 1,
  },
  marTudo: {
    flex: 1,
    justifyContent: 'center',
  },
  carLinhaUm: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
   carLinhaPe: {
    flexDirection: 'column',
    alignItems:'center',
    marginBottom: 10,
  },
  carFo: {
    backgroundColor: 'white',
    width: 150,
    height: 150,
    borderRadius: 100,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 7.65,
  },
  icFo: {
    color: '#7ea8cb',
    paddingTop: 25,
    fontSize: 100,
    alignSelf: 'center',
  },
  icFoF: {
    color: '#7ea8cb',
    paddingTop: 25,
    fontSize: 100,
    marginLeft:'10%',
    alignSelf: 'center',
  },
  textCar: {
    marginTop: 5,
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    shadowColor: '#000',
    textDecorationLine: 'underline',
  },
  tPer:{
    fontSize:22,
    marginBottom:5,
    color: '#7ea8cb',
    fontWeight:'bold'
  },
  tPD:{
    fontSize:20,
    marginBottom:5,
    color: '#7ea8cb',
      fontWeight:'bold'
  }
});

