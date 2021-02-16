import React, {useReducer} from 'react'
import Context from './Context'

export default function Provider(props) {

    const initialUserState = {
        user: {
            name: '',
            token: ''
        }
    }
    
    const initialDepartmentsState = {departments:[]}

    const userReducer = (state, action) => {
        const { type, payload} = action
        switch(type) {
            case 'SET_CREDENTIALS':
                return {
                    ...state,
                    user: {
                        ...state.user,
                        name: payload.username,
                        token: payload.token
                    }
                }
            default:
                return state
        }
    }

    const usedepartmentsReducer = (state, action) => {
        const { type, payload } = action
        switch (type) {
            case 'SET_DEPARTMENTS':
                return {
                    ...state,
                    departments: [...state.departments, ...payload.departments]
                }
            default:
                return state
        }
    } 

    const [userState, dispatchUser] = useReducer(userReducer, initialUserState)
    const [departmentsState, dispatchDepartments] = useReducer(usedepartmentsReducer, initialDepartmentsState)

    const setCredentials = (name, token) => dispatchUser({ type: 'SET_CREDENTIALS', payload: { username: name, token: token } })
    const setDepartments = (data) => dispatchDepartments({ type: 'SET_DEPARTMENTS', payload: { departments: data}})

    const actions = {
        setCredentials,
        setDepartments
    }

    return(
        <Context.Provider value={{
            state: {
                ...userState,
                ...departmentsState
            },
            actions
        }} >
            {props.children}
        </Context.Provider>
    )
} 
