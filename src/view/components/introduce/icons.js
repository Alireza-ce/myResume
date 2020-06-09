import styled from 'styled-components';

export const Hamburger = styled.div`
    cursor:pointer;
    z-index: 1000;
    position: absolute;
    width:20px;
    height:10px;
    top: 32px;
    left: 32px;
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

export const Icons = styled.ul`
    margin-top: 24px;
    padding-left: 24px;
    display: flex;
    transform: translateY(20px);
    opacity: 0;
    li{
    list-style: none;
    }
    li a{
        position: relative;
        width: 40px;
        height: 40px;
        background: linear-gradient(0deg, #ddd,#fff);
        display: block;
        text-align: center;
        margin: 0 4px;
        border-radius: 50%;
        padding: 8px;
        box-sizing: border-box;
        text-decoration: none;
        box-shadow: 0 10px 15px rgb(0, 0, 0,0.3);
        transition: 0.5s;
    }

    li a .fa{
        width: 100%;
        height: 100%;
        display: block;
        background: linear-gradient(0deg, #fff,#ddd);
        border-radius: 50%;
        line-height: calc(40px - 16px);
        font-size: 16px;
        color: #173D7A;
        transition: 0.5s;
    }
    .fa-paper-plane {
    font-size: 13px!important;
    }
    .fa-paper-plane:hover{
        color: #3b28e2;
    } 
    .fa-twitter:hover{
        color:  #00aced;
    }
    .fa-linkedin:hover{
        color:  #007bb6;
    }
    .fa-gitlab:hover{
        color:  #FC6D27;
    }
`;
