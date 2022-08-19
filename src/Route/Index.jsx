import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeScreen from '../Pages/Home/Index'

function Routing() {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<HomeScreen/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Routing