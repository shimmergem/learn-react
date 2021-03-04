import react, { useDebugValue } from 'react'
import { DateConsumer } from '../Context'

export const DatePage = props => {
  return (
    <DateConsumer>
      {
        context => <h1>{context}</h1>
      }
    </DateConsumer>
  )
}