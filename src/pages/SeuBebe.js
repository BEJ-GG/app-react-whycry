import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  Image,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FotoB from '../../assets/seubebeFoto.png'
import Cadastro from './Cadastro'

const Stack = createStackNavigator();


export default function SeuBebe() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SeuBebe" component={SeuBebeTodos} options={{
        headerTransparent:true,
        headerShow:false,
        title:''
      }}  />
      <Stack.Screen name="Cadastro" component={Cadastro} options={{
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
     <Text style={styles.tPer}>Beatriz Rodrigues</Text>
     <Text style={styles.tPD}>03/04/2024</Text>
      </View>
      <View style={styles.divCards}>
        <View style={styles.conteud}>
      <MaterialCommunityIcons
                name="file-document-edit"
                style={styles.icFo}
              />
      <Text style={styles.texFo}>Arquivos</Text>
      </View>
      </View>

      <View style={styles.divCards}>
        <View style={styles.conteud}>
        <Ionicons  name="calendar-sharp" style={styles.icFo} />

      <Text style={styles.texFo}>Agenda</Text>
      </View>
      </View>

      <View style={styles.divCards}>
        <View style={styles.conteud}>
        <Fontisto name="photograph"
                style={styles.icFo}
              />
      <Text style={styles.texFo}>Álbum</Text>
      </View>
      </View>


      <View style={styles.divCards}>
        <View style={styles.conteud}>
      <FontAwesome name="book"
                style={styles.icFo}
              />
      <Text style={styles.texFo}>Diário</Text>
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
    alignItems:'center',

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
  },
  divCards:{
    backgroundColor: "#7ea8cb",
    width:'80%',
    borderRadius:15,
    justifyContent:'center',
    marginTop:30
  },
  conteud:{
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:10,
    justifyContent:'flex-start',
    padding:10
  },
  icFo:{
    fontSize:40,
    color:'white'
  },
  texFo:{
    fontSize:30,
    fontWeight:'bold',
    color:'white',
    paddingLeft:5

  }
});
