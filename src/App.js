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

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route path="/user-management" element={<UserManagement/>} />
            <Route path="/user-management/add" element={<AddUser/>} />
            <Route path="/user-management/detail/:userId" element={<Detail/>} />
            <Route path="/faq" element={<Faq/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/user-management/detail/:id" element={<Detail/>} />
            <Route path="/user-management/delete/:id" element={<Delete/>} />
            <Route path="/user-management/edit/:id" element={<Edit/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
