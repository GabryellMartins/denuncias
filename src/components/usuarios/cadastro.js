import React, { useState } from 'react';
import { View, Text, TextInput,Image, TouchableOpacity, StyleSheet } from 'react-native';

import arcoires from '../../../assets/arcoires.png';

const CadastroUsuario = () => {
  const [nome, setnome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [telefone, settelefone] = useState('');
  const [cpf, setcpf] = useState('');


  const handleLogin = () => {
    
    console.log('Login pressed:', email, password);
  };
   const handleForgotPassword = () => {
    
    console.log('Forgot password pressed');
  };

  const handleSignUp = () => {
    
    console.log('Sign up pressed');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
       <Image  
        source={arcoires}
        style={styles.image}
        />
        <Text style={styles.topBarText}>Denuncias Arco-Iris</Text>
         <Text style={styles.topBarText}>📱(14)3477-1128</Text>
      </View>

       <View style={styles.headerBG}>
      <Text style={styles.header}>CADASTRO</Text>
    </View>
      
 <View style={styles.loginContainer}>
        <TextInput
          placeholder="Nome Completo"
          onChangeText={text => setnome(text)}
          value={nome}
          style={styles.input}
        />
         <TextInput
          placeholder="Email"
          onChangeText={text => setEmail(text)}
          value={email}
          style={styles.input}
        />
         <TextInput
          placeholder="Senha"
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry
          style={styles.input}
        />
       <TextInput
          placeholder="Telefone"
          onChangeText={text => settelefone(text)}
          value={telefone}
          style={styles.input}
        />
       <TextInput
          placeholder="CPF"
          onChangeText={text => setcpf(text)}
          value={cpf}
          style={styles.input}
        />
      
      
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.loginButton}>
          <Text style={styles.loginButtonText}>CADASTRAR</Text>
        </TouchableOpacity>

       </View>
      </View>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#eee'
  },
  topBar: {
    backgroundColor: '#0d5434',
    padding: 15,
    alignItems: 'center',
     marginTop: 35,
  },
  topBarText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '60%',
    height: 40,
    borderColor: '#00B912',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    opacity:10,
  },
  loginButton: {
    backgroundColor: '#0d5434',
    padding: 20,
    borderRadius: 40,
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
   image: {
    width: 70,
    height: 60,  
    
  },
   header: {
    color: 'green',
    backgroundColor: '#d6d2c4',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    padding:20,
   },
});

export default CadastroUsuario;
