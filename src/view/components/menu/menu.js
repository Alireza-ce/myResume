/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable global-require */
/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { gsap, Elastic } from 'gsap/all';
import { Main } from './menuStyles';

function Menu(props) {
  const tl = gsap.timeline();
  const { show, closeFun } = props;
  useEffect(() => {
    console.log('show:', show);
    if (show) {
      tl.to('.menu', {
        opacity: 1,
        duration: 1,
        display: 'block',
        zIndex: 10,
      }).to(['.image', '.nav'], {
        opacity: 1,
        duration: 1,
        y: 0,
        ease: Elastic.easeOut.config(2, 0.8),
      }).to('.li_items', {
        opacity: 1,
        duration: 2,
        y: 0,
        stagger: 0.3,
        ease: Elastic.easeOut.config(2, 0.8),
      }).to('.footer_item', {
        opacity: 1,
        duration: 2,
        x: 0,
        stagger: 0.3,
        ease: Elastic.easeOut.config(2, 0.8),
      }, '-=2');
    }
  }, [show]);

  const closeMenu = async () => {
    await tl.to('.footer_item', {
      opacity: 0,
      duration: 0.3,
      stagger: 0.1,
      reversed: true,
      ease: Elastic.easeOut.config(2, 0.8),
    }).to('.li_items', {
      opacity: 0,
      duration: 0.3,
      stagger: 0.1,
      reversed: true,
      ease: Elastic.easeOut.config(2, 0.8),
    }).to(['.image', '.nav'], {
      opacity: 0,
      duration: 0.2,
      reversed: true,
      ease: Elastic.easeOut.config(2, 0.8),
    }).to('.menu', {
      opacity: 0,
      display: 'none',
      zIndex: -1,
      duration: 0.2,
      ease: Elastic.easeOut.config(2, 0.8),
    });

    document.getElementById('main_menu').style.display = ' none';
    closeFun();
  };

  return (
    <Main className="menu" id="main_menu">
      <div className="close_button">
        <img className="image" src={require('./close.png')} alt="close_button" onClick={closeMenu} />
        <div className="nav">
          <img className="icon" src={require('./phone.png')} alt="front end developer" />
          09395966186
        </div>
      </div>
      <div className="menu">
        <ul className="navbar">
          <li className="li_items">Home</li>
          <li className="li_items">About Me</li>
          <li className="li_items">Experiment</li>
          <li className="li_items">Skills</li>
        </ul>
      </div>
      <div className="footers">
        <ul className="footer_nav">
          <li className="footer_item">
            <img className="icon" src={require('./telegram.png')} alt="front end developer" />
            Alirezai19
          </li>
          <li className="footer_item">
            <img className="icon" src={require('./instagram.png')} alt="front end developer" />
            Alireza_rezaei
          </li>
          <li className="footer_item">
            <img className="icon" src={require('./twitter.png')} alt="front end developer" />
            Alireza_rezaei
          </li>
        </ul>
      </div>
    </Main>
  );
}

Menu.propTypes = {
  show: PropTypes.bool.isRequired,
  closeFun: PropTypes.func.isRequired,
};


export default Menu;
