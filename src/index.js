import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Logout from './Logout';
import LoginForm from './Login/LoginForm';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginForm/>}/>
        <Route path='/logout' element={<Logout/>}/>
        {/* <Route path='/login' element={<LoginForm/>}/> */}
        <Route path='/submit' element={<App/>}/>
      </Routes>
      </BrowserRouter>
  </React.StrictMode>
);


