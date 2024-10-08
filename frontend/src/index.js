import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/home';
import Settings from './pages/settings';
import Documents from './pages/documents';
import Profile from './pages/profile';
import Downloads from './pages/downloads';
import Login from './pages/login';
import Register from './pages/register';
import Users from './pages/user';
import Comment from './pages/comment';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route index element={<Home/>}/>
          <Route path='downloads' element={<Downloads/>}/>
          <Route path='settings' element={<Settings/>}/>
          <Route path='documents' element={<Documents/>}/>
          <Route path='profile' element={<Profile/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
          <Route path='user' element={<Users/>}/>
          <Route path='comment' element={<Comment/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

//Browser router
//Routers
//Route
//Link
//Outlet

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//npm i -d react-router-dom


