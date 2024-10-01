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
  const { loading, error, characters } = useSelector(
    (state) => state.heroSlice
  );

  useEffect(() => {
    dispatch(fetchSuperHeroData());
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <Navigation />

        <Routes>
          <Route
            path="/"
            element={
              <Container className="mt-3">
                <TradeScreen
                  loading={loading}
                  error={error}
                  characters={characters}
                />
              </Container>
            }
          />
          <Route path="/collection" element={<Collection />} />
        </Routes>

        <BottomAlert loading={loading} error={error} />
      </div>
    </Router>
  );
}

export default App;
