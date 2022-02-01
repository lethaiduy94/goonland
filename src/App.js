import './App.css';
import MainScreen from './screen/MainScreen';
import Flower from './component/Flower'
import Ranking2 from './component/ranking/Ranking2'
import TopRanking from './screen/TopRanking';
import AllFlower from './screen/AllFlower';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "hyoka_test/" element = {<MainScreen />}></Route>
        <Route path = "/hyoka_test/flower" element = {<Flower />}></Route>
        <Route path = "/hyoka_test/ranking" element = {<Ranking2 />}></Route>
        <Route path = "/hyoka_test/topranking" element = {<TopRanking />}></Route>
        <Route path = "/hyoka_test/allflower" element = {<AllFlower />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
