import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import data from './Data';


const Detail = () => {
    const { id } = useParams();
    

       const[users, setUsers] = useState({
          username: '',
          email: '',
          age: '',
          city: ''
        });

        useEffect(() => {
            const user = data.find((user) => user.id === parseInt(id));
            setUsers(user);
        });
    return (
        <div>
          <h2 className='add-user'>User Detail</h2>
         



          <table>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Age</th>
          <th>City</th>
          <th colSpan={2}>Action</th>
         
          
        </tr>
       
              <tr>
                <td>{users.username}</td>
                <td>{users.email}</td>
                <td>{users.age}</td>
                <td>{users.city}</td>
                <td>
                <Link to={`/user-management/edit/${users.id}`} className="btn">Edit</Link>
                </td>
                <td>
                <Link to={`/user-management/delete/${users.id}`} className="btn btn-danger">Delete</Link>
                </td>
                
              </tr>
          
              
          
     </table>






          </div>
       
      );
}
export default Detail;