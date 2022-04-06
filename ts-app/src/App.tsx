import React from 'react';
import Header from './component/header/Header';
// import Posts from './component/posts/Posts';

import './App.scss';
import Registration from './component/registration/Registration';


const App: React.FC = () => {


  return (
    <div className="app-container">
      <Header/>
      <div className="app-content">
        <Registration/>

        {/* <Posts/> */}
      </div>

    </div>
  );
}

export default App;
