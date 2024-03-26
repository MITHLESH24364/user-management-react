import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from './Data';
import ViTable from '../../components/ViTable';


const UserManagement = () => {


  const header = [
    {
      key: "id",
      name: "Id",
    },
    {
      key: "username",
      name: "Username",
    },
    {
      key: "email",
      name: "Email",
    },
    {
      key: "age",
      name: "Age",
    },
    {
      key: "city",
      name: "City",
    }
  ]

  const actions = [
    {
      name: "Detail",
      link: "/user-management/detail",
      className: "btn btn-default"
    },
    {
      name: "Edit",
      link: "/user-management/edit",
      className: "btn"
    },
    {
      name: "Delete",
      link: "/user-management/delete",
      className: "btn btn-danger"
    }
  ]
 



const [users, setUsers] = useState([]);
useEffect(() => {
  setTimeout(function(){
  setUsers(data);
  },500);
},[]);


  return (
    <div>
      <h1 className="add-user">User Management</h1>

      <Link to="/user-management/add" className="btn pull-right">Add Uer</Link>
      {/* <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Age</th>
            <th>City</th>
            <th colSpan={3}>Action</th>
          </tr>
        </thead>
        <tbody>
          { users.length > 0 && 
              users.map((row, index) => {
                return (
                  <tr key={index}>
                    <td>{row.id}</td>
                    <td>{row.username}</td>
                    <td>{row.email}</td>
                    <td>{row.age}</td>
                    <td>{row.city}</td>
                    <td>
                      <Link to={`/user-management/detail/${row.id}`} className="btn btn-default">Detail</Link>
                      </td>
                      <td>
                      <Link to={`/user-management/edit/${row.id}`} className="btn btn-edit">Edit</Link>
                      </td>
                      <td>
                      <Link to={`/user-management/delete/${row.id}`} className="btn btn-danger">Delete</Link>
                    </td>
                  </tr>
                )
              })
            }
          { users.length === 0 && 
          <tr>
            <td colSpan={7}>No records found</td>
          </tr>
          }
        </tbody>
      </table> */}
      <ViTable 
      users={users} 
      header={header}
      actions={[...actions]}
      />
    </div>
  );
}

export default UserManagement;