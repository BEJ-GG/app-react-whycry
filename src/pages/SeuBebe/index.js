import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { Picker } from '@react-native-picker/picker';

const CadastroScreen = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [nomeError, setNomeError] = useState('');
  const [cpfError, setCpfError] = useState('');
  const [dataNascError, setDataNascError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordConfirmaError, setPasswordConfirmaError] = useState('');
  const [isTypingPassword, setIsTypingPassword] = useState(false);
  const [isTypingPasswordConfirma, setIsTypingPasswordConfirma] = useState(false);
  const [isTypingEmail, setIsTypingEmail] = useState(false);
  const [isTypingNome, setIsTypingNome] = useState(false);
  const [isTypingCpf, setIsTypingCpf] = useState(false);
  const [isTypingDataNasc, setIsTypingDataNasc] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmaPassword, setConfirmaPassword] = useState('');
  const [cpf, setCpf] = useState('');
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [dataNasc, setdataNasc] = useState('');
  const [selectedValue, setSelectedValue] = useState(null);

  const validacoes = () => {
    validateEmail();
    validateNome();
    validateCpf();
    validateDate();
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Endereço de e-mail inválido');
    } else {
      setEmailError('');
    }
  };

  const validateNome = () => {
    if (nome.trim().length < 3) {
      setNomeError('O nome deve conter no mínimo 3 caracteres');
    } else {
      setNomeError('');
    }
  };

  const validatePassword = () => {
    if (password != confirmaPassword ) {
      setPasswordConfirmaError('Ops! Por favor, tente novamente.');
    }
    else {
      setPasswordConfirmaError('');
    }

    if(password.trim().length === 0){
      setPasswordError('A senha deve ter mais de 8');
    }else{
      setPasswordError('');
    }
  };


  const validateConfirmarPassword = () => {
    if (password != confirmaPassword ) {
      setPasswordConfirmaError('Ops! Por favor, tente novamente.');
    }
    else {
      setPasswordConfirmaError('');
    }
  };


  const validateCpf = () => {
    if (cpf.length !== 11 || /^(.)\1+$/.test(cpf)) {
      setCpfError('CPF inválido');
    } else {
      setCpfError('');
    }
  };

  const validateDate = () => {
    const hoje = new Date();
    const dataNascDate = new Date(dataNasc);
    const diffAnos = hoje.getFullYear() - dataNascDate.getFullYear();
    const diffMeses = hoje.getMonth() - dataNascDate.getMonth();
    const diffDias = hoje.getDate() - dataNascDate.getDate();
    const isValidDate = /^([0-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/.test(dataNasc);

    if (diffAnos > 18 || (diffAnos === 18 && (diffMeses > 0 || (diffMeses === 0 && diffDias >= 0)))) {
      setDataNascError('');
    } else {
      setDataNascError('Você deve ser maior de 18 anos');
    }


    if(isValidDate){
      setDataNascError('');
    }else {
      setDataNascError('Data inválida');
    }
    
  };

  const handleTextInputPassword = (text) => {
    setPassword(text);
    if (!isTypingPassword) {
      setIsTypingPassword(true);
      setPasswordError('');
    }
  };

  const handleTextInputPasswordConfirma = (text) => {
    setConfirmaPassword(text);
    if (!isTypingPasswordConfirma) {
      setIsTypingPasswordConfirma(true);
      setPasswordConfirmaError('');
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

  const handleTextInputdataNasc = (text) => {
    setdataNasc(text);
    if (!isTypingDataNasc) {
      setIsTypingDataNasc(true);
      setDataNascError('');
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.aliCadaUm}>
          {/* TextInput Nome  */}
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

          {/* TextInput CPF  */}
          <Text>Cpf</Text>
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

          {/* TextInput Telefone  */}
          <Text>Telefone</Text>
          <TextInputMask
            style={styles.textInput}
            value={telefone}
            onChangeText={setTelefone}
            selectionColor="#7EA8CB"
            type={'cel-phone'}
            maxLength={15}
            options={{
              withDDD: true,
              dddMask: '(99) ',
            }}
          />
          <Text></Text>

          {/* Titulos nascimento e genero  */}
          <View style={styles.viewTituloDuasColunas}>
            <View style={styles.viewPrimeiraColuna}>
              <Text>Nascimento</Text>
            </View>
            <View style={styles.viewSegundaColuna}>
              <Text>Genêro</Text>
            </View>
          </View>


          {/* TextInput Data nascimento  */}
          <View style={styles.viewDuasColunas}>
            <View style={styles.viewPrimeiraColuna}>
              <TextInputMask
                style={styles.textInput}
                value={dataNasc}
                onChangeText={handleTextInputdataNasc}
                onBlur={validateDate}
                selectionColor="#7EA8CB"
                type={'datetime'}
                options={{
                  format: 'DD/MM/YYYY',
                }}
                maxLength={10}
              />
              <Text style={styles.erroPassword}>{dataNascError}</Text>
            </View>

          {/* TextInput Genero  */}
            <View style={styles.viewSegundaColuna}>
              <View style={styles.dropInput}>
                <Picker
                  selectedValue={selectedValue}
                  onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                  style={styles.textPicker}
                >
                  <Picker.Item label="Selecione uma opção" value="" />
                  <Picker.Item label="Masculino" value="masculino" />
                  <Picker.Item label="Feminino" value="feminino" />
                  <Picker.Item label="Outros" value="outros" />
                </Picker>
              </View>
              <Text></Text>
            </View>
          </View>

          {/* TextInput Email  */}
          <Text>Email</Text>
          <TextInput
            style={styles.textInput}
            value={email}
            onChangeText={handleTextInputEmail}
            onBlur={validateEmail}
            selectionColor="#7EA8CB"
          />
          <Text style={styles.erroEmail}>{emailError}</Text>

          {/* Titulos senha e confirmar senha  */}
          <View style={styles.viewTituloDuasColunas}>
            <View style={styles.viewPrimeiraColuna}>
              <Text>Senha</Text>
            </View>
            <View style={styles.viewSegundaColuna}>
              <Text>Confirmar Senha</Text>
            </View>
          </View>

          {/* TextInput Senha  */}
          <View style={styles.viewDuasColunas}>
            <View style={styles.viewPrimeiraColuna}>
              <TextInput
                style={styles.textInput}
                value={password}
                onChangeText={handleTextInputPassword}
                onBlur={validatePassword}
                secureTextEntry
                selectionColor="#7EA8CB"
              />
              <Text style={styles.erroDataNasc}>{passwordError}</Text>
            </View>

            {/* TextInput Confirmar senha  */}
            <View style={styles.viewSegundaColuna}>
              <TextInput
                style={styles.textInput}
                value={confirmaPassword}
                onChangeText={handleTextInputPasswordConfirma}
                onBlur={validateConfirmarPassword}
                secureTextEntry
                selectionColor="#7EA8CB"
              />
              <Text style={styles.erroDataNasc}>{passwordConfirmaError}</Text>
            </View>
          </View>
        </View>
        <View style={styles.containerBotoes}>
          <TouchableOpacity style={styles.buttonEntrar} onPress={validacoes}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#DAE6F0',
    paddingVertical: 20,
  },
  aliCadaUm: {
    flexDirection: 'column',
    marginHorizontal: 20,
  },
  textInput: {
    borderWidth: 3.5,
    borderColor: '#b5cde1',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: 50,
    marginTop: 10,
    marginBottom: 5,
    paddingLeft: 10,
    fontSize: 15,
  },
  containerBotoes: {
    alignItems: 'center',
  },
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
viewTituloDuasColunas:{
  flexDirection: 'row',
  justifyContent:'space-between'
},
viewDuasColunas:{ 
  flexDirection: 'row',
  width: '100%',
  justifyContent:'space-between'
},
viewPrimeiraColuna:{
  width:'48%'
},
viewSegundaColuna:{
  width:'48%'
},
dropInput:{
  borderWidth:3.5,
  borderColor:'#b5cde1',
  borderTopLeftRadius: 0,
  borderTopRightRadius: 20,
  borderBottomLeftRadius: 20,
  borderBottomRightRadius: 20,
  height: 50,
  marginTop: 10,
  marginBottom: 5,
  fontSize:15,
justifyContent:'center'
},


});

export default CadastroScreen;
