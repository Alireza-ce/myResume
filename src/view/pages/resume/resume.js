import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './resumeStyle';
import Introduce from '../../components/introduce/introduce';
import AboutMe from '../../components/about-me/aboutMe'; 

function Resume() {
  return (
    <div id="main">
      <section id="introduce">
        <Introduce />
      </section>
      <section id="about-me">
        <AboutMe />
      </section>
    </div>
  );
}


Resume.propTypes = {
};

export default withStyles(styles, { withTheme: true })(Resume);
