import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import UserService from "../services/UserService";


const UserTable = () => {
  const [users, setUsers] = useState([]);
  const userService = useMemo(() => new UserService(), []);
  const handleDelete = async (id) =>{
    await userService.delete(id)
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));

  }

  useEffect(() => {
   

    const fetchUsers = async () => {
     
      try {
        const data = await userService.list();
        setUsers(data);
        console.log('Usuários carregados', data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      }
    };
    fetchUsers();
  }, [userService]);
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Lista de Usuários</h2>
      <Link to="/users/new" className="btn btn-success mb-3">Novo Usuário</Link>
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <Link to={`/users/${user.id}`} className="btn btn-warning btn-sm me-2">Editar</Link>
                  <button  className="btn btn-danger btn-sm me-2" onClick={() => handleDelete(user.id)}>Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
