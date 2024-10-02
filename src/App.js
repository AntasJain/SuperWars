import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import TradeScreen from "./pages/TradeScreen";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { fetchSuperHeroData } from "./store/superHeroDataSlice";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Collection from "./pages/Collection";
import Navigation from "./components/Navigation";
import BottomAlert from "./components/BottomAlert";
import Rules from "./pages/Rules";

function App() {
  const dispatch = useDispatch();
  const { loading, error, characters } = useSelector(
    (state) => state.heroSlice
  );

  useEffect(() => {
    dispatch(fetchSuperHeroData());
  }, [dispatch]);

  const [resetHome, setResetHome] = useState(false);
  const handleResetHome = () => {
    setResetHome((prev) => !prev);
  };
  return (
    <Router>
      <div className="App">
        <Navigation onHomeReset={handleResetHome} />

        <Routes>
          <Route
            path="/"
            element={
              <Container className="mt-3">
                <TradeScreen
                  loading={loading}
                  error={error}
                  characters={characters}
                  reset={resetHome}
                />
              </Container>
            }
          />
          <Route path="/collection" element={<Collection />} />
          <Route
            path="/rules"
            element={
              <Container className="mt-3">
                <Rules />
              </Container>
            }
          />
        </Routes>

        <BottomAlert loading={loading} error={error} />
      </div>
    </Router>
  );
}

export default App;
