import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { Picker } from '@react-native-picker/picker';
import { auth } from '../../firebaseConfig';

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

  const createUser = async  () => {
    let erroValidacao = true;
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      console.log('Usuário cadastrado com sucesso!');
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error.message);
    }
    
    // validacoes();

    // if (erroValidacao) {
    // firebaseConfig
    // .auth()
    // .createUserWithEmailAndPassword(email, password)
    // .then((response) => {
    //   const uid = response.user.uid;
    //   const data = {
    //     id: uid,
    //     email,
    //     nome,
    //   };
    //   const usersRef = firebase.firestore().collection('UsuarioCadastro');
    //   usersRef
    //     .doc(uid)
    //     .set(data)
    //     .then(() => {
    //       console.log("Cadastro registrado");
    //       // navigation.navigate('Home', { user: data });
    //     })
    //     .catch((error) => {
    //       alert(error);
    //     });
    // })
    // .catch((error) => {
    //   alert(error);
    // });

  };

  const validacoes = () => {
    validateEmail();
    validateNome();
    validateCpf();
    validateDate();
    validatePassword();
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Endereço de e-mail inválido');
      erroValidacao = true;
    } else {
      setEmailError('');
    }
  };

  const validateNome = () => {
    if (nome.trim().length < 3) {
      setNomeError('O nome deve conter no mínimo 3 caracteres');
      erroValidacao = true;
    } else {
      setNomeError('');
    }
  };

  const validatePassword = () => {
    if (password !== confirmaPassword) {
      setPasswordConfirmaError('Ops! A senha está diferente');
      erroValidacao = true;
    } else {
      setPasswordConfirmaError('');
    }

    let errorMessages = [];
    if (password.trim().length < 8) {
      errorMessages.push('- A senha deve ter mais de 8 caracteres');
      erroValidacao = true;
    }
    if (!/[A-Z]/.test(password)) {
      errorMessages.push('- A senha deve conter pelo menos uma letra maiúscula');
      erroValidacao = true;
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      errorMessages.push('- A senha deve conter pelo menos um caracter especial');
      erroValidacao = true;
    }
    if (!/\d/.test(password)) {
      errorMessages.push('- A senha deve conter pelo menos um número');
      erroValidacao = true;
    }
    if (errorMessages.length > 0) {
      setPasswordError(errorMessages.join('\n'));
    } else {
      setPasswordError('');
    }
  };

  const validateCpf = () => {
    const cleanCpf = cpf.replace(/\D/g, '');
    if (cleanCpf.length !== 11 || /^(.)\1+$/.test(cleanCpf)) {
      setCpfError('CPF inválido');
      erroValidacao = true;
      return;
    }

    const cpfArray = cleanCpf.split('').map(Number);
    const calculateCheckDigit = (factor, max) => {
      let total = 0;
      for (let i = 0; i < max; i++) {
        total += cpfArray[i] * factor--;
      }
      const remainder = total % 11;
      return remainder < 2 ? 0 : 11 - remainder;
    };

    const firstCheckDigit = calculateCheckDigit(10, 9);
    const secondCheckDigit = calculateCheckDigit(11, 10);
    if (firstCheckDigit === cpfArray[9] && secondCheckDigit === cpfArray[10]) {
      setCpfError('');
    } else {
      setCpfError('CPF inválido');
      erroValidacao = true;
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
      erroValidacao = true;
    }

    if (isValidDate) {
      setDataNascError('');
    } else {
      setDataNascError('Data inválida');
      erroValidacao = true;
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
          <Text style={nomeError ? styles.msgErro : null}>{nomeError}</Text>

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
          <Text style={cpfError ? styles.msgErro : null}>{cpfError}</Text>

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
              <Text style={dataNascError ? styles.msgErro : null}>{dataNascError}</Text>
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
                  <Picker.Item label="Masculino" value="1" />
                  <Picker.Item label="Feminino" value="2" />
                  <Picker.Item label="Outros" value="3" />
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
          <Text style={emailError ? styles.msgErro : null}>{emailError}</Text>

          {/* TextInput Senha  */}
          <Text>Senha</Text>
              <TextInput
                style={styles.textInput}
                value={password}
                onChangeText={handleTextInputPassword}
                onBlur={validatePassword}
                secureTextEntry
                selectionColor="#7EA8CB"
              />
              <Text style={passwordError ? styles.msgErro : null}>{passwordError}</Text>           

            {/* TextInput Confirmar senha  */}
            <Text>Confirmar Senha</Text>
              <TextInput
                style={styles.textInput}
                value={confirmaPassword}
                onChangeText={handleTextInputPasswordConfirma}
                secureTextEntry
                selectionColor="#7EA8CB"
              />
              <Text style={passwordConfirmaError ? styles.msgErro : null}>{passwordConfirmaError}</Text>



            </View>
    
        <View style={styles.containerBotoes}>
          <TouchableOpacity style={styles.buttonEntrar} onPress={createUser}>
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
msgErro:{
  marginBottom:8,
  fontSize:13,
  color:'red'
}

});

export default CadastroScreen;
