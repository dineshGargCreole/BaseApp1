import React, {useCallback, useState} from 'react'
import { Button, Divider, Modal, Form } from 'antd';
import './App.css';
import DisplayUsers from './components/DisplayUsers';
import CreateUser from './components/CreateUser';
import AppSearch from './components/AppSearch'
import SelectedDelete from './components/SelectedDelete'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [form] = Form.useForm();
  const [editRow, setEditRow] = useState(null);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const setModal = () => {
    setIsOpen({isOpen: !isOpen})
  }

  const addUser = (data) => {
    const randomNumber = Math.random();
    const newUser = {
      ...data,
      id: randomNumber,
      key: randomNumber
    }
    setUsers([...users, newUser]);
    setFilteredUsers([...users, newUser]);
    setIsOpen(false)
  }

  const removeUser = (id) => {
    Modal.confirm({
      title: 'Delete User',
      content: 'Are you sure to delete?',
      okText: 'Yes',
      onOk: () =>{
        const newUsers = filteredUsers.filter(user => user.id !== id)

        setFilteredUsers(newUsers);
      }
    })
  }

  const editUser = (data) => {
    const updatedUsers = users.map(user => {
      if (user.key === editRow) {
        return {...data, key: editRow, id: editRow}
      } else {
        return user
      }
    })
    setUsers(updatedUsers);
    form.resetFields();
    setEditRow(null)
  }

  const searchUser = (value) => {
    if (value === '') {
      setFilteredUsers(users)
    } else {
      const newUsers = users.filter(user => user.name === value)
      setFilteredUsers(newUsers)
    }
  }

  const removeSelectedUsers = () => {
    const newUsers = filteredUsers.filter(function(obj) {
      return !selectedRowKeys.includes(obj.key)
    });
    setFilteredUsers(newUsers);
  }

  return (
    <div className="App">
      <Button
        type="text"
        onClick={setModal}
      >
        New User
      </Button>
      <Divider />
      <SelectedDelete removeSelectedUsers={removeSelectedUsers} />
      <AppSearch searchUser={searchUser} />
      <DisplayUsers users={filteredUsers} removeUser={removeUser} editRow={editRow} setEditRow={setEditRow} form={form} editUser={editUser}
        setSelectedRowKeys={setSelectedRowKeys} selectedRowKeys={selectedRowKeys}
      />
      <Modal
        visible={isOpen}
        title="New User"
        onCancel={() => setIsOpen(false)}
        okText='Submit'
        onOk={() => setIsOpen(false)}
        footer={null}
      >
        <CreateUser
          addUser={addUser}
          onCancel={() => {
            setIsOpen(false)
          }}
          form={form}
        />
      </Modal>
    </div>
  );
}

export default App;
