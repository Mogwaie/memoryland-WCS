import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import Game from "../components/Game";
import getEmojis from "../components/EmojisDisplay";
import Header from "../components/Header";
import Fruit from "../assets/images/fruits-bg.jpeg";
import piratesearch from "../assets/images/piratesearch.png";

function Fruits({ setIsWinFruits }) {
  const { fruitsList, emojiList } = getEmojis();
  const navigate = useNavigate();
  const winFruits = () => {
    setIsWinFruits(true);
    navigate("/map");
  };

  return (
    <div className="container" style={{ backgroundImage: `url(${Fruit})` }}>
      <Header
        path="/"
        audioSrc="../src/assets/audio/Lathgertha.mp3"
        isOnRepeat
        forefinger=""
        listenTheStory=""
        soundon="../src/assets/icons/sound-on-white.svg"
        soundoff="../src/assets/icons/soundoff.svg"
      />
      <h1>Fruits Island</h1>
      <div className="containerGame">
        <Game
          emojiGameList={fruitsList}
          emojiList={emojiList}
          winFruits={winFruits}
          background={{ backgroundColor: "#2ecc71" }}
          pirate={piratesearch}
        />
      </div>
      <Link to="/map/:Fruits" />
    </div>
  );
}

Fruits.propTypes = {
  setIsWinFruits: PropTypes.func.isRequired,
};

export default Fruits;
