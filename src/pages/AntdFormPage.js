import React, { Component } from 'react'
import { Form, Button, Input } from 'antd'

const FormItem = Form.Item
const nameRules = {required: true, message: '请输入姓名'}
const passwordRules = {require: true, message: '请输入密码'}

class AntdFormPage extends Component {
    formRef = React.createRef()

    componentDidMount() {
        this.formRef.current.setFieldsValue({usename: 'default'})
    }
    onFinish = val => {
        console.log('onFinish', val)
    }
    onFinishFailed = val => {
        console.log('onFinishFailed', val)
    }

    render() {
        return (
            <div>
                <h3>AntdFormPage</h3>
                <Form
                    ref={this.formRef}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                >
                    <FormItem name='username' label='姓名' rules={[nameRules]}>
                        <Input placeholder='username placeholder' />
                    </FormItem>
                    <FormItem name='password' label='密码' rules={[passwordRules]}>
                        <Input placeholder='password palceholder' />
                    </FormItem>
                    <FormItem>
                        <Button type='primary' size='large' htmlType='submit'>
                            Submit
                        </Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
}

export default AntdFormPage