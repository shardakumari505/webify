import React,{Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar/navbar.components';
import Dashboard from './Pages/Dashboard/dashboard.components';
import HorrorPage from './Pages/Horror/horror-page';
import RomanticComedyPage from './Pages/Romantic-Comedy/romantic-comedy-page';
import MysteryPage from './Pages/Mystery/mystery-page';
import AnimePage from './Pages/Anime/anime-page';
import ActionPage from './Pages/Action/action-page';
import AlienPage from './Pages/All-Movies/Horror-Movies/Alien-movie';
import PsychoPage from './Pages/All-Movies/Horror-Movies/Psycho-movie';
import ShiningPage from './Pages/All-Movies/Horror-Movies/The-shining-movie';
import TheThing from './Pages/All-Movies/Horror-Movies/The-thing-movie';
import TumbbadPage from './Pages/All-Movies/Horror-Movies/Tumbbad-movie';
import ChhichhorePage from './Pages/All-Movies/Romantic-Comedy-Movies/Chhichhore-movie';
import CityLightsPage from './Pages/All-Movies/Romantic-Comedy-Movies/City-lights-movie';
import ForrestGumpPage from './Pages/All-Movies/Romantic-Comedy-Movies/Forrest-Gump-movie';
import LifeIsBeautifulPage from './Pages/All-Movies/Romantic-Comedy-Movies/Life-is-beautiful-movie';
import ModernTimesPage from './Pages/All-Movies/Romantic-Comedy-Movies/Modern-times-movie';
import LivesOfOthersPage from './Pages/All-Movies/Mystery-Movies/Lives-of-others-movie';
import MirrorGamePage from './Pages/All-Movies/Mystery-Movies/Mirror-game-movie';
import RearWindowPage from './Pages/All-Movies/Mystery-Movies/Rear-window-movie';
import SevenPage from './Pages/All-Movies/Mystery-Movies/Seven-movie';
import SilenceofLambsPage from './Pages/All-Movies/Mystery-Movies/Silence-of-lambs-movie';
import GraveofFireflies from './Pages/All-Movies/Anime-Movies/Grave-of-fireflies-movie';
import LionKingPage from './Pages/All-Movies/Anime-Movies/Lion-king-movie';
import SpidermanPage from './Pages/All-Movies/Anime-Movies/Spider-man-movie';
import SpiritedawayPage from './Pages/All-Movies/Anime-Movies/Spirited-away-movie';
import YourName from './Pages/All-Movies/Anime-Movies/Your-name-movie';
import DarkKnight from './Pages/All-Movies/Action-Movies/Dark-knight-movie';
import InceptionPage from './Pages/All-Movies/Action-Movies/Inception-movie';
import LordofRings from './Pages/All-Movies/Action-Movies/Lord-of-rings-movie';
import MatrixPage from './Pages/All-Movies/Action-Movies/Matrix-movie';
import StarWarsPage from './Pages/All-Movies/Action-Movies/Star-wars-movie';
import ProfilePage from './Pages/Profile-page/profile.page';


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
            <Route path='/alien-movie' element={<AlienPage />} />
            <Route path='/psycho-movie' element={<PsychoPage />} />
            <Route path='/shining-movie' element={<ShiningPage />} />
            <Route path='/thing-movie' element={<TheThing />} />
            <Route path='/tumbbad-movie' element={<TumbbadPage />} />
            <Route path='/chhichhore-movie' element={<ChhichhorePage />} />
            <Route path='/citylights-movie' element={<CityLightsPage />} />
            <Route path='/forrestgump-movie' element={<ForrestGumpPage />} />
            <Route path='/lifeisbeautiful-movie' element={<LifeIsBeautifulPage />} />
            <Route path='/moderntimes-movie' element={<ModernTimesPage />} />
            <Route path='/livesofothers-movie' element={<LivesOfOthersPage />} />
            <Route path='/mirrorgame-movie' element={<MirrorGamePage />} />
            <Route path='/rearwindow-movie' element={<RearWindowPage />} />
            <Route path='/seven-movie' element={<SevenPage />} />
            <Route path='/silenceoflambs-movie' element={<SilenceofLambsPage />} />
            <Route path='/graveoffireflies-movie' element={<GraveofFireflies />} />
            <Route path='/lionking-movie' element={<LionKingPage />} />
            <Route path='/spiderman-movie' element={<SpidermanPage />} />
            <Route path='/spiritedaway-movie' element={<SpiritedawayPage />} />
            <Route path='/yourname-movie' element={<YourName />} />
            <Route path='/darkknight-movie' element={<DarkKnight />} />
            <Route path='/inception-movie' element={<InceptionPage />} />
            <Route path='/lordofrings-movie' element={<LordofRings />} />
            <Route path='/matrix-movie' element={<MatrixPage />} />
            <Route path='/starwars-movie' element={<StarWarsPage />} />
            <Route path='/profile' element={<ProfilePage />} />
          </Routes>
        </Router>

    </div>
  );
}
}

export default App;
