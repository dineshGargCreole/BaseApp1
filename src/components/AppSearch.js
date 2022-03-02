import React from 'react'
import {Input} from 'antd'
import './Styles.css'

const { Search } = Input;

function AppSearch(props) {
  return (
    <div className='search-size'>
        <Search placeholder="search by name" enterButton onSearch={props.searchUser} />
    </div>
  )
}

export default AppSearch