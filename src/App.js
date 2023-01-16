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
import Alien from './Pages/All-Movies/Horror-Movies/Alien-movie';
import Psycho from './Pages/All-Movies/Horror-Movies/Psycho-movie';
import Shining from './Pages/All-Movies/Horror-Movies/The-shining-movie';
import TheThing from './Pages/All-Movies/Horror-Movies/The-thing-movie';
import Tumbbad from './Pages/All-Movies/Horror-Movies/Tumbbad-movie';
import Chhichhore from './Pages/All-Movies/Romantic-Comedy-Movies/Chhichhore-movie';
import CityLights from './Pages/All-Movies/Romantic-Comedy-Movies/City-lights-movie';
import ForrestGump from './Pages/All-Movies/Romantic-Comedy-Movies/Forrest-Gump-movie';
import LifeIsBeautiful from './Pages/All-Movies/Romantic-Comedy-Movies/Life-is-beautiful-movie';
import ModernTimes from './Pages/All-Movies/Romantic-Comedy-Movies/Modern-times-movie';
import LivesOfOthers from './Pages/All-Movies/Mystery-Movies/Lives-of-others-movie';
import MirrorGame from './Pages/All-Movies/Mystery-Movies/Mirror-game-movie';
import RearWindow from './Pages/All-Movies/Mystery-Movies/Rear-window-movie';
import Seven from './Pages/All-Movies/Mystery-Movies/Seven-movie';
import SilenceofLambs from './Pages/All-Movies/Mystery-Movies/Silence-of-lambs-movie';
import GraveofFireflies from './Pages/All-Movies/Anime-Movies/Grave-of-fireflies-movie';
import LionKing from './Pages/All-Movies/Anime-Movies/Lion-king-movie';
import Spiderman from './Pages/All-Movies/Anime-Movies/Spider-man-movie';
import Spiritedaway from './Pages/All-Movies/Anime-Movies/Spirited-away-movie';
import YourName from './Pages/All-Movies/Anime-Movies/Your-name-movie';
import DarkKnight from './Pages/All-Movies/Action-Movies/Dark-knight-movie';
import Inception from './Pages/All-Movies/Action-Movies/Inception-movie';
import LordofRings from './Pages/All-Movies/Action-Movies/Lord-of-rings-movie';
import Matrix from './Pages/All-Movies/Action-Movies/Matrix-movie';
import StarWars from './Pages/All-Movies/Action-Movies/Star-wars-movie';


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
            <Route path='/alien-movie' element={<Alien />} />
            <Route path='/psycho-movie' element={<Psycho />} />
            <Route path='/shining-movie' element={<Shining />} />
            <Route path='/thing-movie' element={<TheThing />} />
            <Route path='/tumbbad-movie' element={<Tumbbad />} />
            <Route path='/chhichhore-movie' element={<Chhichhore />} />
            <Route path='/citylights-movie' element={<CityLights />} />
            <Route path='/forrestgump-movie' element={<ForrestGump />} />
            <Route path='/lifeisbeautiful-movie' element={<LifeIsBeautiful />} />
            <Route path='/moderntimes-movie' element={<ModernTimes />} />
            <Route path='/livesofothers-movie' element={<LivesOfOthers />} />
            <Route path='/mirrorgame-movie' element={<MirrorGame />} />
            <Route path='/rearwindow-movie' element={<RearWindow />} />
            <Route path='/seven-movie' element={<Seven />} />
            <Route path='/silenceoflambs-movie' element={<SilenceofLambs />} />
            <Route path='/graveoffireflies-movie' element={<GraveofFireflies />} />
            <Route path='/lionking-movie' element={<LionKing />} />
            <Route path='/spiderman-movie' element={<Spiderman />} />
            <Route path='/spiritedaway-movie' element={<Spiritedaway />} />
            <Route path='/yourname-movie' element={<YourName />} />
            <Route path='/darkknight-movie' element={<DarkKnight />} />
            <Route path='/inception-movie' element={<Inception />} />
            <Route path='/lordofrings-movie' element={<LordofRings />} />
            <Route path='/matrix-movie' element={<Matrix />} />
            <Route path='/starwars-movie' element={<StarWars />} />
          </Routes>
        </Router>

    </div>
  );
}
}

export default App;
