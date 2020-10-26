import React,{useState} from 'react'
import axios from 'axios'
import {Switch, Route} from 'react-router-dom'

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Users from './Components/Users/Users';
import SearchBox from './Components/SearchBox/SearchBox';
import Alert from './Components/Alert/Alert';
import About from './Pages/About/About';
import UserPage from './Pages/UserPage/UserPage';



const App =()=> {

  const [state,setState]=useState({ 
    users:[],
    user:{},
    isLoading:false,
    alert:null,
    repos:[]
  })




 const searchUsers=async text=>{
    setState({isLoading: true})
    const res=await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    setState({
        users: res.data.items,
      isLoading: false
    })
  }

  const clearUsers=()=>{
    setState({users:[]})
  }

  const setAlert=(message,style)=>{
    setState({alert:{message,style}})
    setTimeout(()=>setState({alert:null}),3000)
  }

  const getUser=async userName=>{
    setState({isLoading: true})
    const res=await axios.get(`https://api.github.com/users/${userName}?client_id=${
      process.env.REACT_APP_GITHUB_CLIENT_ID
    }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    setState({
        user: res.data,
      isLoading: false
    })
  }

  const getUserRepos=async userName=>{
    searchUsers({isLoading:true})
    const res=await axios.get(`https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&client_id=${
      process.env.REACT_APP_GITHUB_CLIENT_ID
    }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    setState({repos:res.data,isLoading: false})
  }
    const {users, isLoading,user,repos}=state
    return (
      <div className="App">
        <Navbar  />
        <div className="container">
          <Alert alert={state.alert}/>
          <Switch>
            <Route exact path='/'>
              <SearchBox 
                searchUsers={searchUsers} 
                clearUsers={clearUsers}
                showClear={state.users.length>0?true:false}
                setAlert={setAlert}
                />
              <Users loading={isLoading} users={users} />
            </Route>
            <Route path='/about'><About/></Route>
            <Route exact path='/user/:login' render={props=>(<UserPage {...props} user={user} getUser={getUser} getUserRepos={getUserRepos} repos={repos} loading={isLoading} />)}  />
          </Switch>
        </div>
      </div>
    );
  }

export default App;
