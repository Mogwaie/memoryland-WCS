import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/all";
import UniversPath from "../components/UniversPath";
import boat from "../assets/images/boat.png";
import compass from "../assets/images/compass.png";
import wave from "../assets/images/waves.png";
import Header from "../components/Header";
import whale from "../assets/images/whale.png";

export default function Map({ isWinForest, isWinFruits }) {
  const navigateMap = useNavigate();

  const navigateToUniver = (path) => {
    navigateMap(path);
  };

  useEffect(() => {
    const boatImage = document.querySelector(".boat");
    gsap.registerPlugin(MotionPathPlugin);

    const masterTimeline = gsap.timeline();
    const navigateToForest = gsap.timeline();
    const navigateToFruits = gsap.timeline();
    const navigateToAnimals = gsap.timeline();

    if (isWinForest === false && isWinFruits === false) {
      navigateToForest
        .to(boatImage, {
          duration: 6.5,
          keyframes: [
            { rotate: "-10deg" },
            { rotate: "10deg" },
            { rotate: "-10deg" },
            { rotate: "10deg" },
            { rotate: "0" },
            { scale: 0, duration: 0.75 },
          ],
          motionPath: {
            path: "#universpath",
            align: "#universpath",
            autoRotate: false,
            start: 0,
            end: 0.325,
            alignOrigin: [0.5, 0.5],
          },
        })
        .add(() => setTimeout(navigateToUniver("/map/forest"), 6500));
    }

    if (isWinForest === true && isWinFruits === false) {
      navigateToFruits
        .to(boatImage, {
          duration: 6.5,
          keyframes: [
            { rotateY: "180deg" },
            { rotate: "-10deg" },
            { rotate: "10deg" },
            { rotate: "-10deg" },
            { rotate: "10deg" },
            { rotate: "0" },
            { scale: 0, duration: 0.75 },
          ],
          motionPath: {
            path: "#universpath",
            align: "#universpath",
            autoRotate: false,
            start: 0.315,
            end: 0.7,
            alignOrigin: [0.75, 0.75],
          },
        })
        .add(() => setTimeout(navigateToUniver("/map/fruits"), 6500));
    }

    if (isWinFruits === true && isWinForest === true) {
      navigateToAnimals
        .to(boatImage, {
          duration: 6.5,
          keyframes: [
            { rotateY: "0deg" },
            { rotate: "-10deg" },
            { rotate: "10deg" },
            { rotate: "-10deg" },
            { rotate: "10deg" },
            { rotate: "0" },
            { scale: 0, duration: 0.75 },
          ],
          motionPath: {
            path: "#universpath",
            align: "#universpath",
            autoRotate: false,
            start: 0.73,
            end: 0.98,
            alignOrigin: [0.75, 0.75],
          },
        })
        .add(() => setTimeout(navigateToUniver("/map/animals"), 6500));
    }

    masterTimeline
      .add(navigateToForest)
      .add(navigateToFruits)
      .add(navigateToAnimals);
  }, []);

  return (
    <div>
      <Header
        path="/story"
        audioSrc="../src/assets/audio/TreasureInTheSea.mp3"
        forefinger=""
        listenTheStory=""
        isOnRepeat
        soundon="../src/assets/icons/soundon.svg"
        soundoff="../src/assets/icons/soundoff.svg"
      />
      <div className="map-container">
        <img className="boat" src={boat} alt="boat" />
        <UniversPath />
        <img className="compass" src={compass} alt="compass" />
        <img className="waves-bottom" src={wave} alt="wave" />
        <img className="waves-top" src={wave} alt="wave" />
        <img className="whale" src={whale} alt="wave" />
      </div>
    </div>
  );
}

Map.propTypes = {
  isWinForest: PropTypes.bool.isRequired,
  isWinFruits: PropTypes.bool.isRequired,
};
