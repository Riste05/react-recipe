import React , { useState } from 'react';
import PrepTimeStyle from './PrepTime.module.css';

function PrepTime({time , setTime}) {


  function timeHandler(event) {
    setTime(event.target.value)
    const [hour , minutes] = event.target.value.split(':') ;

    if(hour == 0) {
      setTime(`${minutes} min`)
    }else {
      setTime(`${hour}h ${minutes}m`)
    }
  }

  return (
    <div className={PrepTimeStyle.timer}>
     <label htmlFor="">Preparation Time</label>
     <input type="time" onChange={(e) => timeHandler(e)}/>
    </div>
  )
}

export default PrepTime;