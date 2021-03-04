import react, { Component } from 'react';
import { DateProvider, ThemeProvider, UserProvider } from '../Context';
import ConsumerPage from './ConsumerPage'
import { DatePage } from './DatePage';
import UseContextPage from './UseContextPage'

export default class ContextPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: {
        themeColor: 'red'
      },
      user: {name: 'xiaoming'},
      counter: 0
    }
  }
  increase() {
    this.state.counter += 1
    this.setState({...this.state})
  }
  render() {
    const { theme, user, counter } = this.state
    return (
      <div>
        <h3>ContextPage: {counter}</h3>
        <button onClick={() => this.increase()}>+1</button>
        <ThemeProvider value={theme}>
          <UserProvider value={user}>
            <ConsumerPage />
            <UseContextPage />
          </UserProvider>
        </ThemeProvider>
        <DateProvider value="2021">
          <DatePage />
        </DateProvider>
      </div>
    )
  }
}