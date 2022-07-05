import Styled from 'styled-components';

export const QuoteContainer = Styled.div`
    position: fixed;
    text-align: center;
    bottom: 6%;
    left:50%;
    width: 600px;
    margin-left: -300px;


    @media screen and (max-width 600px) {
        width:350px;
        margin-left: -175px;
    }
`

export const QuoteText = Styled.p`
    font-size: 1.1rem;
`

export const QuoteAuthor = Styled.p`
    font-size: 0,8rem;
    font-weight: bold;
`