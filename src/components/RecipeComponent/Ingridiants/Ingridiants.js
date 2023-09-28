import React , { useState , useRef , useEffect } from 'react';
import IngridiantsStyle from './Ingridiants.module.css';

import IngridiantsData from '../../../IngridiantsData';

function Ingridiants({ingridiantsHandler}) {

const [ingridiants , setIngridiants] = useState(IngridiantsData) ;

const [boxID , setBoxID] = useState();
function checkboxHandler(checkboxID) {
  
  const changeChecked = ingridiants.map(ele => ele.id === checkboxID ? {...ele , checked: !ele.checked} : ele)
  setIngridiants(changeChecked)

  setBoxID(checkboxID)
  }

  // object
  const [inputID , setInputID] = useState();
  const [inputValue , setInputValue] = useState('')
  function inputHandler(e , inputID) {
      setInputValue(prev => ({
        ...prev , 
        name: e.target.name ,
        qty: e.target.value
      }))

      setInputID(inputID)
    }

    
  // object vo array
  const [inputArray , setInputArray] = useState([]);
  function addArray(buttonID){

      const btnCLick = ingridiants.map(ele => ele.id === buttonID ? {...ele , isDisable: true} : ele)

      if(boxID === inputID && buttonID === boxID && buttonID === inputID ) {
        setIngridiants(btnCLick) 
        setInputArray(prev => [...prev , inputValue])
        ingridiantsHandler(inputValue)
      }


  }

  return (
    <div className={IngridiantsStyle.ingridiants_container}>
      <h2>Ingridiants:</h2>

    <ul>
      {ingridiants.map((ingr , i) => {
        return (
          <li key={ingr.id}>
            <input 
                type="checkbox"
                name={ingr.name} 
                value={ingr.checked}
                onChange={() => checkboxHandler(ingr.id)}
                style={ingr.isDisable ? {display: 'none'} : null}
              />
            <label htmlFor="">{ingr.name}</label>
            <input 
                type="text"
                placeholder='QTY' 
                name={ingr.name} 
                value={ingr.qty} 
                onChange={(e) => inputHandler(e , ingr.id)}
                disabled={ingr.isDisable}
                />
            <button type="button" style={ingr.isDisable ? {display: 'none'} : null} onClick={() => addArray(ingr.id)}>Add Ingr</button>


           
          </li>
        )
      })}
    </ul>

      </div>

  )
}

export default Ingridiants;