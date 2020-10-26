import React, { useState } from 'react'
import PropTypes from 'prop-types'

const SearchBox =({searchUsers,clearUsers,showClear,setAlert})=> {
    const [searchField,setSearchField]=useState('')
    
    const onChangeHandle=e => {
        setSearchField(e.target.value)
    }
    const onSubmit = e => {
        e.preventDefault()
        if(searchField === ''){
            setAlert('Please enter something','light')
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
                {showClear && (<button
                    className='btn btn-light btn-block'
                    onClick={onClick}
                    >Clear</button>)} 
            </div>
        )
        
    }
    
    
     SearchBox.propTypes= {
        searchUsers:PropTypes.func.isRequired,
        clearUsers:PropTypes.func.isRequired,
        showClear:PropTypes.bool.isRequired,
        setAlert:PropTypes.func.isRequired,
    }
    export default SearchBox
    