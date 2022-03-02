import React from 'react'
import {Button} from 'antd'

function SelectedDelete(props) {
  return (
    <div>
        <Button type='danger' onClick={props.removeSelectedUsers}>Selected Row Delete</Button>
    </div>
  )
}

export default SelectedDelete