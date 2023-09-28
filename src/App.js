import React , { useState } from 'react';
import AppStyle from './App.module.css';

import Table from './components/NewTable/Table';
import RecipeEntry from './components/RecipeComponent/RecipeEntry/RecipeEntry';
import Modal from './components/Modal/Modal';



function App() {

const [showComponent , setShowComponent] = useState(false)
const [visibleModal , setVisibleModal] = useState(false)

function showCompo() {
    setShowComponent(true)
}

function cancelShowCompo() {
  setShowComponent(false)
}

function showModal() {
    setVisibleModal(true)
}

function cancelShowModal() {
  setVisibleModal(false)
}


const [tableObj , setTableObj] = useState([]) ;
function addObject(element) {
  setTableObj(prev => [...prev , element])
}

const [oneLine , setOneLine] = React.useState([])
function changeContent(event) {
  setOneLine(tableObj.filter((ele , i) => i === event))
}




  return (
    <React.Fragment>
      {!showComponent && <Table 
                          showCompo={showCompo} 
                          tableObj={tableObj} 
                          setTableObj={setTableObj} 
                          showModal={showModal}
                          changeContent={changeContent}
      />}
      {showComponent && <RecipeEntry 
                          cancelShowCompo={cancelShowCompo} 
                          addObject={addObject} 
      />}
      {visibleModal && <Modal 
                          cancelShowModal={cancelShowModal}
                          oneLine={oneLine}
      />}
    </React.Fragment>
  )
}

export default App;