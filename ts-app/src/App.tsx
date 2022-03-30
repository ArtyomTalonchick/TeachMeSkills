import React from 'react';
import './App.css';
// import Button from './component/button/Button';
import Posts from './component/posts/Posts';


const App: React.FC = () => {
  // const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   console.log(e);
  // }

  return (
    <div className="App">

      <Posts/>

      {/* <Button
        color="red"
        text="First button"
        handleClick={() => console.log("Red button clicked")}
      />
      <Button 
        color="green"
        text="Second button"
        handleClick={handleClick}
      /> */}
    </div>
  );
}

export default App;
