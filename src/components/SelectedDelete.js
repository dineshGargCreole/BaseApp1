import React from 'react'
import {Button} from 'antd'

function SelectedDelete(props) {
  return (
    <Button type='danger' onClick={props.removeSelectedUsers}>Selected Row Delete</Button>
  )
}

export default SelectedDelete