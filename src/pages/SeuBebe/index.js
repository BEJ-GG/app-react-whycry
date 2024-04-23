import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

const CadastroScreen = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [nomeError, setNomeError] = useState('');
  const [cpfError, setCpfError] = useState('');
  const [isTypingEmail, setIsTypingEmail] = useState(false);
  const [isTypingNome, setIsTypingNome] = useState(false);
  const [isTypingCpf, setIsTypingCpf] = useState(false);
  const [password, setPassword] = useState('');
  const [cpf, setCpf] = useState('');
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');



  const validacoes = () => {
    validateEmail()
    validateNome()
    validateCpf()
  }

  const validateEmail = () => {
    // Expressão regular para validar o formato de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Endereço de e-mail inválido');
    } else {
      setEmailError('');
    }
  };

  const validateNome = () => {
    if (email.trim < 3) {
      setNomeError('O nome deve conter no mínimo 3 caracteres');
    } else {
      setNomeError('');
    } 
  };

  const validateCpf = () => {
    // Expressão regular para validar o formato de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Endereço de e-mail inválido');
    } else {
      setEmailError('');
    }
  };

  const handleTextInputEmail = (text) => {
    setEmail(text);
    if (!isTypingEmail) {
      setIsTypingEmail(true);
      setEmailError('');
    }
  };

  const handleTextInputNome = (text) => {
    setNome(text);
    if (!isTypingNome) {
      setIsTypingNome(true);
      setNomeError('');
    }
  };

  const handleTextInputCpf = (text) => {
    setCpf(text);
    if (!isTypingCpf) {
      setIsTypingCpf(true);
      setCpfError('');
    }
  };


  return (
    <View style={styles.container}>
      
      <View style={styles.aliCadaUm}>
      <Text>Nome</Text>
        <TextInput
          style={styles.textInput}
          value={nome}
          onChangeText={handleTextInputNome}
          onBlur={validateNome}
          selectionColor="#7EA8CB"
          caretColor="#7EA8CB"
        />
        <Text style={styles.erroNome}>{nomeError}</Text>

      <View style={styles.viewTituloCpfTel}>
          <View style={styles.viewCpf}>
            <Text>Cpf</Text>
          </View>
          <View style={styles.viewTelefone}>
            <Text>Telefone</Text>
            </View>
      </View>

        {/* Verificar depois no back se já existe*/}
        <View style={styles.viewCpfTelefone}>
          <View style={styles.viewCpf}> 
        <TextInputMask
          style={styles.textInput}
          value={cpf}
          onChangeText={handleTextInputCpf}
          onBlur={validateCpf}
          selectionColor="#7EA8CB"
          type={'cpf'}
          maxLength={14}
        />
        <Text style={styles.erroCpf}>{cpfError}</Text>
        </View>
        <View style={styles.viewTelefone}>
        <TextInputMask
          style={styles.textInput}
          value={telefone}
          onChangeText={setTelefone}
          selectionColor="#7EA8CB"
          type={'cel-phone'}
          maxLength={15}
          options={{
            withDDD: true, // Inclui o DDD no formato (opcional)
            dddMask: '(99) ', // Máscara para o DDD (opcional)
          }}
        />
        <Text></Text>
        </View>
        </View>


        {/* Verificar depois no back se o email já está cadastrado */}
        <Text>Email</Text>
        <TextInput
          style={styles.textInput}
          value={email}
          onChangeText={handleTextInputEmail}
          onBlur={validateEmail} // Executar a validação quando o campo perder o foco
          selectionColor="#7EA8CB"
        />
        <Text style={styles.erroEmail}>{emailError}</Text>

        <Text>Senha</Text>
        <TextInput
          style={styles.textInput}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          selectionColor="#7EA8CB"
        />
      </View>
      <View style={styles.containerBotoes}>
      <TouchableOpacity style={styles.buttonEntrar} onPress={validacoes}>
      <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
</View>
  </View>
);
};

const styles = StyleSheet.create({
container: {
  flex:1,
  justifyContent:'center',
  backgroundColor:'#DAE6F0',
},
aliCadaUm: {
  flexDirection: 'column',
  marginHorizontal: 20,
},
textInput: {
  backgroundColor: '#b5cde1',
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
erroEmail:{
  marginBottom:5
},
viewTituloCpfTel:{
  flexDirection: 'row',
  justifyContent:'space-between'
},
viewCpfTelefone:{ 
  flexDirection: 'row',
  width: '100%',
  justifyContent:'space-between'
},
viewCpf:{
  width:'48%'
},
viewTelefone:{
  width:'48%'
}

});

export default CadastroScreen;
