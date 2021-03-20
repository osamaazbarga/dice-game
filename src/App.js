
import './App.css';
import RollDice from './Components/RollDice/RollDice'

function App() {
  return (
    <div className="pigdiv">
      {/* <h1>DICE GAME</h1> */}
      <div id="container">
        <h1 className="GradientBorder">DICE GAME</h1>
      </div>
      <div className="RollDice"> 
        <RollDice /> 
      </div>
    </div> 
  );
}

export default App;
