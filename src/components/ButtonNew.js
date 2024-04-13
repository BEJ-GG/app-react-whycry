import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {Entypo, Feather,FontAwesome5} from '@expo/vector-icons'

export default function ButtonNew({size,color}){
    return(
        <View style={styles.container}>
             <FontAwesome5 name="microphone" size={size} color={color} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
       width:60,
       height:60,
       borderRadius:30,
       backgroundColor:'#7EA8CB',
       alignItems:'center',
       justifyContent:'center',
       marginBottom:30
    }
})