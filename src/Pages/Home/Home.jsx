import React, { useState } from 'react'
import "./home.css"
import Slidebar from '../../Components/Sliderbar/Slidebar'
import Feed from '../../Components/Feed/Feed'

const Home = ({sidebar}) => {

  const [Category, setCategory] = useState(0)
   
  return (
    <>
      <Slidebar sidebar={sidebar}  Category= {Category} setCategory = {setCategory} />
      <div className={`container ${sidebar ? "" : 'large_container'} `}>
        <Feed Category= {Category} />
      </div>
    </>
  )
}

export default Home