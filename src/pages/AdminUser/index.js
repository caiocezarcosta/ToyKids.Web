import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import 'moment/locale/pt-br';
import AuthContext from '../../context/AuthContext';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

moment.locale('pt-br');

export default function AdminUser() {
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [reservas, setReservas] = useState([]);
  const { logout } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await logout();
      navigation.navigate('Login');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://10.0.2.2:5291/api/reservas/get-date?data=${moment(selectedDate).format('YYYY-MM-DD')}`);
        const data = await response.json();
        setReservas(data);
      } catch (error) {
        console.error('Erro ao buscar reservas:', error);
      }
    };

    fetchData();
  }, [selectedDate]);

  const handleDateChange = (event, date) => {
    setShowDatePicker(false);
    if (date) {
      setSelectedDate(date);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.reservaItem}>
      <Text style={styles.reservaTexto}>Horário: {item.horaReserva}</Text>
      <Text style={styles.reservaTexto}>Pessoas: {item.quantidadePessoas}</Text>
      {item.nomeEspacoFesta && (
        <Text style={styles.reservaTexto}>Espaço Festa: {item.nomeEspacoFesta}</Text>
      )}      
    </View>
  );

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.description}>
          <Text style={styles.titulo}>Reservas do dia:</Text>
          <TouchableOpacity style={styles.btnLogin} onPress={handleLogout}> 
            <AntDesign name="logout" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => setShowDatePicker(true)}>
          <Text style={styles.dataSelecionada}>{moment(selectedDate).format('LL')}</Text>
        </TouchableOpacity>
      </View>

      {showDatePicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
      <FlatList
        data={reservas}
        renderItem={renderItem}
        keyExtractor={(item) => item?.id?.toString() || `fallback-key-${Math.random()}`} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#26333B'
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  dataSelecionada: {
    fontSize: 18,
    marginBottom: 10,
    color: 'white',
  },
  reservaItem: {
    backgroundColor: '#FF5757',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  reservaTexto: {
    color: 'white',
    fontSize: 16,
  },
  description: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'flex-start'
  }
});

