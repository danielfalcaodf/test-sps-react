import React, { useEffect, useState, useMemo } from "react";
import { Link, useNavigate  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthService from "../services/AuthService";
function Navbar() {
  const navigate = useNavigate();
  const authService =  useMemo(() => new AuthService(), []);;

  const [username, setUser] = useState(authService.getCurrentUser()?.user?.name || 'Usuario');
  useEffect(() => {
    setUser(authService.getCurrentUser()?.user?.name || 'Usuario');
  }, [authService])
  const handleLogout = () => {
    console.log("saui")
    authService.logout()
    navigate("/login");  
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand mr-auto" to="/">
          SPS REACT TEST
        </Link>
        
        <div className="collapse navbar-collapse justify-content-end align-items-center " >

          
          
          <ul className="navbar-nav ml-auto">
            <li className="nav-item d-flex username-margin" >
              <span className="navbar-text text-light">Olá, {username}</span>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-danger ml-2" onClick={handleLogout}>Sair</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );


}

export default Navbar;
