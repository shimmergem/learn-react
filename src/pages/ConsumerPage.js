import React, { Component } from 'react'
import { ThemeConsumer, UserConsumer } from '../Context'

export default class ConsumerPage extends Component {
  render() {
    console.log(`ConsumerPage render`)
    return (
      <div>
        <h3>ConsumerPage</h3>
        <ThemeConsumer>
          {
            themeContext => (
              <div style={{color: themeContext.themeColor}}>
                omg
                <UserConsumer>
                  {
                    userContext => <div>{userContext.name}</div>
                  }
                </UserConsumer>
              </div>
            )
          }
        </ThemeConsumer>
      </div>
    )
  }
}