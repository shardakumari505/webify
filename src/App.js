import './App.css';
import Navbar from './Components/Navbar/navbar.components';
import Card1 from './Components/Card1/card1.components';

function App() {
  let title = ["comedy","horror","action","romance"];
  return (
    <div className="App">
      <Navbar/>
      <Card1 />

    </div>
  );
}

export default App;
