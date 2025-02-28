import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import  AuthService from "../services/AuthService";
import { useNavigate  } from 'react-router-dom';

const Login = () => {
  const authService = new AuthService();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
      e.preventDefault();
      const user = await authService.login(email, password);
      if (user) {
        navigate("/users");
      }
    
  };


  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: "350px" }}>
        <h2 className="text-center mb-4">Login</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email"  value={email} onChange={(e) => setEmail(e.target.value)}  placeholder="Digite seu email" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Senha</label>
            <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)}   placeholder="Digite sua senha" />
          </div>
          <button type="button" className="btn btn-primary w-100" onClick={handleLogin}>Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
