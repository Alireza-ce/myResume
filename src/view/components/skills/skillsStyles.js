/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Main = styled.div`
    min-height:100%;
    position:relative;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: center;
    background: linear-gradient(to right,#0DB5C8,#1AEFDE);
`;

export const ImageBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top:0px;
    width:90%;
    margin-left: 5%;
    margin-bottom: 16px;
   
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    margin-top: 4px;
    width: 150px;
    @media (max-width: 768px) {
       width: 100px;
    }  
`;


export const Image = styled.img`
   width: 80px;
   height:80px;
   @media (max-width: 768px) {
    width: 50px;
    height:50px;
    }  
`;

export const Info = styled.p`
   font-family: Iceland;
   font-weight: bold;
   color: #f8f8f8;
   font-size: 32px;
   margin-top:8px; 
   @media (max-width: 768px) {
    font-size: 16px;
    }  
`;

export const Header = styled.h1`
   margin-top: 8px;
   font-family:"Baloo Da 2";
   font-weight: bold;
   color: #f8f8f8;
   font-size: 32px;
`;