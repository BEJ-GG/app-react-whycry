
// Importações necessárias
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importa o ícone FontAwesome

const LoginScreen = () => {
  // Estados para armazenar os valores dos campos de entrada
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
      <Image
        source={require('../../../assets/testeLogo.png')}  // Substitua pelo caminho real para sua imagem
        style={styles.logo}
      /> 

      {/* Campo de entrada de Email */}
      <View style={styles.inputContainer}>
        {/* Ícone de envelope */}
        <View style={styles.inputIcon}>
        <Icon name="envelope" size={20} color="#7EA8CB" style={styles.icon} />
        {/* Campo de entrada de texto para o Email */}
        </View>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={"#7EA8CB"}
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
      </View>

      {/* Campo de entrada de Senha */}
      <View style={styles.inputContainer}>
        {/* Ícone de cadeado */}
        <View style={styles.inputIcon}>
        <Icon name="lock" size={20} color="#7EA8CB" style={styles.iconCadeado} />
        {/* Campo de entrada de texto para a Senha */}
        </View>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor={"#7EA8CB"}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
      </View>

      {/* Botão de Login */}
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
        source={require('../../../assets/logoGoogle.png')}  // Substitua pelo caminho real para sua imagem
        style={styles.logoGoogle}
      /> 
        <Text style={styles.buttonText}>Login com Google</Text>
      </TouchableOpacity>
    </View>
  );
};

// Estilos para os componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor:'#DAE6F0'
  },
  // Estilo para a logo
  logo: {
    width: '110%', // Ajuste a largura conforme necessário
    height: 200, // Ajuste a altura conforme necessário
    marginBottom: 16,
  },
  // Estilo para o contêiner do campo de entrada (Email e Senha)
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#7EA8CB',
    marginBottom: 12,
    width: '80%',  // Garante que os inputs ocupem a largura total
  },
  inputIcon:{
    width:'10%',
  },
  // Estilo para o ícone
  icon: {
    marginLeft:2
  },
  iconCadeado:{
    marginLeft:6
  },
  // Estilo para o campo de entrada de texto
  input: {
    height: 40,
    width: '100%',
    marginLeft: 8,
    color:'#7EA8CB'
  },
  // Estilo para o botão de Login com tamanho e bordas ajustadas
  buttonEntrar: {
    backgroundColor: '#7EA8CB',
    padding: 15,
    borderRadius: 10,
    width: '80%', // Ocupa a largura total do componente pai
    marginTop: 20, // Adiciona um pouco de espaço acima do botão
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
  // Estilo para o texto dentro do botão de Login
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  // Estilo para o contêiner da divisória
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
});

export default LoginScreen;
