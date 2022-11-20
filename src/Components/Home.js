import React from 'react';
// import styled from 'styled-components';
import HeroSection from "./HeroSection";

const Home = () => {

  const data = {
    name: "Santosh store",
  }

  return <HeroSection myData={data} />
};

export default Home