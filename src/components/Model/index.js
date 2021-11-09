import React from 'react';

function Modal ({ onClose }) {
    return ( 
        <div className="modalBackdrop">
            <div className="modalContainer">
                <p>
                </p>
                <button onClick={onClose}  type ="button">
                    Close this modal
                </button>
            </div>
        </div>
    );

};

export default Modal;