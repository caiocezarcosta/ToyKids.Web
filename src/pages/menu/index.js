import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Menu() {
    const navigation = useNavigation();

    return (
        <View style={styles.menu}>
            <TouchableOpacity 
                style={styles.menuItem} 
                onPress={() => navigation.navigate('Cardapio')}
            >
                <Text>Cardapio</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.menuItem} 
                onPress={() => navigation.navigate('Agendamento')}
            >
                <Text>Agendamento</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.menuItem} 
                onPress={() => navigation.navigate('Promocoes')}
            >
                <Text>Promoções</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.menuItem} 
                onPress={() => navigation.navigate('Localizacao')}
            >
                <Text>Localização</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.menuItem} 
                onPress={() => navigation.navigate('SobreNos')}
            >
                <Text>Sobre Nós</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    menu: {
        backgroundColor: '#26333B',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuItem: {
        padding: 20,
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        width: '80%',
        alignItems: 'center',
    },
});
