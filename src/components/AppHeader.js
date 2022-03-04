import React from 'react'
import { Layout, Menu, Breadcrumb, Image, Button } from 'antd';
import logo from '../asset/logo.svg';
import './Styles.css'

const { Header} = Layout;


function AppHeader(props) {
  return (
    <Layout className="layout">
    <Header>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1" style={{width: 100}}>
          <img src={logo} />
        </Menu.Item>
        <Menu.Item key="2" onClick={props.setModal} style={{color: 'black'}}>New User</Menu.Item>
      </Menu>
    </Header>
  </Layout>
  )
}

export default AppHeader