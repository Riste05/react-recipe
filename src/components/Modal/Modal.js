import React from 'react';
import ReactDOM from 'react-dom' ;
import ModalStyles from './Modal.module.css';

const BackDrop = () => {
    return <div className={ModalStyles.backdrop} />
}

const ShowModal = ({ cancelShowModal , oneLine={oneLine} }) => {
    
    return (

        <React.Fragment>
            {oneLine.map((item , i) => {
            return (
            <article className={ModalStyles.article} key={i}>
                <h2>{item.recipeName}</h2>

            <div className={ModalStyles.container}>
                    <h4>Source:</h4>
                    <p>{item.recipeSource}</p>
            </div>

            <div className={ModalStyles.components}>

                <div className={ModalStyles.left}>
                    <div className={ModalStyles.ingridiants}>
                        <ul>
                            {item.listIngri.map(ele => (
                                <li key={Math.random()}>{ele.name} {ele.qty}</li>
                            ))}
                        </ul>
                    </div>

                    <div className={ModalStyles.time}>
                        <h3>Time</h3>
                        <span>{item.preparationTime}</span>
                    </div>
                </div>

                <div className={ModalStyles.Instriction}>
                    <h3>Preparation Instriction</h3>
                    <p>{item.modalInstru}</p>
                </div>
            </div>

            <button className={ModalStyles.btn} onClick={cancelShowModal}>Close</button>

        </article>
                )
            })}
        </React.Fragment>

    )
}

function Modal({ cancelShowModal , oneLine }) {


  return (
    <React.Fragment>

        {ReactDOM.createPortal(<BackDrop /> , document.getElementById('backdrop-root'))}

        {ReactDOM.createPortal(<ShowModal 
                        cancelShowModal={cancelShowModal}
                        oneLine={oneLine}
        /> , 
        document.getElementById('modal-root')
        )}

    </React.Fragment>
  )
}

export default Modal;