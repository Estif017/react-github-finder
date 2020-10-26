import React,{Component} from 'react'
import axios from 'axios'

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Users from './Components/Users/Users';
import SearchBox from './Components/SearchBox/SearchBox';
import Alert from './Components/Alert/Alert';


class App extends Component {

  state = {
    users:[],
    isLoading:false,
    alert:null
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

  setAlert=(message,style)=>{
    this.setState({alert:{message,style}})
    setTimeout(()=>this.setState({alert:null}),3000)
  }

  render(){
    const {users, isLoading}=this.state


    return (
      <div className="App">
        <Navbar  />
        <div className="container">
          <Alert alert={this.state.alert}/>
          <SearchBox 
            searchUsers={this.searchUsers} 
            clearUsers={this.clearUsers}
            showClear={this.state.users.length>0?true:false}
            setAlert={this.setAlert}
            />
          <Users loading={isLoading} users={users}/>
        </div>
      </div>
    );
  }
}

export default App;
