import { Link } from "react-router-dom";
import winPirate from "../assets/images/win-pirate.png";
import Header from "../components/Header";

function Win() {
  return (
    <div className="win-container">
      <Header
        path=""
        className="header-win"
        audioSrc="../src/assets/audio/Win.mp3"
        forefinger=""
        listenTheStory=""
        isOnRepeat
        soundon="../src/assets/icons/soundon.svg"
        soundoff="../src/assets/icons/soundoff.svg"
      />
      <div className="win-container-status">
        <h1>YOU WIN</h1>
        <p>You are the greatest pirate of all time! Victory is yours!</p>
        <img src={winPirate} alt="Pirate-Win" className="piratePictureWin" />
        <Link to="/" className="buttonMap">
          <button type="button" className="primary-button">
            Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Win;
