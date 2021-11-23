import React from 'react';
import Carousel from '../components/Carousel/index';
import { Content } from '../components/Content/index';
import Features from '../components/Features/index';
import Hero from '../components/Hero/index';
import { heroOne, heroTwo, heroThree } from '../data/heroData';

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Content {...heroOne} />
      <Content {...heroTwo} />
      <Content {...heroThree} />
      <Carousel />
    </>
  );
};

export default Home;
