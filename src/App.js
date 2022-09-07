import { Component } from "react";

import "./App.css";

import Navbar from "./components/layout/Navbar";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Dashboard from "./components/dashboard/Dashboard";

import NewProject from "./components/projects/NewProject";
import ProjectDetails from "./components/projects/ProjectDetails";

import { BrowserRouter, Routes, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="/newproject" element={<NewProject />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
