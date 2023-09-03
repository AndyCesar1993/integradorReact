import { styled } from "styled-components";


export const ValidateContainerStyle = styled.div`
    background-image: url("https://res.cloudinary.com/dyarz6hqx/image/upload/v1692369262/backgroundImageMontain_ele2kf.png");
    background-size: cover;
    height: calc(100vh - 110px);
    margin-top: 70px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    z-index: 0;

    h2{
        max-width: 30%;
        font-size: 25px;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    @media (width<550px) {
        flex-direction: column;
        h2{
            font-size: 17px;
            max-width: 50%;
            text-align: center;
        }
    }
`

export const InputValidateStyle = styled.form`
    border-radius: 2rem;
    border: 2px solid black;
    padding:15px;
    display: flex;
    flex-direction: column;
    background: white;
    gap: 15px;
    padding: 30px;
`

export const ErrorValidate = styled.small`
    margin: auto;
    align-items: center;
    max-width: 300px;
    color: red;
    font-size: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    list-style: circle;
    @media (width<550px){
        font-size: 15px;
    }
`