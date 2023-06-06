import { styled } from "styled-components";

export const ShopStyle = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 80px;
    margin-bottom: 40px;
    @media (width<900px){
        flex-direction: column;
        gap: 20px;
        padding: 20px;
    }
    @media (width<500px){
        h2{
            font-size: 17px;
        }
    }
`