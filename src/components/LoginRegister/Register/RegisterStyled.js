import { styled } from "styled-components";
import { grayDark } from "../../Utils/Colors";

export const RegisterStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    Section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #6B6B6B;
    background: ${grayDark};
    border-radius: 3rem;
    padding: 10px;
    gap: 10px;
    margin: 60px;
    box-shadow: 1px 1px 40px -15px rgb(10, 9, 9);
    }
    form{
        display: flex;
        flex-direction: column;
        align-items:  center;
        gap: 20px;
    }
`
export const ErrorRegister = styled.small`
    color: red;
    font-size: 25px;
    font-weight: 400;
    max-width: 350px;
    font-style: italic;
    font-stretch: expanded;
    text-align: center;
    &:hover{
        text-decoration-line: underline;
    }
    @media (width<500px){
        font-size: 13px;
    }
`
export const InputContRegister = styled.div`
    display: flex;
    align-items: center;
`
export const InputLeftRegister = styled.input`
    background: #C7C7C7;
    border-radius: 0 3rem 3rem 0;
    font-size: 20px;
    padding-left: 15px;
    border: none;
    ::placeholder{
        color: #00222E;
        padding-left: 15px;
    }
    @media (width<500px){
        font-size: 15px;
    }
`
export const InputRightRegister = styled.input`
    background: #C7C7C7;
    border-radius: 3rem 0 0 3rem ;
    font-size: 20px;
    padding-left: 15px;
    border: none;
    ::placeholder{
        color: #00222E;
        padding-left: 15px;
    }
    @media (width<500px){
        font-size: 15px;
    }
`





