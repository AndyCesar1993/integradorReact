import { styled } from "styled-components";
import { gray, grayDark } from "../Utils/Colors";

export const FooterPStyled = styled.footer`
    position: fixed;
    bottom: 0;
    width: 100%;
    display: grid;
    place-content: center;
    background: ${grayDark} ;
    color: white;
    text-align: center;
    padding: 5px;
    border-top: 0.1rem solid ${gray};
    z-index: 1;
    @media (width < 500px){
        font-size: 12px;
        padding: 10px;
    }
`