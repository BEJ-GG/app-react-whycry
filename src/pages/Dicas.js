import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Icon from 'react-native-vector-icons/FontAwesome5';


export default function Dicas({navigation}) {
  return (
    <View style={styles.geral}>
      <View style={styles.marTudo}>
      <View style={styles.divCards}>
        <View style={styles.conteud}>
      <MaterialCommunityIcons
                name="baby-bottle-outline"
                style={styles.icFo}
              />
      <Text style={styles.texFo}>Alimentação</Text>
      </View>
      </View>

      <View style={styles.divCards}>
        <View style={styles.conteud}>
        <MaterialCommunityIcons name="sleep" style={styles.icFo} />

      <Text style={styles.texFo}>Sono</Text>
      </View>
      </View>

      <View style={styles.divCards}>
        <View style={styles.conteud}>
       <FontAwesome name="stethoscope"
                style={styles.icFo}
              />
      <Text style={styles.texFo}>Saúde e segurança</Text>
      </View>
      </View>


      <View style={styles.divCards}>
        <View style={styles.conteud}>
      <MaterialCommunityIcons
                name="shower"
                style={styles.icFo}
              />
      <Text style={styles.texFo}>Higiene e cuidados</Text>
      </View>
      </View>

      <View style={styles.divCards}>
        <View style={styles.conteud}>
     <MaterialCommunityIcons name="teddy-bear"
                style={styles.icFo}
              />
      <Text style={styles.texFo}>Interação</Text>
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
    alignItems:'center',
    marginTop:25

  },
  divCards:{
    backgroundColor: "#7ea8cb",
    width:'90%',
    borderRadius:15,
    justifyContent:'center',
    marginTop:40
  },
  conteud:{
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:10,
    justifyContent:'flex-start'
  },
  icFo:{
    fontSize:75,
    color:'white'
  },
  texFo:{
    fontSize:30,
    fontWeight:'bold',
    color:'white',
    paddingLeft:5

  }
 
});
