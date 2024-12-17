import React from 'react'
import Brand from './components/brand'
import DifferentBrand from './components/different-brand'
import Ceramics from './components/ceramics'
import PopularProducts from './components/popular-products'
import GetsBenefit from './components/getsbenefit'
import GlobalBrand from './components/globalbrand'

const Home = () => {
  return(
    <div>
       <Brand/>
       <DifferentBrand />
       <Ceramics/>
       <PopularProducts/>
      <GetsBenefit/>
     <GlobalBrand/>
    </div>
  )
}
export default Home