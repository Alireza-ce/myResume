/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import CallLogo from './call';
import Gmail from './gmail';
import Icons from './icons';
import styles from './introduceStyle';
import image from '../../../assets/me.png';


function Introduce(props) {
  const { classes } = props;
  return (
    <div id="main" className={classes.root}>
      <div className={classes.card}>
        <div className={classes.content}>
          <p className={`animated ${classes.hello} fadeInLeft `}>Hello</p>
          <p className={`animated ${classes.name} fadeInRight `}>
            I'm  Ali Reza Rezaei

          </p>
          <p className={`animated ${classes.developer} flash `}>
            Front End Developer
          </p>
          <div className={`animated ${classes.contact} fadeInUp `}>
            <CallLogo />
            <p className={classes.info}>+98 939 596 6186</p>

          </div>
          <div className={`animated ${classes.contactMail} fadeInUp `}>
            <Gmail />
            <p className={classes.info}>rezaei.alireza.ce@gmail.com</p>
          </div>
          <div>
            <Icons className="animated fadeInDown" >
              <li><a href="www.varzesh3.com"><i className="fa fa-paper-plane" aria-hidden="true" /></a></li>
              <li><a href="#"><i className="fa fa-gitlab" aria-hidden="true" /></a></li>
              <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
              <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
            </Icons>
          </div>

        </div>
        <div className={classes.image}>
          <img className={classes.photo} src={image} alt="myPix" />
        </div>

      </div>
    </div>
  );
}


Introduce.propTypes = {
  classes: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(Introduce);
