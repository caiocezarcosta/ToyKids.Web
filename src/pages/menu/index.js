import { StatusBar } from 'react-native';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#26333B' barStyle="light-content" />

      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('Cardapio')}>
          <Text style={styles.menuButtonText}>CARDÁPIO</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('Agendar')}>
          <Text style={styles.menuButtonText}>AGENDAR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('Sobrenos')}>
          <Text style={styles.menuButtonText}>SOBRE NÓS</Text>
        </TouchableOpacity>
      </View>

      <Animatable.Image
        animation="slideInLeft"
        duration={900}
        source={require('../../assets/logo.png')}
        style={{ width: 400, height: 400 }}
      />

      <View style={styles.socialContainer}>
        <View style={styles.socialItem}>
          <Image source={require('../../assets/facebook.jpeg')} style={styles.socialIcon} />
          <Text style={styles.socialText}>PIZZATOYKIDS01</Text>
        </View>
        
        <View style={styles.socialItem}>
          <Image source={require('../../assets/whatsapp2.png')} style={styles.socialIcon} />
          <Text style={styles.socialText}>(21) 99555-4493</Text>
        </View>

        <View style={styles.socialItem}>
          <Image source={require('../../assets/instagram2.png')} style={styles.socialIcon} />
          <Text style={styles.socialText}>@PIZZATOYKIDS01</Text>
        </View>
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
  },
  welcomeText: {
    color: 'white',
    fontSize: 14,
    position: 'absolute',
    top: 20,
    left: 10,
  },
  btnLogOut: {
    position: 'absolute',
    right: 10,
    top: 20,
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: -20,
    marginBottom: 20,
  },
  menuButton: {
    backgroundColor: '#FF5757',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  menuButtonText: {
    color: 'white',
    fontSize: 16,
  },
  profileImage: {
    width: 100,
    height: 100,
    marginBottom: 40,
  },
  socialContainer: {
    alignItems: 'center',
  },
  socialItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  socialIcon: {
    width: 60,
    height: 60,
    borderRadius: 40,
    marginRight: 15,
  },
  socialText: {
    color: 'white',
    fontSize: 34,
    marginVertical: 5,
    fontWeight: 'bold'
  },
});
