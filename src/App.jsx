import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import './App.css'
import Login from './component/Login'
import Profile from './component/Profile'

function App() {

  return (
    <UserContextProvider>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
