import React, { useState } from 'react';
import { gsap, Elastic } from 'gsap/all';
import Introduce from '../../components/introduce/introduce';
import AboutMe from '../../components/about-me/aboutMe';
import Timeline from '../../components/timeline/timeline';
import { Hamburger } from './resumeStyle';
import Menu from '../../components/menu/menu';
import Skills from '../../components/skills/skills';

function Resume() {
  const [show, setShow] = useState(false);
  const tl = gsap.timeline();
  const hamburgerChange = () => {
    tl.to(['.main_page', '.introduce'], {
      display: 'none',
      opacity: 0,
      ease:
       Elastic.easeOut.config(2, 0.8),
    }).to('.hamburger_main', {
      display: 'none',
      ease:
       Elastic.easeOut.config(2, 0.8),
    });
    setShow(true);
  };

  const closeMenu = () => {
    console.log('iclose');
    setShow(false);
    tl.to(['.main_page', '.introduce'], {
      display: 'block',
      opacity: 1,
      duration: 1,
      ease:
       Elastic.easeOut.config(2, 0.8),
    }).to('.hamburger_main', {
      display: 'block',
      ease:
       Elastic.easeOut.config(2, 0.8),
    });
  };

  return (
    <div id="main">
      <Hamburger className="hamburger_main" onClick={hamburgerChange}>
        <div className="hamburger" />
      </Hamburger>
      <Menu show={show} closeFun={closeMenu} />
      <div className="main_page">
        <section id="introduce" className="introduce">
          <Introduce />
        </section>
        <section id="about-me">
          <AboutMe />
        </section>
        <section id="timeline">
          <Timeline />
        </section>
        <section id="skills">
          <Skills />
        </section>
      </div>
    </div>
  );
}


Resume.propTypes = {
};

export default Resume;
