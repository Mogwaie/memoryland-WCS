import { Link, useNavigate } from "react-router-dom";
import losepirate from "../assets/images/losepirate.png";
import Header from "../components/Header";

function Lose() {
  const navigate = useNavigate();
  return (
    <div className="lose-container">
      <Header
        path=""
        audioSrc="../src/assets/audio/Lose.mp3"
        isOnRepeat
        forefinger=""
        listenTheStory=""
        soundon="../src/assets/icons/soundon.svg"
        soundoff="../src/assets/icons/soundoff.svg"
      />
      <div className="lose-container-status">
        <h1>YOU LOSE</h1>
        <p>The pirate got to the treasure before you</p>
        <img src={losepirate} alt="Pirate-Lose" className="piratePicture" />
        <Link to="/map" className="buttonUp">
          <button
            type="button"
            className="primary-button"
            onClick={() => navigate(-1)}
          >
            Play again
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Lose;
