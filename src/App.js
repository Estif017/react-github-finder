import React,{Component} from 'react'
import axios from 'axios'

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Users from './Components/Users/Users';
import SearchBox from './Components/SearchBox/SearchBox';


class App extends Component {

  state = {
    users:[],
    isLoading:false
  }


 searchUsers=async text=>{
    this.setState({isLoading: true})
    const res=await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState({
        users: res.data.items,
      isLoading: false
    })
  }

  clearUsers=()=>{
    this.setState({users:[]})
  }

  render(){
    const {users, isLoading}=this.state


    return (
      <div className="App">
        <Navbar  />
        <SearchBox 
          searchUsers={this.searchUsers} 
          clearUsers={this.clearUsers}
          showClear={this.state.users.length>0?true:false}
          />
        <Users loading={isLoading} users={users}/>
      </div>
    );
  }
}

export default App;
