import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DatePicker from 'react-native-datepicker';
import { RadioButton } from 'react-native-paper';
import LogoWhy from '../assets/logWhy.png';
import axios from 'axios';

const apiLogin = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1',
});
const API_KEY = 'AIzaSyBwG4TfgBU9PYz-NVdTiTHSZ2fqYMoRTp0';

export default function Login({navigation}) {
  const [display, setDisplay] = useState('none');
  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')
  
  return (
    <View style={styles.geral}>
      <View style={styles.marTudo}>
        <View style={styles.containerCada}>
          <View style={{ justifyContent: 'center',alignItems:'center' }}>
            <Image source={LogoWhy} style={styles.lolog} resizeMode="contain" />
          </View>
          <View style={styles.aliCadaUm}>
            <Text>Email</Text>
            <TextInput style={styles.textInput} value={email} onChangeText={setEmail}/>
            <Text style={styles.erroEmail(display)}>ERRO</Text>
          </View>
          <View style={styles.aliCada}>
            <Text>Senha</Text>
            <TextInput
              style={styles.textInput}
              label="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          <View style={styles.aliCada}>
            <TouchableOpacity
              style={styles.butSt}
              onPress={() => {
                apiLogin
                  .post('/accounts:signInWithPassword?key=' + API_KEY, {
                    email,
                    password,
                    returnSecureToken: true,
                  })
                  .then((res) => {
                    navigation.navigate('TelaUser')
                  })
                  .catch((err) => {
                    alert('Erro: ' + JSON.stringify(err));
                  });
              }}>
              <Text style={styles.texButCa}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
              <Text style={styles.conCa}>
                Não possui uma conta? Cadastre-se
              </Text>
            </TouchableOpacity>
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
  containerCada: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 4.65,
    elevation: 8,
    flexDirection: 'column',
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 2,
  },
  lolog: {
    height: 150,
    marginHorizontal: 40,
 
  },
  aliCadaUm: {
    flexDirection: 'column',

    marginHorizontal: 20,
  },
  aliCada: {
    flexDirection: 'column',
    marginTop: 15,
    marginHorizontal: 20,
  },
  textInput: {
    backgroundColor: '#b5cde1',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: 40,
    marginTop: 10,
    marginBottom: 5,
    paddingLeft: 10,
  },
  erroEmail: (text = 'none') => ({
    color: 'red',
    textAlign: 'center',
    display: text,
  }),
  conCa: {
    textAlign: 'center',
    fontSize: 13,
    marginBottom: 10,
  },
  butSt: {
    backgroundColor: '#b5cde1',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: 40,
    marginBottom: 5,
  },
  texButCa: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 15,
  },
});
