import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'


export default ({ route, navigation }) => {

  //altera o estado atual da variavel 
  const [user, setUser] = useState(route.params ? route.params : {})

  return (

    <View style={style.form}>
      <Text>Nome: </Text>
      <TextInput
        style={style.input}
        onChangeText={name => setUser({ ...user, name })}
        placeholder="Informe o nome"
        value={user.name}
      />

      <Text>Telefone: </Text>
      <TextInput
        style={style.input}
        onChangeText={phone => setUser({ ...user, phone })}
        placeholder="Informe o número de telefone"
        value={user.phone}
      />

      <Text>Foto: </Text>
      <TextInput
        style={style.input}
        onChangeText={avatarUrl => setUser({ ...user, avatarUrl })}
        placeholder="Informe o link da imagem"
        value={user.avatarUrl}
      />
      <Button 
        title="Salvar"
        onPress={() => {
          navigation.goBack()
        }}
      />
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

  }
})