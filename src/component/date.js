import React from 'react';
import{DateContainer } from './dateStyled'; 

const AllDate = () => {

    let Today = new Date();

    let date = Today.getFullYear() + '/' +  Today.getMonth() + '/' + Today.getDay()
  return (
    <DateContainer>
        <p>{date}</p>
    </DateContainer>
  )
}

export default AllDate;