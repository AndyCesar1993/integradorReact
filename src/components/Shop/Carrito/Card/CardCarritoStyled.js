import { styled } from "styled-components";
import { gray, grayDark } from "../../../Utils/Colors";

export const ShopCardStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 2rem;
    padding: 10px 15px;
    border: 3px solid ${gray};
    gap: 5px;
    img{
        width: 150px;
    }
    h3{
        text-align: center;
        font-size: 15px;
    }
    @media (width < 500px){
        img{
            width: 80px;
        }
        h3{
            font-size: 10px;
        }
    }
`
export const InfoCardShopStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    small{
        font-weight: bolder;
        font-size: 17px;
        color: ${grayDark};
        @media (width<500px){
            font-size: 13px;
        }
    }
    @media (width<900px) and (width>770px){
        flex-direction: row;
        gap: 20px;
    }
    @media (width<500px){
        div button{
            font-size: 10px;
        }
    }
`