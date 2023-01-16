import React,{Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar/navbar.components';
import Card1 from './Components/Card1/card1.components';
import Dashboard from './Pages/Dashboard/dashboard.components';
import HorrorPage from './Pages/Horror/horror-page';
import RomanticComedyPage from './Pages/Romantic-Comedy/romantic-comedy-page';
import MysteryPage from './Pages/Mystery/mystery-page';
import AnimePage from './Pages/Anime/anime-page';
import ActionPage from './Pages/Action/action-page';


class App extends Component {

  render(){
  
  return (
    <div className="App">
        <Router>
          <Navbar/>
            {/* <Card1 /> */}
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/horrorpage' element={<HorrorPage />} />
            <Route path='/romanticcomedypage' element={<RomanticComedyPage />} />
            <Route path='/mysterypage' element={<MysteryPage />} />
            <Route path='/animepage' element={<AnimePage />} />
            <Route path='/actionpage' element={<ActionPage />} />
          </Routes>
        </Router>

    </div>
  );
}
}

export default App;
