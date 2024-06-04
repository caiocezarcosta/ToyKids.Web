import { StatusBar } from 'react-native';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

export default function Doces() {
    const navigation = useNavigation();

    const doces = [
        'OREO', 
        'OVOMALTINE', 
        'MORANGO COM CHOCOLATE', 
        'BANANA COM CANELA', 
        'BANANA NEVADA', 
        'BEIJINHO', 
        'PRESTÍGIO', 
        'BANANA COM CHOCOLATE', 
        'M&M', 
        'CHOCONINHO', 
        'LEITE NINHO', 
        'PAÇOCA COM CHOCOLATE', 
        'AMENDOIN'
    ];

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#26333B' barStyle="light-content" />

            <TouchableOpacity style={styles.btnHome} onPress={() => navigation.goBack()}>
                <AntDesign name="back" size={24} color="white" />
            </TouchableOpacity>

            <View style={styles.headerContainer}>
                <Text style={styles.titulo}>DOCES</Text>
            </View>

            <ScrollView contentContainerStyle={styles.menuContainer}>
                {doces.map((doce, index) => (
                    <View key={index} style={styles.doceItem}>
                        <View style={styles.bullet} />
                        <Text style={styles.doceName}>{doce}</Text>
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
    doceItem: {
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
    doceName: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
