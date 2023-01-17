import React from 'react';
import FeatureProduct from './FeatureProduct';
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
      <FeatureProduct/>
      <Services />
      <Trusted />
    </>
  )
};

export default Home