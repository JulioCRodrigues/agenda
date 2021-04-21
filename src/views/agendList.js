import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native'
import AgendItem from './agendItem'
import Database from '../database'



export default function agendList({route, navigation}) {

  const [users, setUsers] = useState([]);
  
  useEffect(() => {
      Database.getItems().then(users => setUsers(users));
  }, [route]);


  return (
    <View style={style.container}>

      <StatusBar style="ligth" />
      
      <ScrollView
        style={style.scrollContainer} contentContainerStyle={style.itemsContainer}>
          
          {
            users.map(user => {
              return <AgendItem key={user.id} id={user.id} user={user.name} navigation={navigation}/>
            })
          }
      </ScrollView>


    </View>
  )
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: 20,
    width: '100%'
  },
  scrollContainer: {
    
    width: '100%'
  },
  itemsContainer: {
    
    marginTop: 10,
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'stretch',
    backgroundColor: '#FFF'
  },
});