import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import Database from '../database'


export default function App({ route, navigation }) {

  const id = route.params ? route.params.id : undefined;
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if(!route.params) return;
    setName(route.params.name);
    setPhone(route.params.phone);
  }, [route])

  function nameChange(name) {
    setName(name)
  }

  function phoneChange(phone) {
    setPhone(phone)
  }


  async function saveItem(){ 
    const listItem = {name, phone};
    Database.saveItem(listItem, id)
      .then(response => navigation.navigate("Agenda", listItem));
  }

  return (

    <View style={style.form}>
      <Text>Nome: </Text>
      <TextInput
        style={style.input}
        placeholder="Informe o nome"
        onChangeText={nameChange}
        value={name}

      />

      <Text>Telefone: </Text>
      <TextInput
        style={style.input}
        placeholder="Informe o número de telefone"
        keyboardType="numeric"
        onChangeText={phoneChange}
        value={phone}
      />

      <TouchableOpacity style={style.button} onPress={saveItem}>
        <Text style={style.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>

  )
}

const style = StyleSheet.create({

  form: {
    padding: 12
  },

  input: {
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10

  },

  button: {
    marginTop: 10,
    height: 60,
    backgroundColor: 'blue',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
    shadowOpacity: 20,
    shadowColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  }
})
