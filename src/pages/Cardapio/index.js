import { StatusBar } from 'react-native';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

export default function Cardapio() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#26333B' barStyle="light-content" />

      <TouchableOpacity style={styles.btnHome} onPress={() => navigation.navigate('Menu')}>
        <Text style={styles.voltarButton}>
          <AntDesign name="back" size={24} color="white" />
        </Text>
      </TouchableOpacity>

      <Text style={styles.titulo}>CARDÁPIO</Text>

      <ScrollView contentContainerStyle={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Pizza')}>
          <Image source={require('../../assets/pizzas.png')} style={styles.menuImage} />
          <Text style={styles.menuText}>VER PIZZAS</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Massa')}>
          <Image source={require('../../assets/massas.png')} style={styles.menuImage} />
          <Text style={styles.menuText}>VER MASSAS</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Petisco')}>
          <Image source={require('../../assets/isca.jpg')} style={styles.menuImage} />
          <Text style={styles.menuText}>VER PETISCOS</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Doce')}>
          <Image source={require('../../assets/doces.png')} style={styles.menuImage} />
          <Text style={styles.menuText}>VER DOCES</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Bebida')}>
          <Image source={require('../../assets/bebidas.jpg')} style={styles.menuImage} />
          <Text style={styles.menuText}>VER BEBIDAS</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  voltarButton: {
    color: 'white',
    fontSize: 12,
  },
  container: {
    flex: 1,
    backgroundColor: '#26333B',
    padding: 20,
    justifyContent: 'center',
  },
  btnHome: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
  titulo: {
    color: 'white',
    fontSize: 40,
    marginBottom: 20,
    textAlign: 'center',
    marginTop: 60,
  },
  menuContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  menuItem: {
    width: '90%',
    backgroundColor: '#FF5757',
    padding: 15,
    marginBottom: 20,
    alignItems: 'center',
  },
  menuImage: {
    width: '100%',
    height: 150,
  },
  menuText: {
    color: 'white',
    marginTop: 10,
    textAlign: 'center',
    fontSize: 18,
  },
});
