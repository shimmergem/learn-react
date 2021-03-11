import React, {useContext} from 'react'
import {ThemeContext, UserContext} from '../Context'

export default function UserContextPage(props) {
  const {themeColor} = useContext(ThemeContext)
  const {name} = useContext(UserContext)
  return (
    <div className="border">
      <h3 style={{color: themeColor}}>UseContextPage</h3>
      <p>{name}</p>
    </div>
  )
}