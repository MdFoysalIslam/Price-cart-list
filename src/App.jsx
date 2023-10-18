import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import PriceList from './components/PriceList/PriceList'
import Dashboard from './components/Dashboard/Dashboard'
import PhoneBar from './components/PhoneBar/PhoneBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Navbar></Navbar>
      <h1 className='text-8xl text-purple-600' >Hello Tailwine</h1>
        <PriceList></PriceList>
        <Dashboard></Dashboard>
        <PhoneBar></PhoneBar>
      </div>
       
        
    </>
  )
}

export default App
