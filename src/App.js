import React from 'react'
import { Button , Icon} from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import AgendHome from './views/agendList'
import AgendForm from './views/agendForm'



const Stack = createStackNavigator()

export default props => {

    return (

            <NavigationContainer >
                <Stack.Navigator initialRouteName="Agenda" screenOptions={screenOptions}>
                    <Stack.Screen
                        name="Agenda"
                        component={AgendHome}
                        options={({ navigation }) => {
                            return {
                                title: 'Agenda',
                                headerRight: () => (
                                    <Button
                                        type="clear"
                                        icon={
                                            <Icon name="add" size={25} color="#FFF" />
                                        }
                                        onPress={() => navigation.navigate('Form')}
                                    />
                                )
                            }
                        }}


                    />
                    <Stack.Screen
                        name="Form"
                        component={AgendForm}
                        options={{
                            title: 'Cadastro'
                        }} />
                </Stack.Navigator>
            </NavigationContainer>
        

    )
}

const screenOptions = {

    headerStyle: {
        backgroundColor: '#000'
    },

    headerTintColor: '#FFF',

}