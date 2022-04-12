import React, { useEffect, useState } from 'react';
import Header from './component/header/Header';
import Registration from './component/registration/Registration';
import Login from './component/login/Login';
import Posts from './component/posts/Posts';

import './App.scss';

const App: React.FC = () => {

  return (
      <div className="app-container">
          <Header/>
        <div className="app-content">
          {/* <Registration/> */}

            <Login/>

          {/* <Posts/> */}
        </div>
      </div>
  );
}

export default App;
