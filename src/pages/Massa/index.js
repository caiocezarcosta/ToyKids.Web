import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Massa() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.btnBack} onPress={() => navigation.goBack()}>
                <AntDesign name="back" size={24} color="white" />
            </TouchableOpacity>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Massas</Text>
            </View>
            <ScrollView style={styles.menuCont}>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#26333B',
        paddingTop: 20,
    },
    btnBack: {
        position: 'absolute',
        top: 40,
        left: 20,
        zIndex: 1,
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontSize: 40,
        marginBottom: 20,
        textAlign: 'center',
        marginTop: 60,
    },
});
