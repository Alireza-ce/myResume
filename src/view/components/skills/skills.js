import React from 'react';
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


  return (
    <Main id="main">
      <Header>
        SKILLS
      </Header>
      <ImageBox>
        <Card>
          <Image src={require('./vue.png')} />
          <Info> vue js</Info>
        </Card>
        <Card>
          <Image src={require('./react.png')} />
          <Info> react js</Info>
        </Card>
        <Card>
          <Image src={require('./js.png')} />
          <Info> js</Info>
        </Card>
        <Card>
          <Image src={require('./redux.png')} />
          <Info> redux </Info>
        </Card>
        <Card>
          <Image src={require('./git.png')} />
          <Info> git </Info>
        </Card>
        <Card>
          <Image src={require('./css.png')} />
          <Info> css</Info>
        </Card>
        <Card>
          <Image src={require('./html.png')} />
          <Info> html</Info>
        </Card>
      </ImageBox>
    </Main>
  );
}

export default Skills;
