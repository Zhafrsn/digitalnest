import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import '../../../../styles/Admin/ProductAdmin.css';
import EditProduct from '../Productlist/EditProduct'

const ActionTable: React.FC = () => {
  const [isEditProductOpen, setIsEditProductOpen] = useState(false);

  const toggleEditProduct = () => {
    setIsEditProductOpen(!isEditProductOpen);
  };
    return (
         <div className='action-table__container'>
            <button className="action-table-edit__container" onClick={toggleEditProduct}>
                <FontAwesomeIcon icon={faEdit} />
                <p className='edit-text'>Edit</p>
            </button>
            <button className='action-table-del__container'>
                <FontAwesomeIcon icon={faTrash} className='del-icon'/>
                <p className='del-text'>Delete</p>
            </button>
            {isEditProductOpen && (
                    <div className="popup-container">
                      <EditProduct onClose={() => setIsEditProductOpen(false)} />
                      <div className='overlay'></div>
                    </div>
                  )}
        </div>
    )
}

export default ActionTable;