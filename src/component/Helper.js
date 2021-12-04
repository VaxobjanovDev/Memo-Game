import React from 'react'

const Helper = () => {

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
        {flipCard() restart()}
    )
}

export default Helper
