import axios from "axios";
import handleRequest from './ApiNotification'
 class AuthService { 
    constructor() {
        this.api = axios.create({
          baseURL:  `${process.env.REACT_APP_SERVER_URL}/api/auth`, // Substitua pela URL real da API
        });
      }

      async login(email, password) {
        try {
            const response = await handleRequest(
                () => this.api.post("/login", { email, password }),
                "Login realizado com sucesso!",
                "Falha ao tentar fazer login. Verifique suas credenciais."
              );
            if (response) {
                
                localStorage.setItem("userActive", JSON.stringify(response));
            }
          
            return response;
            
        } catch (error) {
            console.error("Erro ao tentar fazer login:", error.response?.data || error.message);
            
            return { error: true, message: error.response?.data?.message || "Erro ao conectar ao servidor." };
        }
    }
    

    getCurrentUser(){
        return JSON.parse(localStorage.getItem('userActive'))
    }
    logout(){
        localStorage.removeItem("userActive"); 
    }
}

export default AuthService;

 