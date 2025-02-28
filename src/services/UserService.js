
import api from "./Api";

import handleRequest from "./ApiNotification";
class UserService {
  
  async list() {
    return await handleRequest(
      () => api.get("/users"),
      "Usuários carregados com sucesso",
      "Erro ao buscar usuários"
    );
  }
  
  async get(id) {
    return await handleRequest(
      () => api.get(`/users/${id}`),
      "Usuário carregado com sucesso",
      "Erro ao buscar usuário"
    );
  }
  
  async create(data) {
    return await handleRequest(
      () => api.post(`/users`, data),
      "Usuário criado com sucesso",
      "Erro ao criar usuário"
    );
  }
  
  async update(data) {
    return await handleRequest(
      () => api.put(`/users`, data),
      "Usuário atualizado com sucesso",
      "Erro ao atualizar usuário"
    );
  }
  
  async delete(id) {
    return await handleRequest(
      () => api.delete(`/users/${id}`),
      "Usuário excluído com sucesso",
      "Erro ao excluir usuário"
    );
  }
}

export default UserService;
