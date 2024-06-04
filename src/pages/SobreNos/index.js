import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';

const { width, height } = Dimensions.get('window');

export default function Sobrenos() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#26333B' barStyle="light-content" />

      <TouchableOpacity style={styles.btnHome} onPress={() => navigation.navigate('Menu')}>
        <AntDesign name="back" size={24} color="white" />
      </TouchableOpacity>
      
      <Animatable.Image
        animation="fadeInDown"
        source={require('../../assets/local.jpg')}
        style={styles.image}
      />

      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Conheça a Toy Kids, onde a magia da infância encontra o sabor da diversão! Rodízio completo de pizzas, massas e petiscos com uma estrutura incrível, com brinquedos e animações disponíveis!
        </Text>
        <Text style={styles.text}>
          Nossa missão é proporcionar momentos inesquecíveis para você e sua família, combinando o melhor da gastronomia com uma atmosfera vibrante e lúdica de um parque temático. Aqui, cada mordida é uma aventura e cada brinquedo uma nova experiência!
        </Text>
        <Text style={styles.text}>
          Oferecemos não apenas uma refeição, mas uma experiência completa: o rodízio de pizzas, massas e petiscos é acompanhado de refil de bebidas, para garantir que a experiência completa. Além disso, a entrada em todos os brinquedos está incluída!
        </Text>
        <Text style={styles.text}>
          Venha nos visitar e faça parte dessa jornada deliciosa e emocionante! Estamos ansiosos para recebê-lo em nossa casa, onde a alegria é o ingrediente principal.
        </Text>
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
    padding: 20,
    paddingTop: 60, 
  },
  btnHome: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1
  },
  image: {
    width: width * 0.9, 
    height: (width * 0.8) * (3 / 4), 
    marginBottom: 20,
    marginTop: 20,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
  },
  textContainer: {
    backgroundColor: '#26333B', 
    padding: 20,
    borderRadius: 10,
    width: '100%',
    marginTop: 5, 
  },
  text: {
    color: '#FFFFFF', 
    fontSize: 16, 
    marginBottom: 12,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});