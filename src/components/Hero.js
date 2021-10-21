import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import Iframe from 'react-iframe';

function Hero() {

  return ( 
    <Iframe className="hero" url="https://www.feedspot.com/widgets/lookup/e0667addcurB"
    id="hero"
    frameborder="0"
    width="100%"
    height="100%"
    scrolling="no"
    />
  );
}

export default Hero
