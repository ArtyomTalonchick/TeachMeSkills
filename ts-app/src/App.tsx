import React, { useEffect, useState } from 'react';
import Header from './component/header/Header';
import Registration from './component/registration/Registration';
import Login from './component/login/Login';
import Posts from './component/posts/Posts';

import './App.scss';
import Post from './component/post/Post';

const App: React.FC = () => {

  return (
      <div className="app-container">
          <Header/>
        <div className="app-content">
          {/* <Registration/> */}

            {/* <Login/> */}
            <Post id={12}/>
            

          {/* <Posts/> */}
        </div>
      </div>
  );
}

export default App;
