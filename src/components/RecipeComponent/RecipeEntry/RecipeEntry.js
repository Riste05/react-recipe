import React , { useState } from 'react';
import RecipeEntryStyle from './RecipeEntry.module.css';
import TableStyle from '../../NewTable/Table.module.css';

import RecipeNameSource from '../RecipeNameSource/RecipeNameSource';
import Ingridiants from '../Ingridiants/Ingridiants';
import PrepTime from '../PreparationTime/PrepTime';
import Instruction from '../Instruction/Instruction';

function RecipeEntry({cancelShowCompo , addObject}) {

const [instruction , setInstruction] = useState('') ;
const [time , setTime] = useState('') ;
const [ingri , setIngri] = useState([])
const [nameSource , setNameSource] = useState({
    name: '' , 
    source: '',
})
const [modalIntruction , setModalInstruction] = useState('')

const cutIngri = () => {
    if(ingri.length > 3) {
        const da = 
            ingri.slice(0 , 3)
            .map(ele => (ele.name))
            .join(" ")
        return `${da} (...)` ;
    } else {
        return ingri.map(ele => (ele.name)).join(" ") ;
    }
}


function submitHandle(e) {
    e.preventDefault() ;
    
    const obj = {
        recipeName: nameSource.name ,
        recipeSource: nameSource.source ,
        numberIngri: ingri.length ,
        listIngri: ingri ,
        tableIngri: cutIngri() ,
        preparationTime: time ,
        preparationInstruction: instruction ,
        modalInstru: modalIntruction 
    }
    addObject(obj)
    cancelShowCompo(prev => !prev)
    
}

function ingridiantsHandler(element) {
    setIngri(prev => [...prev , element])
}



  return (
    <div className={TableStyle.container}>
        <h1>Recipe <span>Entry</span></h1>

        <fieldset>
            <legend>Make Recipe</legend>
            <form action="" onSubmit={submitHandle}>
                <RecipeNameSource
                    nameSource={nameSource}
                    setNameSource={setNameSource}
                />
                <div className={RecipeEntryStyle.components_flex}>
                <Ingridiants 
                    ingridiantsHandler={ingridiantsHandler} 
                />
                    <div className={RecipeEntryStyle.components_column}>
                <PrepTime
                    time={time}
                    setTime={setTime}
                        />
                <Instruction
                    instruction={instruction}
                    setInstruction={setInstruction}
                    setModalInstruction={setModalInstruction}
                        />
                    </div>
                </div>

                <button type="submit" className={TableStyle.btn}>Add Recipe</button>
            </form>
        </fieldset>
    </div>
  )
}

export default RecipeEntry;