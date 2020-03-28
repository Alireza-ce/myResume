import React, {useState,useEffect} from 'react';
import Lottie from 'react-lottie';
import {
  Main
} from './skillsStyles';



function Skills(props) {
  const [width, setWidth]= useState(window.innerWidth);
  const handleResize = () => {
    setWidth(window.innerWidth)
  }
  useEffect(() => {  
    window.addEventListener('resize',handleResize);
    return () => {
      window.removeEventListener('resize',handleResize);
    }
  });
  

  return (
    <Main id="main">
      <h1>
        {width}
      </h1>
    </Main>
  );
}

export default Skills;
