import { styled } from "styled-components";

export const AboutUsStyle = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 15px;
    margin-top:80px;
    .AboutUsImg{
        width: 45%;
    }

    .slide img{
        width: 30%;
    }

    @media (width < 770px){
        flex-direction: column-reverse;
        align-items: center;
        margin-top: 50px;
        .AboutUsImg{
            width: 60%;
        }
    }
    @media (width <500px){
        .AboutUsImg{
            width: 90%;
        }
    }
`

export const AbouUsInfoStyle = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    gap: 20px;
    p{
        font-weight: 400;
        font-size: 1rem;
        text-align: center;
    }
    @media (width< 770px){
        width: 80%;
        padding-top: 15px;
        h1{
            font-size: 23px;
        }
        p{
            font-size: 15px;
        }
    }

`