import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "../pages/Home";
import Story from "../pages/Story";
import Map from "../pages/Map";
import Win from "../pages/Win";
import Lose from "../pages/Lose";
import Error404 from "../pages/Error404";
import Animals from "../pages/Animals";
import Fruits from "../pages/Fruits";
import Forest from "../pages/Forest";

function Routed() {
  const [isWinForest, setIsWinForest] = useState(false);
  const [isWinFruits, setIsWinFruits] = useState(false);
  const [isWinAnimals, setIsWinAnimals] = useState(false);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story" element={<Story />} />
          <Route
            path="/map"
            element={
              <Map isWinForest={isWinForest} isWinFruits={isWinFruits} />
            }
          />
          <Route path="/win" element={<Win />} />
          <Route
            path="/map/forest"
            element={<Forest setIsWinForest={setIsWinForest} />}
          />
          <Route
            path="/map/fruits"
            element={
              <Fruits
                setIsWinFruits={setIsWinFruits}
                setIsWinForest={setIsWinForest}
              />
            }
          />
          <Route path="/lose" element={<Lose />} />
          <Route
            path="/map/animals"
            element={
              <Animals
                setIsWinAnimals={setIsWinAnimals}
                isWinAnimals={isWinAnimals}
              />
            }
          />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Routed;
