import React, { useReducer } from 'react'
import AlertContext from './Alert_context'
import AlertReducer from './Alert_Reducer'
import {SET_ALERT,REMOVE_ALERT} from '../types'

const AlertState = props => {
    const initialState=null
    const [state,dispatch]=useReducer(AlertReducer,initialState)

    const setAlertMessage=(message,style)=>{
        dispatch({
            type:SET_ALERT,
            payload:{message,style}
        })
        setTimeout(()=>dispatch({type:REMOVE_ALERT}),3000)
      }

    return (
        <AlertContext.Provider value={{alert:state,setAlertMessage}}>
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertState
