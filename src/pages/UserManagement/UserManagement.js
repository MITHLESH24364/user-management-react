import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from './Data';


const UserManagement = () => {



const [users, setUsers] = useState([]);
useEffect(() => {
  setTimeout(function(){
  setUsers(data);
  },500);
},[]);


  return (
    <div>
      <h1>User Management</h1>

      <Link to="/user-management/add" className="btn pull-right">Add Uer</Link>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Age</th>
            <th>City</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          { users.length > 0 && 
              users.map((row, index) => {
                return (
                  <tr key={index}>
                    <td>{row.username}</td>
                    <td>{row.email}</td>
                    <td>{row.age}</td>
                    <td>{row.city}</td>
                    <td>
                      <Link to={`/user-management/detail/${row.id}`} className="btn btn-default">Detail</Link>
                      <Link to={`/user-management/edit/${row.id}`} className="btn">Edit</Link>
                      <Link to={`/user-management/delete/${row.id}`} className="btn btn-danger">Delete</Link>
                    </td>
                  </tr>
                )
              })
            }
          { users.length === 0 && 
          <tr>
            <td colSpan={4}>No records found</td>
          </tr>
          }
        </tbody>
      </table>

    </div>
  );
}

export default UserManagement;