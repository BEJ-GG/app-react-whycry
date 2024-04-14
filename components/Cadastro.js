import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Modal,
  Button,
  FlatList,
  Image
} from 'react-native';
import { RadioButton } from 'react-native-paper';
import MaskInput, { Masks } from 'react-native-mask-input';
import axios from 'axios';
import LogoWhy from '../assets/logWhy.png';

const apiLogin = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1',
});
const API_KEY = 'AIzaSyBwG4TfgBU9PYz-NVdTiTHSZ2fqYMoRTp0';

const api = axios.create({
  baseURL: 'https://whycry-fa736-default-rtdb.firebaseio.com/usuario',
});

export default function Cadastro({ navigation }) {
  const [lista, setLista] = useState([]);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [telefone, setTelefone] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [genero, setGenero] = useState('');
  const [id, setId] = useState(null);
  const [token, setToken] = useState(null);

  const salvar = (props) => {
    setToken(props);
    if (id === null) {
      api
        .post('/usuario.json?auth=' + props, {
          nome,
          email,
          cpf,
          password,
          telefone,
          nascimento,
          genero,
        })
        .then((info) => {
          consultar();
        })
        .catch((err) => {
          alert('Erro ao inserir os dados' + err);
        });
    } else {
      api
        .patch('/usuario/' + id + '.json?auth=' + token, {
          nome,
          email,
          cpf,
          password,
          telefone,
          nascimento,
          genero,
        })
        .then((info) => {
          consultar();
        })
        .catch((err) => {
          alert('Erro ao atualizar os dados');
        });
    }
  };

  const consultar = () => {
    api.get('/usuario.json?auth=' + token).then((info) => {
      const novaLista = [];
      for (chave in info.data) {

        const obj = { ...info.data[chave], id: chave };
        novaLista.push(obj);
      }
      setLista(novaLista);
    });
  };

  const apagar = (obj) => {
    api
      .delete('/usuario/' + obj.id + '.json?auth=' + token)
      .then((res) => {
        consultar();
      })
      .catch((err) => {
        alert('Erro ao apagar' + err);
      });
  };

  const editar = (obj) => {
    setId(obj.id);
    setNome(obj.nome);
    setTelefone(obj.telefone);
  };

  useEffect(() => {
    if (token) {
      consultar();
    }
  }, [token]);

  return (
    <View style={styles.geral}>
      <ScrollView style={styles.marTudo}>
        <View style={styles.containerCada}>
          <View style={styles.aliCada}>
            <Text>Nome</Text>
            <TextInput
              value={nome}
              maxLength="60"
              onChangeText={setNome}
              style={styles.textInput}
            />
          </View>
          <View style={styles.aliCada}>
            <Text>Email</Text>
            <TextInput
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
              style={styles.textInput}
            />
          </View>
          <View style={styles.aliCada}>
            <Text>CPF</Text>
            <MaskInput
              mask={Masks.BRL_CPF}
              value={cpf}
              onChangeText={setCpf}
              style={styles.textInput}
            />
          </View>

          <View style={styles.aliCada}>
            <Text>Senha</Text>
            <TextInput
              style={styles.textInput}
              label="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.aliCada}>
            <Text>Telefone</Text>
            <MaskInput
              style={styles.textInput}
              mask={Masks.BRL_PHONE}
              value={telefone}
              onChangeText={setTelefone}
            />
          </View>
          <View style={styles.aliCada}>
            <Text>Data de nascimento</Text>
            <MaskInput
              value={nascimento}
              onChangeText={setNascimento}
              style={styles.textInput}
              mask={Masks.DATE_DDMMYYYY}
            />
          </View>
          <View style={styles.radiB}>
            <RadioButton
              value="feminino"
              status={genero === 'feminino' ? 'checked' : 'unchecked'}
              onPress={() => setGenero('feminino')}
            />
            <Text style={styles.texRaB}>Feminino</Text>
            <RadioButton
              value="masculino"
              status={genero === 'masculino' ? 'checked' : 'unchecked'}
              onPress={() => setGenero('masculino')}
            />
            <Text style={styles.texRaB}>Masculino</Text>
            <RadioButton
              value="outro"
              status={genero === 'outro' ? 'checked' : 'unchecked'}
              onPress={() => setGenero('outro')}
            />
            <Text style={styles.texRaB}>Outro</Text>
          </View>

          <View style={styles.aliCada}>
            <TouchableOpacity
              style={styles.butSt}
              onPress={() => {
                apiLogin
                  .post('/accounts:signUp?key=' + API_KEY, {
                    nome,
                    email,
                    cpf,
                    password,
                    telefone,
                    nascimento,
                    genero,
                    returnSecureToken: true,
                  })
                  .then((res) => {
                    // salvar(res.data.idToken);
                    navigation.navigate('TelaVideo')
                  })
                  .catch((err) => {
                    alert(err);
                  });
              }}>
              <Text style={styles.texButCa}>CADASTRAR</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.butStLo}
              onPress={() => navigation.navigate('Login')}>
              <Text style={styles.texButLo}>Fazer Login</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Modal visible={token}>
          <FlatList
            renderItem={(props) => <TelaUser {...props} />}
          />
        </Modal>
      </ScrollView>
    </View>
  );
}

const TelaUser = (props) => (
  <View style={{ flex: 1, flexDirection: 'row' }}>
    <View>
      <Text>Nome:{props.item.nome}</Text>
      <Text>Cpf: {props.item.cpf}</Text>
      <Text>Email: {props.item.email}</Text>
      <Text>Telefone: {props.item.telefone}</Text>
    </View>
  </View>
);

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
  aliCada: {
    flexDirection: 'column',
    marginTop: 10,
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
  radiB: {
    flexDirection: 'row',
    marginTop: 10,
    marginHorizontal: 20,
    justifyContent: 'center',
  },

  texRaB: {
    marginTop: 7,
    marginRight: 10,
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
    fontSize: 18,
  },
  butStLo: {
    marginBottom: 20,
  },
  texButLo: {
    textAlign: 'center',
    marginTop: 1,
    fontSize: 16,
  },
});
