import styled, { keyframes } from 'styled-components';


const anim = keyframes`
0%{
    stroke-dashoffset: 0;
}
40%{
    stroke:rgb(0, 0, 0);
    stroke-dashoffset: 1360;
}
80%{
    stroke-dashoffset: 2720;
    stroke:rgb(0, 0, 0);
    fill: transparent;
}
100%{
    stroke-dashoffset: 2720;
   stroke: transparent;
}
`;

export const Svg = styled.svg`
    width:  36px;
    path{
        stroke-width: 10px;
        stroke:transparent;
        stroke-dasharray: 1360;
        stroke-dashoffset: 0;
    }
`;

export const Main = styled.div`
    position:relative;
    display:flex;
    background: #F8F8F8;
    flex-direction:column;
`;
export const Time = styled.div`
    font-family: Iceland;
    transition-delay: .1s;
`;

export const TimeLine = styled.div`
position:relative;
margin:18px auto;
padding: 40px 0;
width: 1000px;
overflow:hidden;
box-sizing: border-box;
&::before {
  content: '';
  position: absolute;
  left: 50%;
  width:2px;
  height: 100%;
  background: #0DB6C8;
  @media (max-width: 768px) {
      top:0px;
        left: 20px;
   }
}
@media(max-width: 1000px){
    width: 100%;
}
@media (max-width: 768px) {
    width: 100%;
    }
    
`;

export const Company = styled.div`
   display:flex;
   margin: 0;
   font-family:"Baloo Da 2";
   align-items:center;
   .span{
       padding-left:8px
   }
   .spanR{
       padding-right:8px
     
   }
   @media (max-width: 768px) {
    .spanR{
       padding-left:8px
     
   }
   }
`;

export const Ul = styled.ul`
margin: 0;
padding: 0;
`;

export const BoxLottie = styled.div`
    position: absolute;
    top:50px;
    display:none;
        `;

export const Li = styled.li`
list-style: none;
position: relative;
margin-top:4px;
width:50%;
padding: 20px 40px;
box-sizing: border-box;
&:hover {
    ${Svg} path{
        animation: ${anim} 2s linear forwards;
    }
    &:nth-child(odd) , &:nth-child(even) {
        ${BoxLottie} {
        display:block;
    }
            ${Time} {
            background: #0DB6C8;
            box-shadow: 0 0 0 2px rgb(13,182,200);
        }
        &::before{
        background: #18E4DA;
    }
}
}
&:nth-child(odd){
    @media (max-width: 768px) {
        width: 100%;
        text-align:left;
        padding-bottom:50px
   }
    float: left;
    text-align: right;
    clear:both;

    &::before{
        content: '';
        transition-delay: .1s;
        position: absolute;
        top: 28px;
        right: -6px;
        width: 10px;
        height: 10px;
        background: #283593;
        border-radius: 50%;
        box-shadow: 0 0 0 1px rgba(68, 68, 68, 0.3);
        @media (max-width: 768px) {
            top: -18px;
            left: 16px;
         }

    }
    ${BoxLottie} {
        right:100px;
        @media (max-width: 768px) {
            left: 100px;
            right:inherit;
         }
    }
    ${Time} {
        position: absolute;
        top: 18px;
        right: -165px;
        margin: 0;
        padding: 8px 16px;
        background: #283593;
        color: #fff;
        border-radius: 18px;
        box-shadow: 0 0 0 2px rgba(68, 68, 255, 0.3);
        @media (max-width: 768px) {
            top: -30px;
            left: 50px;
            right: inherit;
         }

    }
    ${Company}{
        @media (max-width: 768px) {
            display:flex;
        flex-direction:row;
   }
        display:flex;
        flex-direction:row-reverse;
    }
}
&:nth-child(even){
    @media (max-width: 768px) {
        width: 100%;
        text-align:left;
        padding-bottom:50px
   }
    float: right;
    text-align: left;
    clear:both;
  
    &::before{
        content: '';
        transition-delay: .1s;
        position: absolute;
        top: 28px;
        left: -4px;
        width: 10px;
        height: 10px;
        background: #283593;
        border-radius: 50%;
        box-shadow: 0 0 0 1px rgba(68, 68, 68, 0.3);
        @media (max-width: 768px) {
            top: -18px;
            left: 16px;
         }
    }
    ${BoxLottie} {
        left:100px
    }
    ${Time} {
        position: absolute;
        top: 18px;
        left: -165px;
        margin: 0;
        padding: 8px 16px;
        background: #283593;
        color: #fff;
        border-radius: 18px;
        box-shadow: 0 0 0 2px rgba(68, 68, 255, 0.3);

        @media (max-width: 768px) {
            top: -30px;
            left: 50px;
            right: inherit;
         }
    }

}
`;

export const H3 = styled.h3`
font-family:"Baloo Da 2";
margin: 0;
padding: 0;
font-weight: 600;
color: #080825;
transition-delay: .1s;
${Li}:hover & {
    color: #C51162;
}
`;

export const P = styled.p`
font-family:"Baloo Da 2";
margin: 10px 0 0;
padding: 0;
transition-delay: .1s;
${Li}:hover & {
    color: #1A237E;
}
`;

export const Content = styled.div`
    padding:8px 16px 16px 8px;
    border-radius:18px;
    transition-delay:.1s;
    ${Li}:hover  &{
        background: #F5F5F5;
        box-shadow:2px 2px 0 1px rgba(201,201,255,0.3);
    }
`;


export const H1 = styled.h1`
position: relative;
text-align:center;
font-family:"Baloo Da 2";
margin: 0;
text-align:center;
padding-top: 32px;
font-weight: 600;
transition-delay: .1s;
color: #0176B0;
${Li}:hover & {
    color: #ffffff;
}
`;

export const Image = styled.img`
    width: 30px;
    height: 30px;
    padding:8px
`;
