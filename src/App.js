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
import BottomAlert from "./components/BottomAlert";

function App() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.heroSlice);

  useEffect(() => {
    dispatch(fetchSuperHeroData());
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <Navigation />
        <Container className="mt-3">
          <Routes>
            <Route
              path="/"
              element={<TradeScreen loading={loading} error={error} />}
            />
            <Route path="/collection" element={<Collection />} />
          </Routes>
        </Container>
        <BottomAlert loading={loading} error={error} />
      </div>
    </Router>
  );
}

export default App;
