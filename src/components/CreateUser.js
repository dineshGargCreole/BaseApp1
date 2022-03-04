import React, {Component} from 'react'
import { Form, Input, Button, Divider, Space } from 'antd';
import './Styles.css'

function CreateUser(props) {
    // const [form] = Form.useForm();
  return (
    <div className=''>
        <Form
            layout="vertical"
            onFinish={(data) => {
                props.addUser(data)
                props.form.resetFields();
            }}
            form={props.form}
        >
            <Form.Item
                name='name'
                label='Name'
                rules={[
                    {required: true, message: 'This field is required'}
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name='age'
                label='Age'
                rules={[
                    {required: true, message: 'This field is required', pattern: new RegExp(/^[0-9]+$/)}
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name='address'
                label='Address'
                rules={[
                    {required: true, message: 'This field is required'}
                ]}
            >
                <Input />
            </Form.Item>
            <Divider />
            <Form.Item>
                <Space style={{float: 'right'}}>
                    <Button onClick={() => {
                        props.form.resetFields();
                        props.onCancel();
                    }}>Cancel</Button>
                    <Button
                        type='primary'
                        htmlType='submit'
                    >
                        Submit
                    </Button>
                </Space>
            </Form.Item>
        </Form>
    </div>
  )
}

export default CreateUser










