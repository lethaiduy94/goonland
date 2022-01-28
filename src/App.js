import './App.css';
import MainScreen from './screen/MainScreen';
import Flower from './component/Flower'
import Ranking2 from './component/ranking/Ranking2'
import TopRanking from './screen/TopRanking';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<MainScreen />}></Route>
        <Route path = "/flower" element = {<Flower />}></Route>
        <Route path = "/ranking" element = {<Ranking2 />}></Route>
        <Route path = "/topranking" element = {<TopRanking />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
