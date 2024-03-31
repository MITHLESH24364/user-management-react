import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './pages/theme/Layout';
import UserManagement from "./pages/UserManagement/UserManagement";
import AddUser from "./pages/UserManagement/AddUser";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";

import Detail from "./pages/UserManagement/Detail";
import Delete from "./pages/UserManagement/Delete";
import Edit from "./pages/UserManagement/Edit";
import Login from "./pages/Auth/Login";
import PrivateRoute from "./routes/PrivateRoute";


function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/" element={<PrivateRoute component= {Layout} />} >
              <Route path="/user-management" element={<PrivateRoute component= {UserManagement} />}/>
              <Route path="/user-management/add" element={<PrivateRoute component= {AddUser} />}/>
              <Route path="/user-management/detail/:userId" element={<PrivateRoute component= {Detail} />} />
              <Route path="/faq"  element={<PrivateRoute component= {Faq} />} />
              <Route path="/contact"  element={<PrivateRoute component= {Contact} />} />
              <Route path="/user-management/detail/:id" element={<PrivateRoute component= {Detail} />}/>
              <Route path="/user-management/delete/:id"  element={<PrivateRoute component= {Delete} />} />
              <Route path="/user-management/edit/:id"  element={<PrivateRoute component= {Edit} />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
};
export default App;
