
// const Delete = () => {
//     return (
//         <div>
//           <h2>Delete</h2>
//           </div>
       
//       );
// }
// export default Delete;

import React, { useState } from 'react';

const Delete = ({ userId, onDelete, onCancel }) => {
  const [confirmDelete, setConfirmDelete] = useState(false);

  const handleDelete = () => {
    onDelete(userId);
    setConfirmDelete(false);
  };

  const handleCancel = () => {
    onCancel();
    setConfirmDelete(false);
  };

  return (
    <div>
        <h2 className='add-user'>Delete</h2>

      {confirmDelete ? (
        <div>
          <p>Are you sure you want to delete user with ID: {userId}?</p>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <button onClick={() => setConfirmDelete(true)}>Delete Data</button>
      )}
    </div>
  );
};

export default Delete;