/* eslint-disable react/no-unescaped-entities */
/* eslint-disable global-require */
/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable import/no-named-as-default */
import React, { useRef, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { gsap, Elastic } from 'gsap/all';
import CallLogo from './call';
import Gmail from './gmail';
import { Icons } from './icons';
import Background from './background';
import { styles } from './introduceStyle';


const Introduce = (props) => {
  const { classes } = props;
  let bg = useRef(null);
  let box = useRef(null);
  let name = useRef(null);
  let content = useRef(null);
  let job = useRef(null);
  let gmail = useRef(null);
  let call = useRef(null);
  let icons = useRef(null);
  // let div = CSSRulePlugin.getRule(".hi")
  const tl = gsap.timeline();
  useEffect(() => {
    tl.to(box, {
      y: 0,
      delay: 1,
      duration: 1,
      opacity: 1,
      ease:
       Elastic.easeOut.config(2, 0.8),
    })
      .to(name, {
        y: 0,
        duration: 1,
        opacity: 1,
        ease:
        Elastic.easeOut.config(1, 0.8),
      }, '-=.5')
      .to(job, {
        y: 0,
        duration: 1,
        opacity: 1,
        ease:
          Elastic.easeOut.config(1, 0.8),
      }, '-=.5')
      .to(call, {
        y: 0,
        duration: 1,
        opacity: 1,
        ease:
              Elastic.easeOut.config(1, 0.8),
      })
      .to(gmail, {
        y: 0,
        duration: 1,
        opacity: 1,
        ease:
                Elastic.easeOut.config(1, 0.8),
      }, '-=.5')
      .to(icons, {
        y: 0,
        duration: 1,
        opacity: 1,
        ease:
                  Elastic.easeOut.config(1, 0.8),
      }, '-=.5')
      .to(bg, {
        y: 0,
        duration: 2,
        opacity: 1,
        scale: 1,
        ease:
            Elastic.easeOut.config(1, 0.8),
      }, '-=2');
  });


  return (
    <div  className={classes.root}>
      <div className={classes.container}>
        <img className={classes.backInfo} ref={(el) => (bg = el)} src={require('./backinfo.png')} alt="front end developer" />
        <div className={classes.card}>
          <div className={classes.content} ref={(el) => (content = el)}>

            <p className={` ${classes.hello} `} ref={(el) => (box = el)}>Hi</p>
            <div>
              <p className={`alireza ${classes.name} `} ref={(el) => (name = el)}>
                I'm  Ali Reza Rezaei

              </p>
              <p className={`${classes.developer} `} ref={(el) => (job = el)}>
                Front End Developer
              </p>
            </div>
            <div className={` ${classes.contact}  `} ref={(el) => (call = el)}>
              <CallLogo />
              <p className={classes.info}>+98 939 596 6186</p>

            </div>
            <div className={` ${classes.contactMail}  `} ref={(el) => (gmail = el)}>
              <Gmail />
              <p className={classes.info}>rezaei.alireza.ce@gmail.com</p>
            </div>
            <div>
              <Icons ref={(el) => (icons = el)}>
                <li><a href="https://t.me/Alirezai19"><i className="fa fa-paper-plane" aria-hidden="true" /></a></li>
                <li><a href="https://gitlab.com/AlirezaRezaei"><i className="fa fa-gitlab" aria-hidden="true" /></a></li>
                <li><a href="https://linkedin.com/in/alireza-rezaei-ce"><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
              </Icons>
            </div>
          </div>
        </div>
        <div className={classes.imageDiv}>
          {/*   <svg src={require('./background.svg')}></svg> */}
          <img className={classes.image} ref={(el) => (bg = el)} src={require('./sitDeveloper.png')} alt="front end developer" />
          <Background />
        </div>
      </div>
    </div>
  );
};


Introduce.propTypes = {
  classes: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(Introduce);
