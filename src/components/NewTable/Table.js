import React from 'react';
import TableStyle from './Table.module.css';

function Table({ showCompo , tableObj , setTableObj , showModal , changeContent }) {


  // DELETE RECIPE
  function deleteRecipe(index) {
      setTableObj(prevItem => (prevItem.filter((_ , i) => i !== index)))
  }

  // MODAL
  function changeText(event) {
    showModal() ;
    changeContent(event)
  }

  
  return (
    
      <div className={TableStyle.container}>
        <h1>Cooking <span>Recipe</span></h1>

   
      {tableObj.length ? ( 
         <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Recipe Name</th>
                    <th>Recipe Source</th>
                    <th>Number of Ingrideints</th>
                    <th>List of Ingrideints</th>
                    <th>Preparation Instruction</th>
                    <th>Preparation Time</th>
                    <th>Details</th>
                    <th>Delete</th>
                </tr>
            </thead>

       
          <tbody className={TableStyle.tbody}>

        {tableObj.map((item , i) => {
            return (
              <tr key={i}>
                    <td>{i+1}</td>
                    <td>{item.recipeName}</td>
                    <td>{item.recipeSource}</td>
                    <td>{item.numberIngri}</td>
                    <td>{item.tableIngri}</td>
                    <td>{item.preparationInstruction}</td>
                    <td>{item.preparationTime}</td>
                    {/* <td className={TableStyle.details} onClick={showModal}>Details</td> */}
                    <td className={TableStyle.details} onClick={() => changeText(i)}>Details</td>
                    <td className={TableStyle.td_btn} onClick={() => deleteRecipe(i)}>Delete</td>
                </tr>
        )
    })}



          </tbody>
            
        </table>
          ) : (<h2 className={TableStyle.empty_list}>List is empty</h2>)}
        <button type="button" className={TableStyle.btn} onClick={showCompo}>Add New Recipe</button>
        
    </div>
  )
}

export default Table;