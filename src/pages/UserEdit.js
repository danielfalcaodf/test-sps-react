import React, { useState, useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserService from "../services/UserService";

const UserForm = () => {
  const userService = useMemo(() => new UserService(), []);
  const { userId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  
  useEffect(() => {
  

    const fetchUser = async () => {
      try {
        const user = await userService.get(Number(userId))
        user.password = ''
        setFormData(user);
      } catch (error) {
        console.error("Erro ao buscar usuário:", error);
      }
    };
    if (userId) {
      fetchUser();
    }
  }, [userId, userService]);


 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.id) {
      await userService.update(formData)
    
    } else {
     
      await userService.create(formData);
    }
    navigate("/users");
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">{userId ? "Editar Usuário" : "Novo Usuário"}</h2>
      <div className="card p-4 shadow">
        <form>
          <div className="row " >
            <div className="col mb-3">
              <label className="form-label">Nome</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            {
             !userId ?
              <div className="col mb-3" >
                  <label className="form-label">Senha</label>
                  <input
                    type="text"
                    className="form-control"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
              </div>
              :null

            }
           
      
          </div>
          
        
         
          <button type="button" className="btn btn-primary w-100" onClick={handleSubmit}>Salvar</button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
