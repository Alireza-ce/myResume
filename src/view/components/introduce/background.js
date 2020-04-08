import React, { forwardRef, useEffect, useRef } from 'react';
import { gsap } from 'gsap/all';
import styled, { keyframes } from 'styled-components';

const Svg = styled.svg`
	position:absolute;
	top:0;
	right:0;
	height:100%;
	opacity:1;
	@media (max-width: 1000px) {
      right:unset;
   }
   @media (max-width: 768px) {
      right: -22px;
   }
   @media (max-width: 768px) {
		display:none;
   }
	`;

const background = forwardRef((props, ref) => {
  let sPath = useRef(null);
  let fPath = useRef(null);
  const tl = gsap.timeline();
  useEffect(() => {
    tl.from(sPath, {
      y: 100, duration: 2, opacity: 0, delay: 3,
    })
      .from(fPath, { opacity: 0, duration: 1 }, '-=3');
  }, []);
  return (
    <Svg
      ref={ref}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 450 450"
      enableBackground="new 0 0 450 450"
      xmlSpace="preserve"
    >
      <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="-9.094947e-13" y1="225" x2="449.8232" y2="225">
        <stop offset="0" style={{ 'stop-color': '#0074AF' }} />
        <stop offset="1" style={{ 'stop-color': '#1DFFE4' }} />
      </linearGradient>
      <path
        ref={(el) => (fPath = el)}
        className="st0"
        style={{ fill: 'url(#SVGID_1_)' }}
        d="M449.82,448.85V1.15H4.94c0,0-32.3,87,68.25,48.33c100.55-38.67,84.97,14.7,71.41,41.58
		c-14.7,29.14-34.31,46.88-32.56,75.71c2.3,37.82,48.48,39.2,87.21,63.24c93.51,58.06-12.13,9.7-47.76,37.47
		c-35.63,27.76-13.9,48.45,35.39,46.33c106.45-4.58,71.14,38.63,53.36,58.2s-14.72,64.3,69.06,34.06s52.28,42.78,52.28,42.78"
      />
      <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="268.4711" y1="-210.9023" x2="419.5661" y2="512.86">
        <stop offset="0" style={{ 'stop-color': '#0074AF' }} />
        <stop offset="1" style={{ 'stop-color': '#1DFFE4' }} />
      </linearGradient>
      <path
        ref={(el) => (sPath = el)}
        style={{ fill: 'url(#SVGID_2_)' }}
        className="st1"
        d="M449.91,448.92V1.22h-98.84c0,0-120.38-7.53-141.81,87.39c-23.35,103.43,51.34,152.07,76.67,128.32
		c25.34-23.74,26.48-56.01-12.96-77.31s-35.47-86.93,50.76-70.55s96.21,148.05,33.73,179.55s-47.25,68.59,19.95,108.01
		c67.2,39.42,30.45,92.28,30.45,92.28"
      />
    </Svg>

	  );
});


export default background;
