import React , { useState } from 'react';
import NameSourceStyle from './RecipeNameSource.module.css';

function RecipeNameSource({nameSource , setNameSource}) {

  function nameSourceHandler(event) {
          setNameSource(prevItem => ({
            ...prevItem ,
            [event.target.name]:event.target.value
          }))
    }

  return (
    <div className={NameSourceStyle.name_source}>

        <div className={NameSourceStyle.recipe_name}>
            <label htmlFor="">Recipe Name:</label>   
            <input 
                type="text" 
                placeholder='Name' 
                name="name" 
                value={nameSource.name}
                onChange={nameSourceHandler}
                />
        </div>

        <div className={NameSourceStyle.recipe_name}>
            <label htmlFor="">Recipe Source:</label>   
            <input 
                type="text" 
                placeholder='Source'  
                name="source"  
                value={nameSource.source}
                onChange={nameSourceHandler}
                />
        </div>

    </div>
  )
}

export default RecipeNameSource;