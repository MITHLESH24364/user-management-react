import React from 'react';
import { Link } from "react-router-dom";





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
                {props.actions && props.actions.length > 0 && <th>Action</th> }
            
            </tr>
        </thead>
        <tbody>
          { props.users.length > 0 && 
              props.users.map((row, index) => {
                return (
                  <tr key={index}>
                    {/* <td>{row.id}</td>
                    <td>{row.username}</td>
                    <td>{row.email}</td>
                    <td>{row.age}</td>
                    <td>{row.city}</td> */}
                    { props.header.length > 0 &&
                      props.header.map((header, index) => {
                        return (
                          <td key={index}>{row[header.key]}</td>
                        )
                      })
                    }
                   
                  
                    {/* <td>
                        
                      <Link to={`/user-management/detail/${row.id}`} className="btn btn-default">Detail</Link>
                      </td>
                      <td>
                      <Link to={`/user-management/edit/${row.id}`} className="btn btn-edit">Edit</Link>
                      </td>
                      <td>
                      <Link to={`/user-management/delete/${row.id}`} className="btn btn-danger">Delete</Link>
                    </td> */}

                     {/* action starts */}
                     { props.actions && props.actions.length > 0 &&
                      <td>
                        {
                          props.actions.map((action, index) => {
                            return (
                                <Link to={`${action.link}/${row.id}`} className={action.className} key={index}>{action.name}</Link>
                            )
                          })
                        }
                      </td>
                    }
                    {/* action ends */}


                    
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