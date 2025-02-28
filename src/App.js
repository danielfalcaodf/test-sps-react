import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/SignIn';
import Users from './pages/Users';
import UserForm from './pages/UserEdit';
import PrivateRoute from './pages/PrivateRoute';
import Navbar from './components/Navbar';


function App() {


  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Navbar  />
              <Home />
            </PrivateRoute>
          }
        />

        <Route
          path="/users"
          element={
            <PrivateRoute>
              <Navbar  />
              <Users />
            </PrivateRoute>
          }
        />

        <Route
          path="/users/:userId"
          element={
            <PrivateRoute>
              <Navbar  />
              <UserForm />
            </PrivateRoute>
          }
        />
        
        <Route
          path="/users/new"
          element={
            <PrivateRoute>
              <Navbar  />
              <UserForm />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
