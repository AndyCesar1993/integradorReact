import { styled } from "styled-components";

export const InputShopStyle = styled.form`
    border-radius: 2rem;
    border: 2px solid black;
    padding:15px;
    display: flex;
    flex-direction: column;
    gap:15px;
    min-height: 70vh;
    z-index: 0;
    .textField{
        z-index: 0;
    }
    @media (width<500px){
        label{
            font-size: 12px;
        }
    }
`

export const InputPhoneStyle = styled.div`
    display: flex;
    width: auto;
    gap: 15px;
    .inputNumber{
        width: 50%;
        font-size: 15px;
        padding-left: 10px;
    }
    .selectCountry{
        width: 45%;
    }
    @media (width<900px){
        .inputNumber{
            width: 70%;
        }
    }
    @media (width<500px){
        gap: 10px;
    }
`
export const ErrorShop = styled.small`
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