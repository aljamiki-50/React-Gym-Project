import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import HeroSec from './components/HeroSec'
import Nbar from './components/Nbar'
import ServicesLight from './ServicesLight'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' flex flex-col  '>
     <Nbar/>
     <HeroSec/>
     {/* <ServicesLight/> */}
     {/* <Route path="/ServicesLight" element={<ServicesLight />} /> */}

    </div>
  )
}

export default App
