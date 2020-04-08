import React, { useState, useEffect, useRef } from 'react';
import Lottie from 'react-lottie';
import { gsap, Elastic } from 'gsap/all';
import { useIntersection } from 'react-use';
import {
  Main, LeftDiv, Card, Info, P, Animation, H1,
} from './aboutMeStyles';
import animationData from './character.json';


function AboutMe(props) {
  const mainRef = useRef(null);
  const intersection = useIntersection(mainRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  });

  intersection && intersection.intersectionRatio < 0.5
    ? gsap.to('.card', { opacity: 0,scale:0.8, duration: 1 })
    : gsap.to('.card', { opacity: 1,scale:1, duration: 1 });

  const hi = (name) => console.log(name);
  const [header, setHeader] = useState('');
  useEffect(() => {
    setHeader('About Me');
    hi('ali');
  });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid meet',
    },
  };


  return (
    <Main id="main" ref={mainRef} >
      <LeftDiv />
      <Card className="card">
        <Animation>
          <Lottie
            options={defaultOptions}
            width="80%"
          />
        </Animation>
        <Info>
          <H1>{header}</H1>
          <P>
            When I started studying in college, I realized my most favorite field in computer is front-end development.
            Since then, I started experiencing different technologies in this field. I'm passionate and advanterous and I work hard for things that I love.
          </P>
        </Info>
      </Card>
    </Main>
  );
}

export default AboutMe;
