# Frontend (React.js + Bootstrap)

Esta documentação cobre a configuração e funcionamento do frontend da aplicação, desenvolvido em **React.js** e estilizado com **Bootstrap**.

## Sumário

- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Como rodar o projeto](#como-rodar-o-projeto)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Rotas](#rotas)
- [Autenticação com JWT](#autenticação-com-jwt)
- [Licença](#licença)

---

## Tecnologias utilizadas

- **React.js**
- **Bootstrap** para estilização
- **React Router** para gerenciamento de rotas
- **JWT** para autenticação

---

## Pré-requisitos

Antes de rodar a aplicação, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/)
- [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

---

## Como rodar o projeto

1. **Clone o repositório**
   ```sh
   git clone git@github.com:danielfalcaodf/test-sps-react.git
   cd test-sps-react
   ```
2. **Instale as dependências**
   ```sh
   npm install
   ```
3. **Configure as variáveis de ambiente**
   - No arquivo `.env`, adicione:
     ```
     REACT_APP_SERVER_URL=http://localhost:3001
     ```
4. **Inicie a aplicação**
   ```sh
   npm start
   ```

---

## Estrutura do Projeto

```
src
├── App.js
├── components
│   └── Navbar.js
├── index.js
├── pages
│   ├── Home.js
│   ├── PrivateRoute.js
│   ├── SignIn.js
│   ├── UserEdit.js
│   └── Users.js
├── services
│   ├── Api.js
│   ├── ApiNotification.js
│   ├── AuthService.js
│   └── UserService.js
└── styles.css
```

---

## Rotas

A aplicação possui as seguintes rotas protegidas:

| Rota           | Componente  | Protegida |
|---------------|------------|-----------|
| `/login`      | Login      | Não       |
| `/`           | Home       | Sim       |
| `/users`      | Users      | Sim       |
| `/users/:id`  | UserForm   | Sim       |
| `/users/new`  | UserForm   | Sim       |

As rotas protegidas utilizam um componente **PrivateRoute** que verifica se o usuário está autenticado antes de permitir o acesso.

Exemplo de configuração de rotas:

```jsx
<Router>
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route
      path="/"
      element={
        <PrivateRoute>
          <Navbar />
          <Home />
        </PrivateRoute>
      }
    />
    <Route
      path="/users"
      element={
        <PrivateRoute>
          <Navbar />
          <Users />
        </PrivateRoute>
      }
    />
    <Route
      path="/users/:userId"
      element={
        <PrivateRoute>
          <Navbar />
          <UserForm />
        </PrivateRoute>
      }
    />
    <Route
      path="/users/new"
      element={
        <PrivateRoute>
          <Navbar />
          <UserForm />
        </PrivateRoute>
      }
    />
  </Routes>
</Router>
```

---

## Autenticação com JWT

- A autenticação é baseada em **JWT**.
- Usuários não autenticados serão redirecionados para a página de **Login**.
- O token JWT será armazenado no **localStorage** e enviado em cada requisição ao backend.

`PrivateRoute`:

```jsx
import React from 'react';
import { Navigate } from 'react-router-dom';


const PrivateRoute = ({ children }) => {
  const user = localStorage.getItem('userActive');

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;

```

---
