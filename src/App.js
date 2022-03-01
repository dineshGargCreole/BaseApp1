import React, {useCallback, useState} from 'react'
import { Button, Divider, Modal, Form } from 'antd';
import './App.css';
import DisplayUsers from './components/DisplayUsers';
import CreateUser from './components/CreateUser';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [form] = Form.useForm();

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
    setIsOpen(false)
  }

  const removeUser = (id) => {
    Modal.confirm({
      title: 'Delete User',
      content: 'Are you sure to delete?',
      okText: 'Yes',
      onOk: () =>{
        const newUsers = users.filter(user => user.id !== id)

        setUsers(newUsers);
      }
    })
  }

  const editUser = (data) => {
    console.log(data);
    form.setFieldsValue({
      name: data.name,
      age: data.age,
      address: data.address
    });
    setModal();
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
      <h1>hello</h1>
      <DisplayUsers users={users} removeUser={removeUser} editUser={editUser} />
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
