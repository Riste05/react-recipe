import React , { useState } from 'react';
import InstructionStyle from './Instruction.module.css';

function Instruction({instruction , setInstruction , setModalInstruction}) {



function instructionHandler(event) {



    if(event.target.value.length < 20) {
      setInstruction(event.target.value)
    }else {
      let lastIndex = event.target.value.lastIndexOf(' ' , 20);
      let cutText = event.target.value.slice(0 , lastIndex)
      setInstruction(`${cutText} (...)`)
    }

    setModalInstruction(event.target.value)
  }

  return (
      <div className={InstructionStyle.preparation_instruction}>
          <label htmlFor="content">Instruction</label><br />
          <textarea 
          name="content" 
          id="content"
          placeholder="Preparation Instruction"
          onChange={(e) => instructionHandler(e)}
          />
      </div>
  )
}

export default Instruction;