import React from 'react';
// import Clicker from './component/clicker/Clicker';
// import Button from './component/button/Button';
// import Timer from './component/timer/Timer';
import Header from './component/header/Header';
import Posts from './component/posts/Posts';

import './App.scss';


const App: React.FC = () => {


  return (
    <div className="app-container">
      <Header/>
      <div className="app-content">
        {/* <Clicker/> */}
        {/* <Timer/> */}

        <Posts/>
      </div>

    </div>
  );
}

export default App;
