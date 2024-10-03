import React from 'react'
import NavBar from '../src/assets/components/NavBar'
import Home from '../src/home'
import Header from './Header'
import DisplayCards from './DisplayCardsManual'

const DisplayChanges = () => {
  return (
    <>
      <NavBar/>
      <Home/>
      <Header/>
      <Header/>
      <Header/>
      <Header/>
      <DisplayCards data={{"id":1,"about":"Captured the essence of simplicity in every frame.","author":"Tuhin Modak","path":"../images/logo1.jpg"}}/>
      <DisplayCards data={{"id":2,"about":"Moments that speak louder than words.","author":"Tuhin Modak","path":"../images/logo2.jpg"}}/>
      <DisplayCards data={{"id":3,"about":"A glimpse of nature’s quiet elegance.","author":"Tuhin Modak","path":"../images/logo3.jpg"}}/>
      <DisplayCards data={{"id":4,"about":"Framed beauty, frozen in time.","author":"Tuhin Modak","path":"../images/logo4.jpg"}}/>
      <DisplayCards data={{"id":5,"about":"Where light meets perfection.","author":"Tuhin Modak","path":"../images/logo5.jpg"}}/>

    </>
  )
}

export default DisplayChanges
