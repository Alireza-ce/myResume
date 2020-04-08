import React, { useRef } from 'react';
import { gsap, Elastic } from 'gsap/all';
import { useIntersection } from 'react-use';
import {
  Main, ImageBox, Card, Image, Info, Header,
} from './skillsStyles';


function Skills(props) {
  // const [width, setWidth] = useState(window.innerWidth);
  // const handleResize = () => {
  //   setWidth(window.innerWidth);
  // };
  // useEffect(() => {
  //   window.addEventListener('resize', handleResize);
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // });

  const mainRef = useRef(null);
  const intersection = useIntersection(mainRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  });

  intersection && intersection.intersectionRatio < 0.5
    ? gsap.to('.card', { opacity: 0, scale: 0.8, duration: 0.5,stagger:0.1})
    : gsap.to('.card', { opacity: 1, scale: 1, duration: 1,stagger:0.1 });


  return (
    <Main id="main" ref={mainRef} >
      <Header>
        SKILLS
      </Header>
      <ImageBox>
        <Card className="card">
          <Image src={require('./vue.png')} />
          <Info> vue js</Info>
        </Card>
        <Card className="card">
          <Image src={require('./react.png')} />
          <Info> react js</Info>
        </Card>
        <Card className="card">
          <Image src={require('./js.png')} />
          <Info> js</Info>
        </Card>
        <Card className="card">
          <Image src={require('./redux.png')} />
          <Info> redux </Info>
        </Card>
        <Card className="card">
          <Image src={require('./git.png')} />
          <Info> git </Info>
        </Card>
        <Card className="card">
          <Image src={require('./css.png')} />
          <Info> css</Info>
        </Card>
        <Card className="card">
          <Image src={require('./html.png')} />
          <Info> html</Info>
        </Card>
      </ImageBox>
    </Main>
  );
}

export default Skills;
