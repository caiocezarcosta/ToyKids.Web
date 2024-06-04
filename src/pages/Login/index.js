import React from 'react';
import { StatusBar, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';

export default function Login() {
  const navigation = useNavigation();
  const { control, handleSubmit, reset } = useForm();

  const login = (data) => {
    const { cpf, senha } = data;

    // Pra logar
    if (cpf === '12345678901' && senha === '1') {
      Alert.alert('Sucesso', 'Login realizado com sucesso!');
      reset();
      navigation.navigate('Menu');
    } else {
      Alert.alert('Erro', 'CPF ou senha incorretos.');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#26333B' barStyle="light-content" />

      <Animatable.Image
        animation="fadeInDown"
        source={require('../../assets/logo.png')}
        style={{ width: 400, height: 400 }}
      />

      <Controller
        control={control}
        name="cpf"
        defaultValue=""
        rules={{ required: true, maxLength: 11, pattern: /^[0-9]*$/ }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Seu CPF..."
            style={styles.TextInput}
            onBlur={onBlur}
            onChangeText={text => onChange(text.replace(/[^0-9]/g, ''))}
            value={value}
            maxLength={11}
            keyboardType="numeric"
          />
        )}
      />

      <Controller
        control={control}
        name="senha"
        defaultValue=""
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Sua senha..."
            style={styles.TextInput}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry
          />
        )}
      />

      <TouchableOpacity style={styles.btnLogin} onPress={handleSubmit(login)}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Login</Text>
      </TouchableOpacity>

      <View style={styles.bottomContainer}>
        <Text style={styles.goReg}>Não tem uma conta?</Text>
        <TouchableOpacity style={styles.goRegButton} onPress={() => navigation.navigate('Register')}>
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
    padding: 20
  },
  TextInput: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingLeft: 10,
    marginBottom: 10,
  },
  btnLogin: {
    width: '100%',
    height: 40,
    backgroundColor: '#FF5757',
    borderRadius: 20,
    justifyContent: 'center'
  },
  bottomContainer: {
    flexDirection: 'row',
    top: '15%'
  },
  goReg: {
    color: '#ffffff',
  },
  goRegText: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10
  }
});
