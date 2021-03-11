import React, { Component } from 'react'

export default class DatePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: 2021
    }
  }
  increase() {
    let date = this.state.date + 1
    this.setState({...this.state, date})
  }
  render() {
    const {date} = this.state
    console.log(`DatePage render`)
    return (
      <div>
        <h1>{date}</h1>
        <button onClick={() => this.increase()}>+date</button>
      </div>
    )
  }
}