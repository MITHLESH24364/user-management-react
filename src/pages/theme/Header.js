const Header  = () => {
  const logout = () => {
    localStorage.removeItem("isLogin");
    window.location.href = "/login";
  }
  return (
    <div className="header">
      <div className="header-arrange"></div>
      <h2 className="header-arrange">Welcome To MKS User Management System</h2>
   
      <div className="header-arrange">
        <button onClick={logout} className="btn btn-danger">
         logout
        </button>
        </div>
    </div>
  );
};
export default Header;