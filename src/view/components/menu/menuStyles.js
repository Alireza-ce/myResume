/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import image from './react.jpg';

export const Main = styled.div`
    opacity:0;
    z-index:0;
    display:none;
    min-height:100vh;
    width: 100%;
    position:absolute;
    top:0px;
    right:0px;
    background:url(${image});
    background-repeat:no-repeat;
    background-size: cover;
    @media (max-width: 768px) {
    }

    .close_button{
        display:flex;
        margin-top:32px;
        margin-left: 64px;
    }

    .close_button .nav{
        display:flex;
        flex:1;
        justify-content:flex-end;
        margin-right:64px;
        font-family: 'Courgette'; 
        font-size:16px;
        color: #F8F8F8;
        opacity:0;
        transform:translateY(-20px);
    }
    .close_button .nav .icon{
        width:16px;
        height:16px;
        margin-right:8px;
    }
    .close_button .image{
        width:30px;
        height:30px;
        opacity:0;
        cursor:pointer;
        transform:translateY(-20px);
    }

    .menu{
        display: flex !important;
        flex-direction:row;
        margin-left:12%;
        margin-top: 64px;
    }
    .menu .navbar , .footers .footer_nav,
    .close_button .nav{
        list-style-type:none;
    }
    .menu .navbar li{
        font-family: 'Courgette'; 
        margin-top:12px;
        font-size:32px;
        color: #F8F8F8;
        transform:translateY(30px);
        opacity:0;
        cursor:default;
        ::after{
            content: "";
            width:0;
            height:10px;
            background: #0EBACA;
            border-radius:4px;
            display:block;
            margin-top: -12px;
            margin-left: 12px;
            transition: width .5s;
        }

        :hover{
            ::after{
                width:40%;
            }
        }
    }

   .footers{
       position:absolute;
       bottom: 0 ;
       width:100%;
      

   }

   .animation{
       width:100%;
       display:flex;
   }

   .footers .footer_nav{
       display:flex;
       @media (max-width: 768px) {
           flex-direction:column;
        }
   }

   .footers .footer_nav li{
        font-family: 'Courgette'; 
        font-size:16px;
        color: #F8F8F8;
        margin-left:32px;
        cursor:default;
        opacity:0;
        transform: translateX(-16px);
        ::after{
            content: "";
            width:0%;
            height:10px;
            background: #0EBACA;
            border-radius:4px;
            display:block;
            
            transition: width .5s;
        }

        :hover{
                transition-duration: .3s;
                ::after{
                    width:100%;
                }
            }
        }

   .footers .footer_nav li:first-child{
        margin-left:0px!important;
        @media (max-width: 768px) {
            margin-left:32px!important;
        }
    }
    .footers .footer_nav li .icon{
        margin-right:8px;
    }




    @media (max-width: 468px) {
        .close_button{
            margin-left: 32px;
        }
    }
`;
