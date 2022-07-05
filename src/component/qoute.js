
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {QuoteContainer, QuoteText, QuoteAuthor} from './quoteStyled'

const url = "https://goquotes-api.herokuapp.com/api/v1/random?count=1";

const Qoute = () => {

    const [date, setData] = useState(null)

    useEffect(() =>{
        axios.get(url).then((Response) =>{
            setData(Response.data);
        }).catch((err) => {
            console.log(err)
        });
    },[]);

    console.log(date)

    if(!date) return null;
      
  return (
    <QuoteContainer>
      <QuoteText>{date.quotes[0].text}</QuoteText>
      <QuoteAuthor>--{date.quotes[0].author}</QuoteAuthor>
    </QuoteContainer>
  )
}

export default Qoute;