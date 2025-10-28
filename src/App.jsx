import React, { useState } from 'react'
import Navbar from "./Components/Navbar"
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Player from './Pages/Video-player/Player'


const App = () => {

const [sidebar, setsidebar] = useState(true)

  return (
    <div>
      <Navbar setsidebar= {setsidebar} />
      <Routes>
            <Route path="/" element = {<Home sidebar ={sidebar} />} />
            <Route path="Player/:categoryId/:videoId" element ={<Player/>} />
      </Routes>
    </div>
  )
}

export default App