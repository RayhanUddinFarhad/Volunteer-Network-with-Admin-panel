import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Header/Navbar'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full'>

      <Navbar></Navbar>
      <Outlet></Outlet>
      </div>
    </>
  )
}

export default App
