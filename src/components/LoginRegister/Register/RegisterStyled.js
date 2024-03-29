import { styled } from "styled-components";

export const RegisterStyle = styled.div`
    background-image: url("https://res.cloudinary.com/dyarz6hqx/image/upload/v1692369262/backgroundImageMontain_ele2kf.png");
    background-size: cover;
    min-height: calc(100vh - 110px);
    margin-top: 70px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    z-index: 0;

    h1{
        max-width: 30%;
        font-size: 25px;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    Section{
    border-radius: 2rem;
    border: 2px solid black;
    padding:15px;
    display: flex;
    flex-direction: column;
    background: white;
    gap: 15px;
    padding: 30px;
    }

    form{
        display: flex;
        flex-direction: column;
        gap: 20px;        
    }

    div{
        display: flex;
        gap: 20px;
    }

    input{
        padding-left: 20px;
    }

    @media (width<600px) {
        h1{
            font-size: 20px;
        }

        div{
            flex-direction: column;
        }
    }
`
export const InputsContainerStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const ErrorRegister = styled.ul`
    margin: auto;
    align-items: center;
    max-width: 300px;
    color: red;
    font-size: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    list-style: circle;
    @media (width<600px){
        font-size: 15px;
    }
`
