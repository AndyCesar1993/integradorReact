import { styled } from "styled-components";
import { gray, textGray } from "../Utils/Colors";

export const ProductContainerStyle = styled.div`
    padding:80px 15px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media (width < 500px){
        nav ul li button{
            font-size: 12px;
        }
    }
    @media (width < 400px){
        padding: 60px 10px;
        gap: 10px;
        h1{
            font-size: 17px;
        }
        nav ul li button{
            font-size: 10px;
        }
    }
    
`

export const FormStyle = styled.form`
    display: flex;
    
    select{
        color:${textGray};
        border: 2px solid ${gray};
        cursor: pointer;
        font-size: 20px;
        height: 45px;

    }
    @media (width < 770px){
        display: grid;
        grid-template-columns: 6fr 1fr;
        grid-template-rows: auto auto auto;
        max-width: 400px;
    }
    @media (width< 500px){
        max-width: 200px;
    }
`
export const SearchNameStyle = styled.input`
    border-radius: 3rem 0px 0px 3rem;
    color: ${textGray};
    border: 2px solid ${gray};
    padding-left: 10px;
    font-size: 20px;
    text-align: center;

    ::placeholder{
        color: ${textGray};
    }
    @media (width < 770px){
        grid-area: 1 / 1 / 2 / 2;
        border-radius: 0;
    }
    @media (width < 500px){
        font-size: 15px;
    }
`
export const FilterStyle = styled.button`
    color:${textGray};
    padding: 5px;
    border: 2px solid ${gray};
    cursor: pointer;
    font-size: 20px;
    @media (width < 770px){
        grid-area: 2 / 1 / 3 / 2;
    }
    @media (width < 500px){
        font-size: 15px;
    }
`
export const SubmitStyle = styled.button`
    color:${textGray};
    background:${gray};
    border: none;
    padding: 10px;
    border-radius: 0 3rem 3rem 0;
    font-size: 20px;
    cursor: pointer;
    @media (width < 770px){
        grid-area: 1 / 2 / 4 / 3;
    }
`
export const SearchProductFilterStyle = styled.div`
    @media (width < 770px){
        grid-area: 3 / 1 / 4 / 2;
        display: grid;
        grid-template-columns: auto auto auto;
        select{
            font-size: 21px;
            @media (width < 500px){
                font-size: 15px;
            }
        }
    }
`

export const ProductCardsContainerStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    padding: 30px;
    @media (width <770px){
        padding: 20px 15px;
    }
    @media (width <500px){
        padding: 10px 10px;
        gap: 15px;
    }
`
export const ErrorStyle = styled.p`
    margin: 60px auto;
    color: red;
    font-size: 25px;
    @media (width <500px){
        font-size: 15px;
    }
`