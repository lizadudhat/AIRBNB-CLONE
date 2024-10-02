import React from 'react'
import'./Section1.css'
const Section1 = () => {
  return (
    <div>
     <div>
  <section className="airbnb-main-photo image-mask-darken">
    <div className="airbnb-intro-content">
      <h1 className="airbnb-intro-title">Melbourne</h1>
      <div className="airbnb-button">
        <h3 className="airbnb-button-text">Find a neighborhood</h3>
      </div>
    </div>
  </section>
 
  <section className="airbnb-container airbnb-middle">
    <div className="airbnb-middle-box">
    
      <div className="airbnb-middle-content-container">
       
        <p className="airbnb-middle-content">Tourists mispronouncing Melbourne (it's mel-bin), crowded trains &amp; trams, ticket inspectors, unpredictable weather, the price of real estate, Sydney</p>
      </div>
    </div>
    <div className="airbnb-middle-box">
    
      <div className="airbnb-middle-content-container">

        <p className="airbnb-middle-content">Coffee, talking about coffee, brunch, footy in winter, cricket in summer, laneways &amp; hidden bars, street art &amp; buskers, debating which side of the river is better</p>
      </div>
    </div>
  </section>
 
  <section className="airbnb-container airbnb-neighborhood-container">
    <h2 className="airbnb-neighborhood-title">Featured Neighborhoods</h2>
    <h3 className="airbnb-neighborhood-subtitle">Explore 19 Melbourne neighborhoods. Which are right for you?</h3>
    <section className="airbnb-three-neighborhood-container">
      <div className="airbnb-indiv-neighborhood-container">
        <header className="airbnb-indiv-neighborhood-header fitzroy image-mask-darken">
          <div className="airbnb-indiv-neighborhood-header-content">
            <h4 className="airbnb-indiv-neighborhood-title">Fitzroy</h4>
           
          </div>
        </header>
        <p className="airbnb-indiv-neighborhood-details">Hip Terrace Houses Anything Goes Vintage Clothing</p>
      </div>
      <div className="airbnb-indiv-neighborhood-container">
        <header className="airbnb-indiv-neighborhood-header st-kilda image-mask-darken">
          <div className="airbnb-indiv-neighborhood-header-content">
            <h4 className="airbnb-indiv-neighborhood-title"> Kilda</h4>
          
          </div>
        </header>
        <p className="airbnb-indiv-neighborhood-details">Cake Shops Backpackers Hippies Beach Culture</p>
      </div>
     
    </section>
    <div className="airbnb-button">
      <h3 className="airbnb-button-text">Find a neighborhood</h3>
    </div>
  </section>
</div>


    </div>
  )
}

export default Section1
