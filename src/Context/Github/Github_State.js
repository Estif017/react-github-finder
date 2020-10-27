import {useReducer} from 'react'
import axios from 'axios'

import GithubContext from '../Github/Github_Context'
import GithubReducer from '../Github/Github_Reducer'
import {SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS,
} from '../types'

let githubClientId;
let githubClientSecret;
if (process.env !=='production'){
    githubClientId=process.env.REACT_APP_GITHUB_CLIENT_ID;
    githubClientSecret=process.env.REACT_APP_GITHUB_CLIENT_SECRET
}else{
    githubClientId=process.env.GITHUB_CLIENT_ID;
    githubClientSecret=process.env.GITHUB_CLIENT_SECRET
}

const GithubState = props => {
    const initialState={
        users: [],
        user: {},
        isLoading: false,
        repos: []
    }
    const [state,dispatch]=useReducer(GithubReducer,initialState)
   
    const searchUsers=async text=>{
        setIsLoading(true)
        const res=await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
        dispatch({
            type:SEARCH_USERS,
            payload:res.data.items
        })
      }

    const getUser=async userName=>{
        setIsLoading( true)
        const res=await axios.get(`https://api.github.com/users/${userName}?client_id=${
            githubClientId
        }&client_secret=${githubClientSecret}`)
        dispatch({
            type:GET_USER,
            payload:res.data
        })
        setIsLoading(false)   
    }

    const getUserRepos=async userName=>{
        setIsLoading( true)
        const res=await axios.get(`https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&client_id=${
          githubClientId
        }&client_secret=${githubClientSecret}`)
        dispatch({
            type:GET_REPOS,
            payload: res.data
        })
      }

    const setIsLoading =()=>dispatch({type:SET_LOADING})

    const clearUsers=()=>{
        dispatch(
        { type:CLEAR_USERS }
    )
    }

    return (
        <GithubContext.Provider value={{
            users:state.users,
            user:state.user,
            repos:state.repos,
            isLoading:state.isLoading,
            searchUsers,
            clearUsers,
            getUser,
            getUserRepos
        }}>
            {props.children}
        </GithubContext.Provider>
    )
}

export default GithubState
