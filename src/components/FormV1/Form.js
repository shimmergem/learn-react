import { FormContext } from './FormContext'
import React, { Component } from 'react'

const {Provider} = FormContext
class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fields: {}
        }
    }
    getContextValue = () => ({
        setItemValue: this.setItemValue,
        getItemValue: this.getItemValue,
        removeItemValue: this.removeItemValue
    })
    setItemValue = (name, value) => {
        if (name) {
            let {fields} = this.state
            fields = {...fields, [name]: value}
            this.setState({
                fields
            })
        }
    }
    removeItemValue = name => {
        let {fields} = this.state
        delete fields[name]
        this.setState({...fields})
    }
    getItemValue = name => this.state[name]
    onSubmit = event => {
        event.preventDefault()
        Object.keys(this.state).forEach(key => console.log(`${key}: ${this.state[key]}`))
    }
    render() {
        const {children} = this.props
        return (
            <form
                onSubmit={this.onSubmit}
            >
                <Provider value={this.getContextValue()}>
                    {children}
                </Provider>
            </form>
        )
    }
}

export default Form