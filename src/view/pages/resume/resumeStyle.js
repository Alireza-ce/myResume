/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Hamburger = styled.div`
    cursor:pointer;
    z-index: 1000;
    position: absolute;
    width:20px;
    height:10px;
    top: 32px;
    left: 64px;
    @media (max-width: 468px) {
      left: 32px;
    }
    :hover{
        .hamburger{
            width: 20px;
                ::before,::after{
                    width: 16px;
            }
        }
      
    }
    .hamburger{
        width: 16px;
        height: 2px;
        background: #17E2D9;
        transition: width .2s;
            ::before , ::after {
                content: '';
                position: absolute;
                width: 20px;
                height: 2px;
                background: #0AA2C1;
                transition: width .2s;
    }

    ::before{
        bottom: 12px;
    }

    ::after{
        top: 4px ;
    }
    }


`;
