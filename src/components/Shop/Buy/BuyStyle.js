import styled from "styled-components";


export const BuyContainer = styled.div`
    display: flex;
    background-image: url("https://res.cloudinary.com/dyarz6hqx/image/upload/v1692369262/backgroundImageMontain_ele2kf.png");
    background-size: cover;
    background-position: center;
    position: fixed;
    top: 65px;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: scroll;
    padding: 30px;
    gap: 30px;
    align-items: center;
    flex-direction: column;


    .shippingDetails{
        h3{
            text-align: center;
        }
        tr{
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: 0 15px;

            @media (width < 720px) {
                flex-direction: column;
                gap: 5px;
                align-items: flex-start;
            }
        }
        thead{
            font-weight: bolder;
            font-size: 15px;
        }
    }

    @media (width < 520px) {
        h2{
            font-size: 20px;
        }
        h3{
            font-size: 17px;
        }
        thead{
            font-size: 13px;
        }
        tbody{
            font-size: 12px;
        }        
    }
`

export const TableBuyStyle = styled.div`
        background: white;
        border: 2px solid black;
        border-radius: 1rem;
        box-shadow: 0 0 15px 5px white;

        h3{
            text-align: center;
        }

        @media (width < 520px) {
        thead{
            font-size: 13px;
        }
        tbody{
            font-size: 12px;
        }        
    }
`
