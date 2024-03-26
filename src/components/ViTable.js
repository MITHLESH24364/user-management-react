import React from 'react';
import { Link } from "react-router-dom";
import data from '../pages/UserManagement/Data';



const ViTable = (props) => {
    return (
        <table>
        <thead>
          <tr>
          { props.header.length > 0 &&
              props.header.map((row, index) => {
                return (
                  <th key={index}>{row.name}</th>
                )
              })
            }
            <th colSpan={3}>Action</th>
          </tr>
        </thead>
        <tbody>
          { props.users.length > 0 && 
              props.users.map((row, index) => {
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
          { props.users.length === 0 && 
          <tr>
            <td colSpan={7}>No records found</td>
          </tr>
          }
        </tbody>
      </table>
    );
    }
    export default ViTable;