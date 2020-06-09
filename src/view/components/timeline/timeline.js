/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import Lottie from 'react-lottie';
import {
  Main, Ul, Li, Content, Time, TimeLine, H3, P, Company, H1, Image, BoxLottie,
} from './timelineStyles';
import Icon from './gmail';
import animationData from './liquid.json';
import motion from './motion.json';


function Timeline(props) {
  const defaultOptions = (anim) => {
    let data = {
      loop: true,
      autoplay: true,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid meet',
      },
    };
    if (anim === 'liquid') {
      data = { ...data, animationData };
      return data;
    }

    data = { ...data, animationData: motion };
    return data;
  };
  const imageUrl = (company) => {
    if (company === 'daft') {
      return [
        './images/vue.png', './images/html.png', './images/css.png',
        './images/git.png', './images/bootstrap.png', './images/axios.png',
      ];
    }
    const url = './imageIt';
    return [
      `${url}/react.png`, `${url}/mapbox.png`, `${url}/redux.png`,
      `${url}/mongo.png`, `${url}/node.png`,
    ];
  };
  const imagesDaft = (company) => {
    if (company === 'daft') {
      return (imageUrl('daft').map((item) => (
        <Image
          src={require(`${item}`)}
        />
      ))
      );
    }
    return (imageUrl('it').map((item) => (
      <Image
        src={require(`${item}`)}
      />
    ))
    );
  };


  return (
    <Main id="main">
      <div>
        <H1>
          Experience
          <Lottie
            style={{ position: 'absolute', top: 36 }}
            options={defaultOptions('liquid')}
            width="100%"
            height={60}
          />
        </H1>
      </div>
      <TimeLine>
        <Ul>
          <Li>
            <Content>
              <H3>Front-End Developer</H3>
              <Company>
                <Icon />
                <span className="spanR">Daft Bros</span>
              </Company>
              <BoxLottie>
                <Lottie
                  options={defaultOptions('motion')}
                  width="100%"
                  height={150}
                />
              </BoxLottie>
              <P>
                I was in charge of implementing the front side of a
                data management system used by doctors in hospital research centers all over Iran.
                The goal was to create a system that could easily be used by doctors who do not know
                how to use new technologies very well.
              </P>
              {imagesDaft('daft')}
            </Content>
            <Time>2019 - Present</Time>

          </Li>
          <Li>
            <Content>
              <H3>
                Full Stack Developer
                <small>(Intern)</small>
              </H3>
              <Company>
                <Icon />
                <span className="span">IT Vision</span>
              </Company>
              <BoxLottie>
                <Lottie
                  options={defaultOptions('motion')}
                  width="100%"
                  height={150}
                />
              </BoxLottie>
              <P>
                Devloped the front-end and
                also the back-end of two seperate applications which tracked the
                location of the employees in the company while they were on duty. The
                first application was used by the employee and the other one was used
                by the company's
                manager.
              </P>
              {imagesDaft('it')}
            </Content>
            <Time>jan 2019</Time>
          </Li>
          <div style={{ clear: 'both' }} />
        </Ul>
      </TimeLine>

    </Main>
  );
}

export default Timeline;
