import React from 'react';
// import styled from 'styled-components';
import HeroSection from "./HeroSection";
import Services from './Services';
import Trusted from './Trusted';

const Home = () => {

  const data = {
    name: "Santosh store",
  }

  return (
    <>
      <HeroSection myData={data} />
      <Services />
      <Trusted />
    </>
  )
};

export default Home