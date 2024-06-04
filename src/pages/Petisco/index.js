import { StatusBar } from 'react-native';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

export default function Petiscos() {
    const navigation = useNavigation();

    const petiscos = [
        'FRANGO A PASSARINHO', 
        'ISCA DE FRANGO EMPANADO', 
        'BATATA FRITA', 
        'NUGGETS', 
        'PASTEL', 
        'MEDALHÃO'
    ];

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#26333B' barStyle="light-content" />

            <TouchableOpacity style={styles.btnHome} onPress={() => navigation.goBack()}>
                <AntDesign name="back" size={24} color="white" />
            </TouchableOpacity>

            <View style={styles.headerContainer}>
                <Text style={styles.titulo}>PETISCOS</Text>
            </View>

            <ScrollView contentContainerStyle={styles.menuContainer}>
                {petiscos.map((petisco, index) => (
                    <View key={index} style={styles.petiscoItem}>
                        <View style={styles.bullet} />
                        <Text style={styles.petiscoName}>{petisco}</Text>
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
    petiscoItem: {
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
    petiscoName: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
