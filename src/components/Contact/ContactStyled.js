import { styled } from "styled-components";

export const ContactStyle = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 50% 20% 30%;
    padding: 15px;
    gap: 15px;
    margin-top: 80px;;
    margin-bottom: 30px;
    align-content: center;

    h2{
        font-weight: 700;   
        font-size: 20px;
        @media (width<1100px){
            font-size: 17px;
        }
    }
    @media (width<900px){
        grid-template-columns: 50% 50%;
        grid-template-rows: 15% 25% 60%;
        gap: 5px;
    }
    @media (width<500px){
        display: flex;
        flex-direction: column;
        gap: 20px;
        h2{
            font-size: 15px;
        }
    }
`
export const ContactanosStyle = styled.div`
    grid-area: 1 / 1 / 2 / 2;
    display: flex;
    flex-direction: column;
    gap: 15px;
    p{
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 400;
        
    }
    svg{
        color: gray;
        :hover{
            color: black;
        }
    }
    @media (width<1100px){
        font-size: 15px;
    }
    @media (width<900px){
        grid-area: 1 / 1 / 3 / 2;
    }
    @media (width<500px){
        font-size: 13px;
    }
`

export const RedesStyle = styled.div`
    grid-area: 2 / 1 / 3 / 2;
    display: flex;
    flex-direction: column;
    gap: 15px;
    div{
        display: flex;
        gap: 20px;
    }
    @media (width<1100px){
        img{
            width: 40px;
        }
    }
    @media (width<900px){
        grid-area: 1 / 2 / 2 / 3;
    }
`

export const PagosStyle = styled.div`
    grid-area: 3 / 1 / 4 / 2;
    img{
        width: 60px;
        height: 40px;
    }

    div{
        display: flex;
        flex-wrap: wrap;
        padding: 15px;
        gap: 10px;
    }
    @media (width<1100px){
        img{
            width: 50px;
            height: 35px;
        }
    }
    @media (width<900px){
        grid-area: 2 / 2 / 3 / 3;
    }
    @media (width<500px){
        grid-area: 1 / 2 / 2 / 3;
        img{
            width: 45px;
            height: 35px;
        }
    }
`
export const MapStyle = styled.div`
    display: grid;
    grid-area: 1 / 2 / 4 / 3;
    place-content: center;
    .mapStyle{
        width: 500px;
        height: 450px;
        @media (width<1100px){
            width: 400px;
            height: 350px;
        } 

    }  
    @media (width<900px){
        grid-area: 3 / 1 / 4 / 3;
        .mapStyle{
            width: 700px;
        }
    }
    @media (width<730px){
        .mapStyle{
            width: 400px;
        }
    }
    @media (width<430px){
        .mapStyle{
            width: 300px;
            height: 250px;
        }
    }

`
