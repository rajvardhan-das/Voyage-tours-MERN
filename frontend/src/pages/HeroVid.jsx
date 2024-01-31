import React from 'react';
import { Fade } from 'react-reveal';

import heroVideo from '../assets/images/hero-video.mp4'

const HeroVid = () => {
  return (
    <Fade>
      <div className="hero__img-box ">
        <video src={heroVideo} alt="" autoPlay muted loop/>
      </div>
    </Fade>
  );
};

export default HeroVid;