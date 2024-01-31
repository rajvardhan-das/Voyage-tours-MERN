import React from 'react';
import { Fade } from 'react-reveal';

import heroImg from '../assets/images/hero-img01.jpg'

const HeroImg = () => {
  return (
    <Fade>
      <div className="hero__img-box">
        <img src={heroImg} alt="" />
      </div>
    </Fade>
  );
};

export default HeroImg;