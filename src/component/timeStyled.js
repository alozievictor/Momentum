import Styled from "styled-components";

export const Welcome = Styled.div`
    position: absolute;
    top: 28%;
    left: 50%;
    -ms-transform: translate(-50%,50%);
    transform: translate(-50%, 50%);
    text-align: center;
    padding: 1rem;
    
`

export const Timestamp = Styled.p`
    font-size: 6rem;
    font-weight: 500;
    margin: 0;
    padding: 0;
    

    @media screen and (max-width 600px) {
        font-size: 5rem;
    }
`

export const Hala = Styled.p`
    font-size: 3rem;
    font-weight: 600;
    margin: 0;
    padding: 0;


    @media screen and (max-width 600px) {
        font-size: 2rem;
    }
`