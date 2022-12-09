import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Login from './Pages/Login'
import Redirect from './Pages/Redirect';
function App() {


  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Login  />} exact />
          <Route
            path="/redirect"
            element={<Redirect />}
            exact
          />
        </Routes>
      </BrowserRouter>
    </div>
        
  )
}

export default App
