import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div className="container text-center mt-5">
      <h1 className="display-4">SPS REACT TEST</h1>
      <p className="lead">Bem-vindo à aplicação!</p>
      <a href="/users" className="btn btn-primary btn-lg">Ir para Usuários</a>
    </div>
  );
}

export default Home;
