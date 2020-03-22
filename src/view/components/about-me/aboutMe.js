import React from 'react';
import Lottie from 'react-lottie';
import {
  Main, LeftDiv, Card, Info, P, Animation, H1,
} from './aboutMeStyles';
import animationData from './character.json';


function aboutMe(props) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid meet',
    },
  };

  return (
    <Main id="main">
      <LeftDiv />
      <Card>
        <Animation>
          <Lottie
            options={defaultOptions}
            width="80%"
          />
        </Animation>
        <Info>
          <H1>About Me</H1>
          <P>
            When I started studying in college, I realized my most favorite field in computer is front-end development.
            Since then, I started experiencing different technologies in this field. I'm passionate and advanterous and I work hard for things that I love.
          </P>
        </Info>
      </Card>
    </Main>
  );
}

export default aboutMe;
