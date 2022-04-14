import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Header from './component/header/Header';
import Registration from './component/registration/Registration';
import Login from './component/login/Login';
import Posts from './component/posts/Posts';
import Post from './component/postPage/PostPage';

import './App.scss';

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <div className="app-container">
        <Header/>
        <div className="app-content">

            <Routes>
              <Route path="/login/*" element={<Login/>} />
              <Route path="/registration/*" element={<Registration/>} />
              <Route path="/posts" >
                <Route index element={<Posts/>} />
                <Route path=":id" element={<Post/>} />
              </Route>
              <Route path="*" element={<Navigate to={"/posts"}/>} />
            </Routes>

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
