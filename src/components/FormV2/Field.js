import { cloneElement, Component } from 'react'
import FormContext from './FormContext'

export default class Field extends Component {
    static contextType = FormContext
    unSubscribe = null
    componentDidMount() {
        this.unSubscribe = this.context.subscribe(this)
    }
    componentWillUnmount() {
        this.unSubscribe && this.unSubscribe()
    }
    getAdditionalProps = () => {
        const {name} = this.props
        const onChange = e => {
            const value = e.target.value
            this.context.setFieldValue(name, value)
        }
        const value = this.context.getFieldValue(name)
        return {
            onChange,
            value
        }
    }
    render() {
        const {children} = this.props
        const newNode = cloneElement(children, this.getAdditionalProps())
        return newNode
    }
}
