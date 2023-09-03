import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const LoginStyle = styled.div`
    background-image: url("https://res.cloudinary.com/dyarz6hqx/image/upload/v1692369262/backgroundImageMontain_ele2kf.png");
    background-size: cover;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: calc(100vh - 110px);
    justify-content: center;
    align-items: center;
    margin-top: 70px;
    z-index: 0;

    Section{
    border-radius: 2rem;
    border: 2px solid black;
    padding:15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;
    gap: 15px;
    padding: 30px;
    }

    h1{
        max-width: 30%;
        font-size: 25px;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        @media (width<500px){
            font-size: 20px;
        }
    }

    form{
        display: flex;
        flex-direction: column;
        gap: 20px;
        @media (width<500px) {
            gap: 15px;
        }
    }
`
export const ErrorLogin = styled.small`
    color: red;
    font-size: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    list-style: circle;
    @media (width<500px){
        font-size: 15px;
    }
`
export const DontUserStyle = styled(Link)`
    margin: auto;
    text-decoration: none;
    font-size: 17px;
    color: #4FAEC6;
    &:hover{
        text-decoration-line: underline;
    }
    @media (width<500px){
        font-size: 13px;
    }
`

