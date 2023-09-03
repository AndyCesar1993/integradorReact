import { styled } from "styled-components";
import { grayDark } from '../../Utils/Colors';


export const UserContainerStyle = styled.div`
        width: 250px;
        right: 0;
        top: 60px;
        background: ${grayDark};
        color: white;
        border-radius: 0 0 0 1rem;
        position: fixed;
        z-index: 2;
        @media (width<500px) {
            width: 100%;
            border-radius: 0;
        }
`