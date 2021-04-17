import React, { useContext, useState } from 'react'
import { View, Alert } from 'react-native'
import { ListItem, Avatar, Icon } from 'react-native-elements'
import { FlatList } from 'react-native-gesture-handler'
import UsersContext from '../context/usersContext'



export default props => {

  const { state, dispatch } = useContext(UsersContext)

  
 function confirmUserDeletion(user){
   Alert.alert('Excluir usuário', 'Deseja excluir o usuário?', [
     {
       text: 'Sim',
       onPress(){
         dispatch({
           type: 'deleteUser',
           payload: user
         })
       }
     }, 

     {
       text: 'Não'
     }
   ])
 }

  //função que randeriza a lista buscando os dados da nossa base local. 

  function getUserItem({ item: user }) {
    return (

      <ListItem key={user.id} bottomDivider
        onPress={() => props.navigation.navigate('Form', user)}

      >

        <Avatar source={{ uri: user.avatarUrl }} />

        <ListItem.Content>
          <ListItem.Title>{user.name}</ListItem.Title>
          <ListItem.Subtitle>{user.phone}</ListItem.Subtitle>

        </ListItem.Content>
        <Icon name="edit" size={25} color="orange" onPress={() => props.navigation.navigate('Form')} />
        <Icon name="delete" size={25} color="red" onPress={confirmUserDeletion} />
      </ListItem>
    )
  }

  return (

    <View>
      <FlatList
        keyExtractor={user => user.id.toString()}
        data={state.users}
        renderItem={getUserItem}
      />
    </View>

  )
}