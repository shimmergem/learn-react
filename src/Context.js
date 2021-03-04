import React from 'react'

export const ThemeContext = React.createContext({themeColor: 'pink'})
export const ThemeProvider = ThemeContext.Provider
export const ThemeConsumer = ThemeContext.Consumer

export const UserContext = React.createContext({name: `xiaoming`})
export const UserProvider = UserContext.Provider
export const UserConsumer = UserContext.Consumer

export const DateContext = React.createContext('2021')
export const DateProvider = DateContext.Provider
export const DateConsumer = DateContext.Consumer