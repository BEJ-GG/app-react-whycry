import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Entypo, Feather,FontAwesome5} from '@expo/vector-icons'

export default function Home() {

  return (
    <View style={styles.container}>
   
      <TouchableOpacity style={styles.gravar} >
        <FontAwesome5 name="microphone" style={styles.microfone} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  gravar: {
    width:350,
       height:350,
       borderRadius:1000,
       backgroundColor:'#7EA8CB',
       alignItems:'center',
       display:'flex',
       justifyContent:'center',
  },
  microfone:{
    fontSize:200,
   
    
  }

});

