import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import moment from 'moment';
import 'moment/locale/pt-br';
import AuthContext from '../../context/AuthContext';

moment.locale('pt-br');

export default function Booking() {
  const navigation = useNavigation();
  const { control, handleSubmit, reset } = useForm();
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [time, setTime] = useState("12:00");
  const [people, setPeople] = useState(1);
  const [party, setParty] = useState(false);
  const [space, setSpace] = useState("Espaço Princesas");

  const availableTimes = [
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
    "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
    "18:00", "18:30", "19:00", "19:30", "20:00"
  ];

  const spaces = ["Espaço Princesas", "Espaço Super-Heróis", "Espaço Desenho Animado"];

  const { usuario } = useContext(AuthContext);

  const onSubmit = async (data) => {
    const { nome, email, cpf } = data;
    const url = `http://10.0.2.2:5291/api/reservas`;

    const reserva = {
      dataReserva: date,
      horaReserva: time,
      quantidadePessoas: people,
      espacoFesta: party,
      nomeEspacoFesta: party ? space : null,
      usuarioId: usuario.usuarioId
    }

    console.log(reserva);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reserva)
      })

      console.log(response);

      if (response.ok) {
        Alert.alert('Sucesso', `Reserva feita para ${moment(date).format('LL')} às ${time}`);
        reset();
        navigation.navigate('Menu');
      } else {
        Alert.alert('Erro', 'Não foi possível realizar o agendamento.');
      }
    } catch {
      console.error(error);
      Alert.alert('Erro', 'Ocorreu um erro. Por favor, tente novamente mais tarde.');
    }     
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>AGENDAR</Text>

      <Text style={styles.label}>ESCOLHA UMA DATA:</Text>
      <TouchableOpacity onPress={() => setShowDatePicker(true)}>
        <TextInput
          style={styles.input}
          placeholder="Selecione uma data"
          value={moment(date).format('LL')} 
          editable={false}
        />
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          locale="pt-BR" 
          onChange={(event, selectedDate) => {
            setShowDatePicker(false);
            if (selectedDate) {
              setDate(selectedDate);
            }
          }}
        />
      )}

      <Text style={styles.label}>ESCOLHA UM HORÁRIO:</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={time}
          style={styles.picker}
          onValueChange={(itemValue) => setTime(itemValue)}
        >
          {availableTimes.map((time, index) => (
            <Picker.Item key={index} label={time} value={time} />
          ))}
        </Picker>
      </View>

      <Text style={styles.label}>QUANTIDADE DE PESSOAS:</Text>
      <TextInput
        style={styles.input}
        placeholder="Quantidade de pessoas"
        keyboardType="numeric"
        value={String(people)}
        onChangeText={(text) => {
          const num = parseInt(text, 10);
          if (!isNaN(num) && num > 0 && num <= 50) { 
            setPeople(num);
          } else if (text === '') {
            setPeople(''); 
          }
        }}
      />

      <Text style={styles.label}>ESPAÇO FESTA?</Text>
      <View style={styles.radioContainer}>
        <TouchableOpacity onPress={() => setParty(true)}>
          <Text style={party ? styles.radioSelected : styles.radio}>SIM</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setParty(false)}>
          <Text style={!party ? styles.radioSelected : styles.radio}>NÃO</Text>
        </TouchableOpacity>
      </View>

      {party && (
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={space}
            style={styles.picker}
            onValueChange={(itemValue) => setSpace(itemValue)}
          >
            {spaces.map((space, index) => (
              <Picker.Item key={index} label={space} value={space} />
            ))}
          </Picker>
        </View>
      )}

      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>AGENDAR</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>CANCELAR</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#26333B',
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    color: 'white',
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    color: 'white',
    fontSize: 18, 
    marginVertical: 10,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    marginVertical: 10,
    color: '#000',
    width: '100%', 
  },
  pickerContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    marginVertical: 10,
    width: '100%',
    overflow: 'hidden', 
  },
  picker: {
    width: '100%',
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 10,
  },
  radio: {
    color: 'white',
    fontSize: 18, 
    marginHorizontal: 10,
  },
  radioSelected: {
    color: '#FF5757',
    fontSize: 18, 
    marginHorizontal: 10,
  },
  button: {
    backgroundColor: '#FF5757',
    borderRadius: 20,
    padding: 10,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center', 
  },
  cancelButton: {
    backgroundColor: '#AAA',
    borderRadius: 20,
    padding: 10,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center', 
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    width: '100%',
  },
});

