import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SingleCard from "./SingleCard";

export default function Game({
  emojiGameList,
  winForest,
  winFruits,
  background,
  pirate,
  winAnimals,
}) {
  const [cardsEmojisList, setCardsEmojisList] = useState([]);
  const [turns, setTurns] = useState(10);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const location = useLocation();

  const navigate = useNavigate();
  const navigation = (path) => {
    navigate(path);
  };

  console.info(turns);

  // suffle cards
  const shuffleCards = () => {
    const shuffleDeckCards = [...emojiGameList, ...emojiGameList]
      .sort(() => Math.random() - 0.5)
      .map((cardEmojisList) => ({
        ...cardEmojisList,
        id: Math.random(),
        matched: false,
      }));
    setChoiceOne(null);
    setChoiceTwo(null);
    setCardsEmojisList(shuffleDeckCards);
    setTurns(10);
  };

  //   handle a choice
  const handleChoice = (emojiObject) => {
    if (choiceOne ? setChoiceTwo(emojiObject) : setChoiceOne(emojiObject));
  };

  // reset choices & increse turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns - 1);
    setDisabled(false);
  };

  // comparing cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.slug === choiceTwo.slug) {
        setCardsEmojisList((previousCards) => {
          return previousCards.map((emojiCard) => {
            if (emojiCard.slug === choiceOne.slug) {
              return { ...emojiCard, matched: true };
            }
            return emojiCard;
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  useEffect(() => {
    shuffleCards();
  }, [emojiGameList]);

  const matchedCards = [];
  cardsEmojisList.map(
    (emoji) => emoji.matched === true && matchedCards.push(emoji)
  );

  if (matchedCards.length === 12) {
    if (location.pathname === "/map/forest") {
      setTimeout(() => winForest(), 1500);
    } else if (location.pathname === "/map/fruits") {
      setTimeout(() => winFruits(), 1500);
    } else if (location.pathname === "/map/animals") {
      setTimeout(() => winAnimals(), 1500);
    }
  } else if (matchedCards.length !== 12 && turns === 0) {
    setTimeout(() => navigation("/lose"), 3000);
  } else {
    console.info("Null");
  }

  return (
    <div className="game">
      <p>Number of turns: {turns}</p>
      <div className="cardsGrid">
        {cardsEmojisList.map((fruit) => (
          <SingleCard
            key={fruit.id}
            fruit={fruit}
            handleChoice={handleChoice}
            flipped={
              fruit === choiceOne || fruit === choiceTwo || fruit.matched
            }
            disabled={disabled}
            background={background}
            pirate={pirate}
          />
        ))}
      </div>
    </div>
  );
}

Game.propTypes = {
  emojiGameList: PropTypes.string.isRequired,
  winForest: PropTypes.func.isRequired,
  winFruits: PropTypes.func.isRequired,
  background: PropTypes.string.isRequired,
  pirate: PropTypes.string.isRequired,
  winAnimals: PropTypes.func.isRequired,
};
