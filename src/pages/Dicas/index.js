import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View,Button} from 'react-native';
import { List } from 'react-native-paper';


export default function AssetExample({navigation}) {

  
 return(
  <View>
    <Button
      color="#0fa36b"
      title="Navigate to screen 2"
    ></Button>
</View>
 );
}


const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardsDicas:{
    marginTop: 10,
    backgroundColor:'#D7E9FD',
    marginLeft:5,
    marginRight:5,
    borderTopStartRadius:10,
    borderTopEndRadius:10
  },
  conteudoCard:{
    backgroundColor:'#D7E9FD',
    borderEndEndRadius:10,
    borderEndStartRadius:10,
    marginLeft:5,
    marginRight:5,

  }
 


});
