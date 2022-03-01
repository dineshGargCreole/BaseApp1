import React from 'react'
import { Table, Tag, Space } from 'antd';

function DisplayUsers(props) {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a onClick={() => props.editUser(record)}>Edit</a>
          <a onClick={() => props.removeUser(record.id)}>Delete</a>
        </Space>
      ),
    },
  ];

  return (
    <Table columns={columns} dataSource={props.users} />
  )
}

export default DisplayUsers