import styled, { keyframes } from 'styled-components';

const anim = keyframes`
0%{
    stroke-dashoffset: 0;
}
40%{
    stroke:rgb(0, 225, 255);
    stroke-dashoffset: 1360;
}
80%{
    stroke-dashoffset: 2720;
    stroke:rgb(0, 225, 255);
    fill: transparent;
}
100%{
    stroke-dashoffset: 2720;
   stroke: transparent;
}
`;

const Svg = styled.svg`
width:  50px;
@media (max-width: 768px) {
    width:  42px;
}

path{
    stroke-width: ${(props) => props.strokeWidth || '10px'};
    stroke:transparent;
    stroke-dasharray: 1360;
    stroke-dashoffset: 0;
}

&:hover path {
  animation: ${anim} 2s linear forwards;
}
`;


export default Svg;
