import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { buttonColor, gray } from "../../Utils/Colors";

export const LoginStyle = styled.div`
    display: flex;
    height: calc(100vh - 110px);
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    Section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #6B6B6B;
    background: ${buttonColor};
    border-radius: 3rem;
    padding: 10px;
    gap: 10px;
    box-shadow: 1px 1px 40px -15px rgb(10, 9, 9);
    }
    form{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
`
export const InputDivStyle = styled.div`
    display: flex;
    align-items: center;
    #user-name{
    background: #C7C7C7;
    border-radius: 0 3rem 3rem 0;
    font-size: 20px;
    padding-left: 15px;
    border: none;
    }
    #password{
    background: #C7C7C7;
    border-radius: 3rem 0 0 3rem ;
    font-size: 20px;
    padding-left: 15px;
    border: none;
    }
    @media (width<500px){
        #user-name{
            font-size: 15px;
        }
        #password{
            font-size: 15px;
        }
    }
`
export const IconsStyle = styled.div`
    border-radius: 50%;
    background:#6B6B6B;
    color: #f0f2f6;
    font-size: 40px;
    font-weight: lighter;
    padding: 0 10px;
    @media (width<500px){
        font-size: 20px;
        padding: 0 5px;
    }
`

export const InputStyle = styled.input`
    background: #C7C7C7;
    border-radius: 0 3rem 3rem 0;
    font-size: 20px;
    padding-left: 15px;
    border: none;
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

export const SubmitStyle = styled.input`
    border-radius: 3rem;
    font-size: 20px;
    font-weight: bolder;
    margin: auto;
    padding: 5px 20px;
    border: 1px solid ${gray};
    cursor: pointer;
    &:hover{
        background: #000;
        color: white;
    }
    @media (width<500px){
        font-size: 17px;
    }
`
export const ErrorLogin = styled.small`
    color: red;
    font-size: 25px;
    font-weight: 400;
    max-width: 350px;
    font-style: italic;
    font-stretch: expanded;
    text-align: center;
    @media (width<500px){
        font-size: 17px;
    }
`

