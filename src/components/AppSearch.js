import React from 'react'
import {Input} from 'antd'
import './Styles.css'

const { Search } = Input;

function AppSearch(props) {
  return (
    <div className='search-size'>
        <Search
          placeholder="search by name"
          enterButton
          onSearch={props.searchUser}
          onChange={(e) => props.searchUser(e.target.value)}
        />
    </div>
  )
}

export default AppSearch