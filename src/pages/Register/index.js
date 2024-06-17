import React from 'react';
import { StatusBar, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';

export default function Register() {
  const navigation = useNavigation();
  const { control, handleSubmit, reset } = useForm();

  const cadastro = async (data) => {
    const { nome, email, cpf, senha } = data;
    console.log(data);

    const url = `http://10.0.2.2:5291/api/usuario`;

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        })

        console.log(response);

        if (response.ok) {
          Alert.alert('Sucesso', 'Usuário criado com sucesso!');
          reset();
          navigation.navigate('Login');
        } else {
          Alert.alert('Erro', 'Não foi possível criar o usuário.');
        }
      } catch (error) {
        console.error(error);
        Alert.alert('Erro', 'Ocorreu um erro. Por favor, tente novamente mais tarde.');
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
        name="nome"
        defaultValue=""
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Seu nome..."
            style={styles.TextInput}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />

      <Controller
        control={control}
        name="email"
        defaultValue=""
        rules={{ required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Seu e-mail..."
            style={styles.TextInput}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            keyboardType="email-address"
          />
        )}
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
        rules={{ required: true, minLength: 6 }}
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

      <TouchableOpacity style={styles.btnCadastro} onPress={handleSubmit(cadastro)}>
        <Text style={{ color: 'white', textAlign: 'center' }}>CADASTRAR!</Text>
      </TouchableOpacity>

      <View style={styles.bottomContainer}>
        <Text style={styles.goLog}>Já tem uma conta?</Text>
        <TouchableOpacity style={styles.goLogButton} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.goLogText}>   Entre Agora!</Text>
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
  btnCadastro: {
    width: '100%',
    height: 40,
    backgroundColor: '#FF5757',
    borderRadius: 20,
    justifyContent: 'center'
  },
  bottomContainer: {
    flexDirection: 'row',
    top: '10%'
  },
  goLog: {
    color: '#ffffff'
  },
  goLogText: {
    color: '#ffffff',
    fontWeight: 'bold',
  }
});
