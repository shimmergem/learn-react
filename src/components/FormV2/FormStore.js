export default class FormStore {
    constructor() {
        this.store = {}
        this.subscribers = new Map()
    }
    subscribe = field => {
        const {name} = field.props
        this.subscribers.set(name, field)
        return () => this.subscribers.delete(name)
    }
    getFieldValue = name => this.store[name]
    setFieldValue = (name, value) => {
        const field = this.subscribers.get(name)
        this.store[name] = value
        field.forceUpdate()
    }
}

