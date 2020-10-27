import React, { useContext, useState } from 'react'

import GithubContext from '../../Context/Github/Github_Context'
import AlertContext from '../../Context/Alert/Alert_context'

const SearchBox =()=> {
    const githubContext = useContext(GithubContext)
    const alertContext=useContext(AlertContext)
    
    const {searchUsers,clearUsers,users} = githubContext
    const {setAlertMessage}=alertContext
    
    const [searchField,setSearchField]=useState('')
    
    const onChangeHandle=e => {
        setSearchField(e.target.value)
    }
    const onSubmit = e => {
        e.preventDefault()
        if(searchField === ''){
            setAlertMessage('Please enter something','light')
        }else{
            searchUsers(searchField)
            setSearchField('')
        }
    }
    
    const onClick=e => {
        e.preventDefault()
        clearUsers()
    }
    return (
        <div>                
                <form className='form' onSubmit={onSubmit}>
                    <input type="text"
                        placeholder='search users...'
                        value={searchField}
                        onChange={onChangeHandle} />
                    <button className='btn btn-dark btn-block'>Search</button>
                </form>
                {users.length>0 && (<button
                    className='btn btn-light btn-block'
                    onClick={onClick}
                    >Clear</button>)} 
            </div>
        )
        
    }
    export default SearchBox
    