import { Link } from "react-router-dom";
import Header from "../components/Header";

function Story() {
  return (
    <div className="storyPageDiv">
      <Header
        path="/"
        audioSrc="../src/assets/audio/myDearestFriendNoReverb.mp3"
        isOnRepeat={false}
        forefinger="👆"
        listenTheStory="listen the story"
        soundon="../src/assets/icons/soundon.svg"
        soundoff="../src/assets/icons/soundoff.svg"
      />
      <div className="storyDiv">
        <div className="halfOneDiv">
          <img
            className="letterImg"
            src="./src/assets/images/history.png"
            alt="Letter from the bottle"
          />
        </div>
        <div className="halfTwoDiv">
          <div className="bottleAndButtonDiv">
            <img
              className="bottleImg"
              src="./src/assets/images/bottle.png"
              alt="Message from the bottle"
            />
            <Link to="/map">
              <button className="story-button circle-button" type="button">
                Go !
              </button>
            </Link>
          </div>
          <img
            className="wavesImg"
            src="./src/assets/images/waves_story.png"
            alt="Sea waves"
          />
        </div>
      </div>
    </div>
  );
}

export default Story;
