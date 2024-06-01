import './App.css'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/home/Home'
import Login from './pages/authentication/Login'
import Register from './pages/authentication/Register'
import PropertyDescription from './pages/property-description/PropertyDescription'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/property' element={<PropertyDescription />} />
      </Routes>
    </>
  )
}

export default App
