import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from './component/hooks/useSelector';
import Header from './component/header/Header';
import Clicker from './component/clicker/Clicker';
import Registration from './component/registration/Registration';
import Login from './component/login/Login';
import PostsPage from './component/postsPage/PostsPage';
import PostPage from './component/postPage/PostPage';
import MyPostsPage from './component/myPostsPage/MyPostsPage';

import './App.scss';

const App: React.FC = () => {
  const logged = useSelector(state => state.auth.logged);

  return (
    <BrowserRouter>
      <div className="app-container">
        <Header/>

          <Routes>
            <Route path="/clicker/" element={
              <div>
                <Clicker/>
                <Clicker/>
                <Clicker/>
              </div>
            } />
            {!logged &&
              <>
                <Route path="/login/*" element={<Login/>} />
              </>
            }
            <Route path="/registration/*" element={<Registration/>} />
            <Route path="/posts" >
              <Route index element={<PostsPage/>} />
              <Route path=":id" element={<PostPage/>} />
            </Route>
              {logged &&
                <Route path="/myposts" element={<MyPostsPage/>} />
              }
            <Route path="*" element={<Navigate to={"/posts"}/>} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
