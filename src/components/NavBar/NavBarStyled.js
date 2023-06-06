import { styled } from "styled-components";
import { borderButton, gray, grayDark } from "../Utils/Colors";

export const HeaderStyle = styled.header`
    display: flex;
    width: 100%;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    margin: 0;
    z-index: 1;
    justify-content: space-around;
    align-items: center;
    padding:10px;
    background: ${grayDark};
    border-bottom: 0.1rem solid ${gray};
    .menuIcon{
        color: white;
        display: none;
        cursor: pointer;
        margin-right: 30px;
        @media (width <700px){
            display: flex;
        }
    }


`
export const LogoStyle = styled.div`
    display:flex ;
    width: fit-content;
    align-items: center;
    justify-content: center;
    background:white;
    gap: 10px;
    border-radius: 50%;
    padding: 15px;
    box-shadow: 2px 2px 15px 1px black;

    h3{
        font-style: italic;
        font-weight: 400;
        font-size: 15px
    }

    img{
        width: 15px;
    }
`

export const NavStyle = styled.nav`
    ul{
        display: flex;
        justify-content: space-around;
    }

    li{
        cursor: pointer;
        position: relative;
        margin: 0 20px;
        font-weight: 700;
        font-size: 15px;
    }
    :hover{
        color: ${borderButton};
        } 


    a{
        display: flex;
        flex-direction: column;
        color: white;
        align-items: center;
        text-decoration: none;
    }
    .CountShop{
        position:absolute;
        right:-17px;
    }
    @media (width < 700px){
        display: ${({ open }) => (open ? 'none' : 'flex')};
        ul{
            flex-direction: column;
            position: fixed;
            top: 68px; 
            left: 0;
            background: #B6B1B1 ;
            height: 84%;
            width: 100%;
            justify-content: center;
            align-items: flex-start;
            gap: 30px;
        }
        li{
            display: flex;
            border-bottom:1.5px solid black;
            width: 70%;
            padding: 0 0 15px 0;
        }
        .CountShop{
            right: 100%;
        }
    }

`

export const CountShopStyle = styled.small`
    background: red;
    color: white;
    border-radius: 50%;
    padding: 4px;
    position: absolute;
    top: -5px;
    right: -5px;
`

export const LoginStyle = styled.div`
margin-right: 30px;
    svg{
        color: white;
    }
    p{
        cursor: pointer;
    }
    .UserIcon{
        font-size: 30px;
        cursor: pointer;
    }
    @media( width >700px) and (width < 800px){
        p{
            display: none;
        }
    }
    @media (width <500px){
        margin-right: 0;
    }
`
export const LoginAvatarStyle = styled.div`
    color: white;
    font-weight: 500;
    display: flex;
    gap:5px;
    align-items: center;
    justify-content: center;
    position: relative;

`


