import React from 'react'
import { Table, Tag, Space, Form, Input, Button } from 'antd';

function DisplayUsers(props) {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => {
        if(record.key === props.editRow) {
          return <Form.Item
            name='name'
            rules={[
              {required: true, message: 'This filed is required'}
            ]}
          >
            <Input />
          </Form.Item>
        } else{
          return <p>{text}</p>
        }
      }
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      render: (text, record) => {
        if(record.key === props.editRow) {
          return <Form.Item
            name='age'
            rules={[
              {required: true, message: 'This filed is required'}
            ]}
          >
            <Input />
          </Form.Item>
        } else{
          return <p>{text}</p>
        }
      }
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      render: (text, record) => {
        if(record.key === props.editRow) {
          return <Form.Item
            name='address'
            rules={[
              {required: true, message: 'This filed is required'}
            ]}
          >
            <Input />
          </Form.Item>
        } else{
          return <p>{text}</p>
        }
      },
      filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters}) => {
        return (
          <>
            <Input autoFocus placeholder='Type text here'
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value?[e.target.value]:[])
                confirm({closeDropdown: false});
              }}
              onPressEnter={() => {
                confirm()
              }}
              onBlur={() => {
                confirm()
              }}
            />
            <Button onClick={confirm} type='primary'>Search</Button>
            <Button onClick={clearFilters} type='primary'>Reset</Button>
          </>
        )
      },
      onFilter: (value, record) => {
        return record.address.toLowerCase().includes(value.toLowerCase())
      }
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          {
            props.editRow ? <Button type='link' htmlType='submit'>Save</Button> :
              <a
                onClick={() => {
                  props.setEditRow(record.key)
                  props.form.setFieldsValue({
                    name: record.name,
                    age: record.age,
                    address: record.address
                  })
                }}
              >
                Edit
              </a>
          }
          <a onClick={() => props.removeUser(record.id)}>Delete</a>
        </Space>
      ),
    },
  ];
  
  return (
    <Form form={props.form} onFinish={props.editUser}>
      <Table columns={columns} dataSource={props.users}
        rowSelection={{
          type: 'checkbox',
          selectedRowKeys: props.selectedRowKeys,
          onChange: (selectedRowKeys) => {
            props.setSelectedRowKeys(selectedRowKeys);
          }
        }}
      />
    </Form>
  )
}

export default DisplayUsers