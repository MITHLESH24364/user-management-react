import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "./Data";
import { Link } from "react-router-dom";


const Detail = () => {
  const { userId } = useParams();
  
  const [user, setUser] = useState({
    username: "",
    email: "",
    age: "",
    city: "",
  });

  useEffect(() => {
    const newUser = data.find((obj) => obj.id.toString() === userId.toString())
    if(newUser) {
      setUser(newUser);
    }
  }, []);

  return (
    <div>
          <h1 className="add-user">User Detail</h1>



      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Age</th>
            <th>City</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          
            
                  <tr>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                    <td>{user.city}</td>
                    <td>
                    
                      <Link to={`/user-management/edit/${user.id}`} className="btn">Edit</Link>
                      </td>
                      <td>
                      <Link to={`/user-management/delete/${user.id}`} className="btn btn-danger">Delete</Link>
                    </td>
                  </tr>
                
              
            
          
        </tbody>
      </table>

    </div>
  )
}

export default Detail;