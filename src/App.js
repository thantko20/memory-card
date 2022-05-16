import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App = () => {
  const [agentsData, setAgentsData] = useState([]); // Reference to be stored from api req
  const [playCards, setPlayCards] = useState([]); // Cards to be played
  const [clickedNames, setClickedNames] = useState([]);
  const [level, setLevel] = useState(1);
  const [size, setSize] = useState(4);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  // Change highscore based on *score* every render
  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
    }
  }, [score, highScore]);

  // API Req after first render
  useEffect(() => {
    const fetchAgentsData = async () => {
      const req = await fetch(
        'https://valorant-api.com/v1/agents?isPlayableCharacter=true',
      );
      const response = await req.json();

      setAgentsData(response.data);
    };

    fetchAgentsData();
  }, []);

  // playCards array will be updated as the size changes
  // over time
  useEffect(() => {
    setPlayCards(_.sampleSize(agentsData, size));
  }, [agentsData, size]);

  const resetGame = () => {
    setSize(4);
    setPlayCards(_.shuffle(playCards));
    setLevel(1);
    setScore(0);
    setClickedNames([]);
  };

  const levelUp = () => {
    if (size + 4 > agentsData.length) {
      resetGame();
      return;
    }
    setSize(size + 4);
    setLevel(level + 1);
    setScore(score + 1);
  };

  const completeRound = () => {
    setPlayCards(_.shuffle(playCards));
    setScore(score + 1);
  };

  const handleOnCardClick = (agentName) => {
    // Lost,i.e, reset the game
    if (clickedNames.includes(agentName)) {
      resetGame();
      return;
    }

    let newClickedNames = [...clickedNames, agentName];
    if (newClickedNames.length === playCards.length) {
      levelUp();
      newClickedNames = [];
    } else {
      completeRound();
    }

    setClickedNames(newClickedNames);
  };

  return (
    <div className='min-h-screen bg-zinc-900 text-slate-50 font-varela'>
      <Header />
      <Main
        cards={playCards}
        handleOnCardClick={handleOnCardClick}
        level={level}
        score={score}
        highScore={highScore}
      />
    </div>
  );
};

export default App;
