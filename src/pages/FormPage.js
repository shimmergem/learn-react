import React, { Component } from 'react'
import { Button, Input } from 'antd'
import Form from '../components/FormV2'

const FormItem = Form.Item
const nameRules = {required: true, message: '请输入姓名'}
const passwordRules = {require: true, message: '请输入密码'}

class FormPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 1
        }
    }
    onFinish = val => {
        console.log('onFinish', val)
    }
    onFinishFailed = val => {
        console.log('onFinishFailed', val)
    }
    onClick = () => {
        let {counter} = this.state
        counter++
        this.setState({counter})

    }

    render() {
        const {counter} = this.state
        return (
            <div>
                <h3>FormPage</h3>
                <Form
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                >
                    <FormItem name='username' label='姓名' rules={[nameRules]}>
                        <Input placeholder='username placeholder' />
                    </FormItem>
                    {
                        counter % 2 === 0 ? (
                            <FormItem name='password' label='密码' rules={[passwordRules]}>
                                <Input placeholder='password palceholder' />
                            </FormItem>
                        ) : null
                    }
                    <FormItem>
                        <Button type='primary' size='large' htmlType='submit'>
                            Submit
                        </Button>
                    </FormItem>
                </Form>
                <Button onClick={this.onClick}>+1</Button>
            </div>
        )
    }
}

export default FormPage