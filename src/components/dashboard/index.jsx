import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/userContexts";

import { WordBox, ButtonsBox, Container, BoxRight, BoxLeft } from "./styles";

function Dashboard() {
  const { loadWords, words, allwords } = useContext(AuthContext);
  const [favorites, setFavorites] = useState([]);
  const [history, setHistory] = useState([]);
  const [change, setChange] = useState(false);
  const [arrayRender, setArrayRender] = useState([]);

  function showList(list) {
    setArrayRender(list);
  }
  function showWords() {
    setArrayRender(["hello", "walk", "step", "head", "super","talk","foot","good","nice"]);
  }

  function addFavorite(word) {
    const itemRepeted = favorites.find((item) => {
      return item === word;
    });

    if (!itemRepeted) {
      setFavorites((previous) => [...previous, word]);
    }
  }

  function removeFavorite(word) {
    const filteredFavorites = favorites.filter((item) => {
      return item !== word;
    });
    setFavorites(filteredFavorites);
  }

  function handleClick(word) {
    const itemRepeted = history.find((item) => {
      return item === word;
    });

    if (!itemRepeted) {
      setHistory((previous) => [...previous, word]);
    } else {
      loadWords(word);
      setChange(true);
    }
  }

  let wordTitle = "";
  let phoneticWord = "";
  let wordType = "";
  let wordDefinition = "";
  let wordSound = "";

  if (words.length >= 1) {
    wordTitle = words[0].word;
    phoneticWord = words[0].phonetic;
    wordType = words[0].meanings[0].partOfSpeech;
    wordDefinition = words[0].meanings[0].definitions[0].definition;
    wordSound = words[0].phonetics[0].audio;
   
  }

  return (
    <>
      <Container>
        <BoxLeft>
          <div>
            <div className="pinkBox">
              {change && (
                <div>
                  {" "}
                  <h2>{wordTitle}</h2>
                  <h3>{phoneticWord}</h3>
                </div>
              )}
            </div>

            <audio controls src={wordSound}></audio>

            <div className="meaningsBox">
              {change && (
                <div>
                  <h2>Meanings</h2>

                  <p>
                    {wordType} - 
                  </p>
                </div>
              )}
            </div>
            <div className="btns">
              <button>Voltar</button>
              <button>Proxima</button>
            </div>
          </div>
        </BoxLeft>
        <BoxRight>
          <ButtonsBox>
            <button onClick={showWords}>Word List</button>
            <button onClick={() => showList(favorites)}>Favorites</button>
            <button onClick={() => showList(history)}>History</button>
          </ButtonsBox>

          <WordBox>
            <ul>
              {arrayRender.map((word, index) => (
                <li
                  onMouseOver={() => handleClick(word)}
                  onDoubleClick={() => addFavorite(word)}
                   onClick={() => removeFavorite(word)}
                  key={index}
                >
                  {word}
                </li>
              ))}
            </ul>
          </WordBox>
        </BoxRight>
      </Container>
    </>
  );
}

export default Dashboard;
