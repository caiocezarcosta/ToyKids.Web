import { StatusBar } from 'react-native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable';

import { useNavigation} from '@react-navigation/native'
import SQLite from 'react-native-sqlite-storage'

const db = SQLite.openDatabase(

  {
    name : 'mainDB',
    location: 'default'
  }
);
export default function Login() {
  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');

  const cadastro = () => {
    //Fazer chamada no back-end para cadastro.
    //Descobrir como limito CPF para apenas números
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#26333B' barStyle="light-content" />

      <Animatable.Image
      animation="fadeInDown"
      source={require('../../assets/logo.png')}
      style={{width:400,height:400}} 
      />


      <TextInput required="required" maxLength={11} 
      placeholder="Seu CPF..." style={styles.TextInput} 
      onChange={text=>setCpf(text)} /> 
      <TextInput required="required" 
      secureTextEntry={true} placeholder="Sua senha..." 
      style={styles.TextInput} 
      onChange={text=>setSenha(text)} />

      <TouchableOpacity 
        style={styles.btnLogin} 
        onPress={ () => navigation.navigate('Menu')}
      > 
        <Text style={{color:'white', textAlign:'center'}}>Login</Text>
      </TouchableOpacity>
      
      <View style={styles.bottomContainer}>
        <Text 
        style={styles.goReg}>Não tem uma conta?</Text>

        <TouchableOpacity
        style={styles.goRegButton}
        onPress={ () => navigation.navigate('Register')}
        >
          <Text style={styles.goRegText}>Cadastre-se!</Text>
        </TouchableOpacity>
        </View>
    </View> 

     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#26333B',
    alignItems: 'center',
    justifyContent: 'center',
    padding:20
  },
  TextInput:{
    width:'100%',
    height:40,
    backgroundColor:'white',
    borderRadius:20,
    paddingLeft:10,
    marginBottom:10,
  },
  btnLogin:{
    width:'100%',
    height:40,
    backgroundColor:'#FF5757',
    borderRadius:20,
    justifyContent:'center'
  },
  bottomContainer:{
    flexDirection:'row',
    top:'15%'
  },
  goReg:{
    color: '#ffffff',
    
  },
  goRegText:{
    color: '#fff',
    fontWeight:'bold',
    marginLeft: 10
  }
});
