import { cloneElement, Component } from 'react'
import {FormContext} from './FormContext'

class FormItem extends Component {
    static contextType = FormContext
    getAdditionalProps() {
        const {getItemValue, setItemValue} = this.context
        const {name} = this.props
        const onChange = e => {
            const value = e.target.value
            setItemValue(name,value)
        }
        const value = getItemValue(name)
        return {
            onChange,
            value
        }
    }
    render() {
        const {name} = this.props
        console.log(`${name}: render`)
        const {children} = this.props
        const newNode = cloneElement(children, this.getAdditionalProps())
        return newNode
    }
}

export default FormItem