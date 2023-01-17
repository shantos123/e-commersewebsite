//import React, { useContext } from 'react';
//import { AppContext } from './Context/ProductContext';
import HeroSection from './HeroSection';
import { useProductContext } from './Context/ProductContext';

const About = () => {

  //const {myName} = useContext(AppContext);
  const {myName} = useProductContext();

  const data = {
    name: "Santosh Ecommerce",
  }

  return (
    <>
      <h1>{myName}</h1>
      <HeroSection myData={data} />
    </>
  )
}

export default About