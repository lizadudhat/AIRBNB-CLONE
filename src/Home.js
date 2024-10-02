import React from 'react'
import './Home.css'

import Banner from './Banner'
import Card from './Card'
const Home = () => {
  return (
    <div>
     
      <Banner/>
      <div className='home-section'>
       <Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4UlVfbXpFKiYPHYsNn0E1op-q1S3yva15Hg&s"title="Entire homes"description="confortable private space with roomfor friends or family"/>
       <Card src="https://www.shutterstock.com/image-photo/traveling-camping-concept-camp-tent-260nw-1490813069.jpg"title="Entire homes"description="confortable private space with roomfor friends or family"/>
       <Card src="https://www.shutterstock.com/image-photo/small-hotel-pool-surrounded-by-260nw-1651391554.jpg"title="Entire homes"description="confortable private space with roomfor friends or family"/>
      </div>
      <div className='home-section'>
      <Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqlhGMDdTV21kD6D8WbChGsenNBfkGG1-t0Q&s"title="Entire homes"description="confortable private space with roomfor friends or family"/>
      <Card src="https://www.shutterstock.com/image-photo/typical-hotel-room-deluxe-260nw-14696374.jpg"title="Entire homes"description="confortable private space with roomfor friends or family"/>
      <Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlPixu5bOyHkpmDEAOsdTxVCXPWUjBCrh5Dg&s"title="Entire homes"description="confortable private space with roomfor friends or family"/>
      </div>
    </div>
  )
}

export default Home
