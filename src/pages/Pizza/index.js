import { StatusBar } from 'react-native';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

export default function PizzasDaCasa() {
    const navigation = useNavigation();

    const saboresPizza = [
        'FRANGO COM CATUPIRY', 'FRANGO COM CHEDDAR', 'FRANGO CAIPIRA', 'PORTUGUESA', 'CALABRESA',
        'MUSSARELA', 'MARGUERITA', 'NAPOLITANO', 'AMERICANA', 'BACON', 'CALABACON', 'BACON COM CHEDDAR',
        'CALABRESA ESPECIAL', 'CALABRESA ROMANA', 'CALABRESA ACEBOLADA', 'LOMBO ESPECIAL', 'CARNE SECA',
        'CARNE SECA ESPECIAL', 'PEITO DE PERU', 'CAMARÃO', 'CAMARÃO ESPECIAL', 'PALMITO', 'ATUM', 'ALHO',
        'CALABRESA COM CHEDDAR', '4 QUEIJOS', '5 QUEIJOS', 'PROVOLONE', 'PAULISTA'
    ];

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#26333B' barStyle="light-content" />

            <TouchableOpacity style={styles.btnHome} onPress={() => navigation.goBack()}>
                <AntDesign name="back" size={24} color="white" />
            </TouchableOpacity>

            <View style={styles.headerContainer}>
                <Text style={styles.titulo}>PIZZA'S DA CASA</Text>
            </View>

            <ScrollView contentContainerStyle={styles.menuContainer}>
                {saboresPizza.map((sabor, index) => (
                    <View key={index} style={styles.pizzaItem}>
                        <View style={styles.bullet} />
                        <Text style={styles.pizzaFlavor}>{sabor}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#26333B',
        padding: 20,
        justifyContent: 'center',
    },
    btnHome: {
        position: 'absolute',
        top: 30,
        left: 20,
        zIndex: 1,
    },
    headerContainer: {
        backgroundColor: '#FF5757',
        borderRadius: 10,
        padding: 5,
        paddingHorizontal: 35,
        alignSelf: 'center',
        marginTop: 70,
        marginBottom: 20,
    },
    titulo: {
        color: 'white',
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    menuContainer: {
        paddingBottom: 40,
        alignItems: 'center',
        marginTop: 20,
    },
    pizzaItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    bullet: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'white',
        marginRight: 10,
    },
    pizzaFlavor: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
