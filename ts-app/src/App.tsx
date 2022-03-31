import React from 'react';
import './App.css';
import Clicker from './component/clicker/Clicker';
// import Button from './component/button/Button';
import Posts from './component/posts/Posts';
import Timer from './component/timer/Timer';


const App: React.FC = () => {


  return (
    <div className="App">

      {/* <Clicker/> */}
      {/* <Timer/> */}

      <Posts/>
    </div>
  );
}

export default App;
