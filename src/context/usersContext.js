import React, { createContext, useReducer } from 'react'
import users from '../data/users'

const initialState = {users}
const UsersContext = createContext({})

const actions = {

    deleteUser(state, action){
        const user = action.payload
            return {
                
                users: state.users.filter(u => u.id !== user.id)
                
            }
    }
}

export const UsersProvider = props => {

    //função que dispara ação de acordo com o estado 
    function reducer(state, action){
        const fn = actions[action.type]
        return fn ? fn(state, action) : state
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        //tudo que for passado no provider será randerizado no props children
        //disponibilizando um valor de estado e criando uma lista (state || users)
        <UsersContext.Provider value={{state, dispatch}}>
            {props.children}
        </UsersContext.Provider>
    )
}

export default UsersContext