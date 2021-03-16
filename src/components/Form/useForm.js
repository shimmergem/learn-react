import React, {useRef} from 'react'
class FormStore {
    constructor(props) {
        this.store = {}
        this.fieldEntities = []
        this.callbacks = {}
    }
    setCallback = callback => {
        this.callbacks = {
            ...callback,
            ...this.callbacks
        }
    }
    registerField = field => {
        this.fieldEntities.push(field)
        return () => {
            this.fieldEntities = this.fieldEntities.filter(item => item !=field)
            delete this.stroe[field.props.name]
        }
    }
    getFieldValue = name => {
        return this.store[name]
    }
    getFieldsValue = name => {
        return this.store
    }
    setFieldsValue = newStore => {
        this.store = {
            ...newStore,
            ...this.store
        }
        this.fieldEntities.forEach(entity => {
            const {name} = entity.props
            Object.keys(newStore).forEach(key => {
                if (key === name) {
                    entity.onStoreChange()
                }
            })
        })
        console.log('store', this.store)
    }
    validate = () => {
        let err = []
        this.fieldEntities.forEach(entity => {
            const {name, rules} = entity.props
            let value = this.store[name]
            let rule = rules && rules[0]
            if (rule && rule.required && (value === undefined || value === '')) {
                err.push({
                    [name]: rules.message,
                    value
                })
            }
        })
        return err
    }
    submit = () => {
        let err = this.validate()
        if (err.length === 0) {
            this.callbacks.onFinish(this.store)
        } else if (err.length > 0) {
            this.callbacks.onFinishFailed(err)
        }
    }
    getForm = () => {
        return {
            setCallback: this.setCallback,
            submit: this.submit,
            registerField: this.registerField,
            getFieldValue: this.getFieldValue,
            getFieldsValue: this.getFieldsValue,
            setFieldsValue: this.setFieldsValue
        }
    }
}

export default function useForm(form) {
    const formRef = useRef()
    if (!formRef.current) {
        if (form) {
            formRef.current = form
        } else {
            const FormStore = new FormStore()
            formRef.current = formStore.getForm()
        }
    }
    return [formRef.current]
}