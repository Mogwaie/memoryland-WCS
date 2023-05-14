import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Game from "../components/Game";
import getEmojis from "../components/EmojisDisplay";
import Header from "../components/Header";
import Forests from "../assets/images/forest-bg.jpeg";
import piratesword from "../assets/images/piratesword.png";

function Forest({ setIsWinForest }) {
  const { forestList, emojiList } = getEmojis();
  const navigate = useNavigate();
  const winForest = () => {
    setIsWinForest(true);
    navigate("/map");
  };

  return (
    <div className="container" style={{ backgroundImage: `url(${Forests})` }}>
      <Header
        path="/"
        audioSrc="../src/assets/audio/Forest.mp3"
        isOnRepeat
        forefinger=""
        listenTheStory=""
        soundon="../src/assets/icons/sound-on-green.svg"
        soundoff="../src/assets/icons/soundoff.svg"
      />
      <h1>Forest Island</h1>
      <div className="containerGame">
        <Game
          emojiGameList={forestList}
          emojiList={emojiList}
          winForest={winForest}
          background={{ backgroundColor: "#06544d" }}
          pirate={piratesword}
        />
      </div>
      <Link to="/map/:Forest" />
    </div>
  );
}

Forest.propTypes = {
  setIsWinForest: PropTypes.func.isRequired,
};

export default Forest;
