import React, { Component } from 'react'
import FormContext from './FormContext'
import FormStore from './FormStore'

export default class Form extends Component {
    formStore = new FormStore()
    getContextValue = () => {

    }
    onSubmit = event => {
        event.preventDefault()
        console.log('submit')
    }
    render() {
        const {children} = this.props
        const {Provider} = FormContext
        return (
            <form onSubmit={this.onSubmit}>
                <Provider value={this.formStore}>
                    {children}
                </Provider>
            </form>
        )
    }
}