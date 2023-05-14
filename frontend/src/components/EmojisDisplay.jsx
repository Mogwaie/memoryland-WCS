import { useEffect, useState } from "react";
import axios from "axios";

function getEmojis() {
  const [emojiList, setEmojiList] = useState([]);
  const emojisCategories = [
    "https://emoji-api.com/categories/food-drink?access_key=9f5c7092997e0a8d29e350edd8f278d3e03405a8",
    "https://emoji-api.com/categories/animals-nature?access_key=9f5c7092997e0a8d29e350edd8f278d3e03405a8",
  ];

  useEffect(() => {
    const requests = emojisCategories.map((category) => axios.get(category));
    Promise.all(requests)
      .then((responses) => {
        const allEmojis = responses.flatMap((response) => response.data);
        setEmojiList(allEmojis);
      })
      .catch((err) => console.error(err));
  }, []);

  // filters
  const fruitsList = emojiList
    .filter((emoji) => emoji.subGroup === "food-fruit")
    .slice(0, 6);

  const forestList = emojiList
    .filter((emoji) => emoji.subGroup === "plant-other")
    .slice(0, 6);

  const animalList = emojiList
    .filter((emoji) => emoji.subGroup === "animal-mammal")
    .slice(0, 6);

  return { emojiList, fruitsList, forestList, animalList };
}

export default getEmojis;
