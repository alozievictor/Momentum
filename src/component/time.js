import React from 'react';
import Moment from 'react-moment'
import 'moment-timezone';
import { Timestamp, Welcome, Hala } from './timeStyled';

const Time = () => {

    let Today = new Date();

    let Greeting = () => {
        if(Today.getHours ()>= 5 && Today.getHours() < 12 ) {
            return 'Good Morning Sunshine';
        }else if(Today.getHours() >= 12 && Today.getHours() < 17 ) {
            return 'Good Afternoon Dear';
        }else if(Today.getHours() >= 17 && Today.getHours() < 24 ) {
            return 'Good Evening Boss'
        }else {
            return 'what are doing up at this hour';
        }
    }

  return (
    <Welcome>
        <Timestamp><Moment format='LT'></Moment></Timestamp>
        <Hala>{Greeting()}</Hala>

    </Welcome>
  )
}

export default Time;