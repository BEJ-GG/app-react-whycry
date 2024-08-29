
// Importações necessárias
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importa o ícone FontAwesome

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Função para lidar com o envio do formulário
  const handleLogin = () => {
    // Lógica de autenticação aqui
    console.log('Email:', email);
    console.log('Password:', password);
    // Adicione aqui a lógica de autenticação, por exemplo, chamada de API, verificação de credenciais, etc.
  };

  // Função para lidar com o login usando o Google
  const handleGoogleLogin = () => {
    // Lógica de login com o Google aqui
    console.log('Login com Google');
    // Adicione aqui a lógica de autenticação com o Google, por exemplo, integração com API do Google, etc.
  };

  return (
    <View style={styles.container}>
      {/* Logo no lugar do título */}
      <View style={styles.tesLg}>
      <Image
        source={require('../../assets/logWhy.png')}  // Substitua pelo caminho real para sua imagem
        style={styles.logo}
      /> 
      </View>
      {/* Campo de entrada de Email */}
      <View style={styles.aliCadaUm}>
            <Text>Email</Text>
            <TextInput style={styles.textInput} value={email}  onChangeText={setEmail} selectionColor="#7EA8CB"/>
          </View>

      {/* Campo de entrada de Senha */}

          <View style={styles.aliCada}>
            <Text>Senha</Text>
            <TextInput
              style={styles.textInput}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              selectionColor="#7EA8CB"
            />            
            <Text>Esqueci minha senha</Text>

          </View>

     

      {/* Botão de Login */}
      <View style={styles.containerBotoes}>
      <TouchableOpacity style={styles.buttonEntrar} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      {/* Divisória com texto no meio */}
      <View style={styles.dividerContainer}>
        <View style={styles.dividerLine} />
        <Text style={styles.dividerText}>OU</Text>
        <View style={styles.dividerLine} />
      </View>

      {/* Botão de Login com o Google reutilizando o estilo */}
      <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
      <Image
        source={require('../../assets/logoGoogle.png')}  // Substitua pelo caminho real para sua imagem
        style={styles.logoGoogle}
      /> 
        <Text style={styles.buttonText}>Login com Google</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

// Estilos para os componentes
const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    backgroundColor:'#DAE6F0',
  },
  tesLg:{
    alignItems:'center'
  },
  logo: {
    // width: '40%', // Ajuste a largura conforme necessário
    // height: '35%', // Ajuste a altura conforme necessário
    width: '33%', // Ajuste a largura conforme necessário
    height: 200
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
  erroEmail:{
    marginLeft:2
  },
  textInput: {
    borderWidth:3.5,
    borderColor:'#b5cde1',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: 50,
    marginTop: 10,
    marginBottom: 5,
    paddingLeft: 10,
    fontSize:15
  },
  containerBotoes:{
    alignItems:'center'
  },
  // Estilo para o botão de Login com tamanho e bordas ajustadas
  buttonEntrar: {
    backgroundColor: '#7EA8CB',
    padding: 15,
    borderRadius: 10,
    width: '80%', // Ocupa a largura total do componente pai
    marginTop: 20, // Adiciona um pouco de espaço acima do botão
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
   marginTop: 20,
   width:'75%'
  },
    // Estilo para a linha da divisória
    dividerLine: {
      flex: 1,
      height: 1,
      backgroundColor: 'gray',
    },
    // Estilo para o texto da divisória
    dividerText: {
      color: 'gray',
      marginHorizontal: 10,
    },
  
  // Estilo para o botão de Login com o Google
  googleButton: {
    backgroundColor: '#7EA8CB',
    padding: 15,
    borderRadius: 10,
    width: '80%',
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'blue',
  },
  logoGoogle:{
width:'14%',
height:'100%'
  },


});

export default LoginScreen;
