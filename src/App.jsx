import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import AllShowDisplay from './components/AllShowDisplay/AllShowDisplay'

function App() {

  return (
    <div>
      <Header></Header>
      <AllShowDisplay></AllShowDisplay>
    </div>
  )
}

export default App
