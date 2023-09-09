import { styled } from "styled-components";
import { gray } from "../../Utils/Colors";


export const ProductCardStyle = styled.div`
    display: flex;
    border: 2px solid ${gray};
    border-radius: 3rem;
    padding: 15px;
    width: fit-content;
    gap: 10px;

    @media (width < 400px){
        flex-direction: column;
        gap: 0;
    }

`
export const ProductCardInfoStyle = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    padding: 15px;
    gap: 15px; 

    img{
        width: 300px;
        margin: auto;
        cursor: zoom-in;
    }

    h2{
        font-style: italic;
        font-weight: bolder;
        font-size: 25px;
    }
    @media (width<770px){
        img{
            width: 200px;
        }
        h2{
            font-size: 17px;
        }

        button{
            font-size: 10px;
        }
    }
    @media (width <500px){
        img{
            width: 150px;
        }
        h2{
            font-size: 12px;
        }
    }
`
export const ProductCardDescriptionStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    padding:15px;

    h3{
        font-size: 20px;
    }

    span{
        font-weight: bold;
        font-style: italic;
        margin-left: 7px;   
    }

    p{
        font-size: 17px;
        max-width: 250px;
    }
    .ButtonClose{
        margin-left: auto;
        border-radius: 50%;
        padding: 2px;
        min-width: fit-content;
    }
    @media (width<770px){
        h3{
            font-size: 13px;
        }
        span{
            font-size: 12px;
        }
        p{
            font-size: 12px;
        }
        .ButtonClose svg{
            font-size: 15px;
        }
    }
`

export const ViewImgStyle = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 4;
    backdrop-filter: blur(10px);

    img{
        transform: scale(2);
        cursor: zoom-out;
        border-radius: 1rem;
    }
`
