import { styled } from "styled-components";
import { blueGray } from '../../Utils/Colors';


export const UserContainerStyle = styled.div`
        width: 250px;
        right: 0;
        top: 69px;
        background: ${blueGray};
        color: white;
        border-radius: 0 0 0 1rem;
        position: fixed;
        z-index: 2;
        padding: 10px;

        @media (width<500px) {
            width: 100%;
            border-radius: 0;
        }
`