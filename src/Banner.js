import React from 'react'
import'./Banner.css'
const Banner = () => {
  return (
    <div className="banner">
        <div className="banner-search">
            <button className='' variant="outlined">Search dates</button>
        </div>
     <div className="banner-info">
     <h1>get out and strech your imagination</h1>
     <h5>plan a diffrent kind of gatway to uncover the hidden game near you.</h5>
     <button variant='outlined'>Explore Nearby</button>
     </div>
    </div>
  )
}

export default Banner
