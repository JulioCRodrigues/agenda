import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native'
import { ListItem } from 'react-native-elements/dist/list/ListItem'
import Database from '../database'


export default function agendItem(props){

  async function editUser(){
    const user = await Database.getItem(props.id)
    props.navigation.navigate('Form', user)
  }

  function deleteUser(){ 
    Alert.alert(
        "Atenção",
        "Você tem certeza que deseja excluir este usuário?",
        [
            {
            text: "Não",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
            },
            { text: "Sim", onPress: () => {
                Database.deleteItem(props.id).then(response => props.navigation.navigate("Agenda", {id: props.id}))
            }}
        ],
        { cancelable: false }
        );
}
  

  return (
    <View style={style.container}>
       <Text style={style.textItem}>{props.user}</Text>
       <View style={style.buttonsContainer}>
            <TouchableOpacity style={style.deleteButton} onPress={deleteUser} > 
                <Text style={style.buttonText}>X</Text> 
            </TouchableOpacity> 
            <TouchableOpacity style={style.editButton} onPress={editUser} > 
                <Text style={style.buttonText}>Editar</Text> 
            </TouchableOpacity> 
          </View>
    </View>
  )
}

const style = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      marginTop: 20,
      width: '100%'
    },
    buttonsContainer: {
        flexDirection: 'row-reverse',
        alignItems: 'flex-end',
        borderBottomWidth: 1,
        borderBottomColor: '#CCC',
        paddingBottom: 10,
        marginTop: 10,
    },
    editButton: {
        marginLeft: 10,
        height: 40,
        backgroundColor: 'orange',
        borderRadius: 10,
        padding: 10,
        fontSize: 12,
        elevation: 10,
        shadowOpacity: 10,
        shadowColor: '#ccc',
        alignItems: 'center'
    },
    deleteButton: {
        marginLeft: 10,
        height: 40,
        width: 40,
        backgroundColor: 'red',
        borderRadius: 10,
        padding: 10,
        fontSize: 12,
        elevation: 10,
        shadowOpacity: 10,
        shadowColor: '#ccc',
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    textItem: {
        fontSize: 20,
    }
  });