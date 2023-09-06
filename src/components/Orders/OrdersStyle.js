import { styled } from "styled-components";
import { gray } from "../Utils/Colors";


export const OrderContaynerStyle = styled.div`
    display: flex;
    align-items: center;
    padding: 80px 20px;
    @media (width<800px) {
        justify-content: center;
    }
`

export const OrderStyle = styled.div`
border-radius: 2rem;
border: 2px solid black;
padding:15px;
display: flex;
flex-direction: column;
gap:15px;
width: 100%;
height: fit-content;
@media (width<800px) {
    width: fit-content;
}
`

export const OrderCardStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 2rem;
    padding: 10px 15px;
    border: 3px solid ${gray};

    @media (width<800px){
        td, th{
            font-size: 12px;

        }
        
    }
    @media (width<550px){
        td, th{
            font-size: 10px;
            padding: 5px;
        }
        
    }
`

export const DividerStyle = styled.div`
    width: 100%;
    height: 2px;
    background-color: ${gray};
    border-radius: 2rem;
`

export const SpamStyle = styled.small`
    font-weight: bolder;
    padding-right: 10px;
    font-size: 13px;
`

export const InfoOrderStyle = styled.div`
    display: flex;
    justify-content: space-around;
    font-weight: bolder;
    font-size: 13px;
    width: 100%;
    span{
        color: red;
    }

    @media (width<450px) {
        font-size: 11px;
    }
`
