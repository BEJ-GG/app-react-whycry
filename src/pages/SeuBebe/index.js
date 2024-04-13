import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { TextInput, Button, Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CadastroScreen = () => {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = () => {
    // Implement your sign up logic here
    console.log('Signing up...');
  };

  const isValidCPF = (cpf) => {
    // Implemente sua lógica de validação de CPF aqui
    // Este é um exemplo de uma função de validação de CPF simples, você pode substituir com uma implementação mais robusta
    const cpfRegex = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/;
    return cpfRegex.test(cpf);
  };

  const handleCpfChange = (text) => {
    setCpf(text);
    if (!isValidCPF(text)) {
      setError('CPF inválido');
    } else {
      setError('');
    }
  };


  return (
    <View style={styles.container}>
      
    <TextInput
      label="Nome:"
      value={name}
      onChangeText={text => setName(text)}
      style={styles.input}
      underlineColor="#7EA8CB"
      theme={{ colors: { primary: '#7EA8CB' } }}
      labelStyle={{
        color: '#fff',
        padding: 10
      }}
    />
    <TextInput
      label="CPF:"
      value={cpf}
      // onChangeText={text => setCpf(text)}
      onChangeText={handleCpfChange}
      style={styles.input}
      underlineColor="#7EA8CB"
      theme={{ colors: { primary: '#7EA8CB' } }}
      error={error.length > 0}
      type={'cpf'}

    />
    <TextInput
      label="E-mail:"
      value={email}
      onChangeText={text => setEmail(text)}
      style={styles.input}
      underlineColor="#7EA8CB"
      theme={{ colors: { primary: '#7EA8CB' } }}
    />
    <TextInput
      label="Senha:"
      secureTextEntry
      value={password}
      onChangeText={text => setPassword(text)}
      style={styles.input}
      underlineColor="#7EA8CB"
      theme={{ colors: { primary: '#7EA8CB' } }}
    />
    <Button
      mode="contained"
      onPress={handleSignUp}
      style={styles.button}
      labelStyle={styles.buttonLabel}
      theme={{ colors: { primary: '#7EA8CB' } }}
    >
      Cadastrar
    </Button>
  </View>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'center',
  width: '80%',
  alignSelf: 'center'
},
input: {
  marginBottom: 10,
  backgroundColor: 'transparent',
},
button: {
  marginTop: 20,
  borderRadius: 10,
  paddingVertical: 5,
},
buttonLabel: {
  color: 'white',
  fontWeight: 'bold',
  fontSize: 16,
},
});

export default CadastroScreen;
