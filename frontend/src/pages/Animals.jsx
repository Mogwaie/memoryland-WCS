import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Animal from "../assets/images/animals-bg.jpeg";
import Game from "../components/Game";
import getEmojis from "../components/EmojisDisplay";
import Header from "../components/Header";
import piratedrink from "../assets/images/piratedrink.png";

function Animals({ setIsWinAnimals }) {
  const { animalList, emojiList } = getEmojis();

  const navigate = useNavigate();
  const winAnimals = () => {
    setIsWinAnimals(true);
    navigate("/win");
  };

  return (
    <div className="container" style={{ backgroundImage: `url(${Animal})` }}>
      <Header
        path="/"
        audioSrc="../src/assets/audio/Frida.mp3"
        isOnRepeat
        forefinger=""
        listenTheStory=""
        soundon="../src/assets/icons/sound-on-orange.svg"
        soundoff="../src/assets/icons/soundoff.svg"
      />
      <h1>Animals Island</h1>
      <div className="containerGame">
        <Game
          emojiGameList={animalList}
          emojiList={emojiList}
          background={{ backgroundColor: "#f39c12" }}
          pirate={piratedrink}
          winAnimals={winAnimals}
        />
      </div>
      <Link to="/map/:Animals" />
    </div>
  );
}

Animals.propTypes = {
  setIsWinAnimals: PropTypes.func.isRequired,
};

export default Animals;
