import './App.css';
import Button from './component/button/Button';


function App() {
  const handleClick = () => console.log("Green button clicked")
  return (
    <div className="App">
      <Button
        color="red"
        text="First button"
        handleClick={() => console.log("Red button clicked")}
      />
      <Button 
        color="green"
        text="Second button"
        handleClick={handleClick}
      />
    </div>
  );
}

export default App;
