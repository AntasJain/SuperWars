import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import TradeScreen from "./pages/TradeScreen";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { fetchSuperHeroData } from "./store/superHeroDataSlice";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Collection from "./pages/Collection";
import Navigation from "./components/Navigation";

function App() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.heroSlice);

  let display;

  useEffect(() => {
    dispatch(fetchSuperHeroData());
  }, [dispatch]);

  if (loading) display = <p> Retrieving your Cards for the game...</p>;
  if (error)
    display = <p>Problem Retrieving your Cards... Check Console for more</p>;

  return (
    <Router>
      <div className="App">
        <Navigation />
        <Container className="mt-3">
          <Routes>
            <Route path="/" element={<TradeScreen display={display} />} />
            <Route path="/collection" element={<Collection />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
