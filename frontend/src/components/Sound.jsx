import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function AudioPlayer({ audioSrc, isPlaying, isOnRepeat }) {
  const [audio] = useState(new Audio(audioSrc));
  useEffect(() => {
    if (isPlaying) {
      audio.play();
      audio.loop = isOnRepeat;
    } else {
      audio.pause();
    }
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio, isPlaying, isOnRepeat]);
}

function Sound({
  audioSrc,
  isOnRepeat,
  forefinger,
  listenTheStory,
  soundon,
  soundoff,
}) {
  const [isPlaying, setIsPlaying] = useState(false);

  function handleSound() {
    setIsPlaying(!isPlaying);
  }

  return (
    <>
      <button className="button-sound" type="button" onClick={handleSound}>
        {isPlaying ? (
          <img src={soundon} alt="icon sound on" />
        ) : (
          <div>
            <img src={soundoff} alt="icon sound off" />
            <div className="listenTheStory">
              <p>{forefinger}</p>
              <p>{listenTheStory}</p>
            </div>
          </div>
        )}
      </button>
      <AudioPlayer
        audioSrc={audioSrc}
        isPlaying={isPlaying}
        isOnRepeat={isOnRepeat}
      />
    </>
  );
}

export default Sound;

Sound.propTypes = {
  audioSrc: PropTypes.string.isRequired,
  isOnRepeat: PropTypes.bool.isRequired,
  forefinger: PropTypes.string.isRequired,
  listenTheStory: PropTypes.string.isRequired,
  soundon: PropTypes.string.isRequired,
  soundoff: PropTypes.string.isRequired,
};
