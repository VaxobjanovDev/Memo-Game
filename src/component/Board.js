import { React, useState } from "react";
import ImageData from "./ImageData";
import { shuffle } from "lodash";
import Animation from "./Animation/Animation";
import "./Main.css";
const Board = () => {
  const [cards, setCards] = useState(shuffle([...ImageData, ...ImageData]));
  const [activeCards, setActiveCards] = useState([]);
  const [matchCards, setMatchCards] = useState([]);
  const [clicks, setClicks] = useState(0);
  const [win, setWin] = useState(false);
  function flipCard(index) {
    if (activeCards.length === 0) {
      setActiveCards([index]);
    }
    if (activeCards.length === 1) {
      const firstIndex = activeCards[0];
      const secondIndex = index;
      if (cards[firstIndex] === cards[secondIndex]) {
        if (matchCards.length + 2 === cards.length) {
          setWin(true);
        }
        setMatchCards([...matchCards, firstIndex, secondIndex]);
      }
      setActiveCards([...activeCards, index]);
    }
    if (activeCards.length === 2) {
      setActiveCards([]);
    }
    setClicks(clicks + 1);
  }
  function restart() {
    setCards(shuffle([...ImageData, ...ImageData]));
    setActiveCards([]);
    setMatchCards([]);
    setClicks(0);
    setWin(false);
  }

  return (
    <div className="section">
      {win && <Animation />}
      <div className="container">
        <div className="text-header">
          <h1>Memo Game With React</h1>
        </div>
        <div className="board">
          {cards.map((item, index) => {
            const flipped =
              activeCards.indexOf(index) !== -1 ||
              matchCards.indexOf(index) !== -1;
            return (
              <div className={"card-wrapper " + (flipped ? "flipped" : "")}>
                <div onClick={() => flipCard(index)} className="card">
                  <div className="card-front">
                    <img src={item} alt="Card images"/>
                  </div>
                  <div className="card-back"></div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="statistics">
          <h1>Clicks:{clicks}</h1>
          <div class="center">
            <input
              onClick={() => restart()}
              class="button"
              type="button"
              value="Restart"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
