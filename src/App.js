import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App = () => {
  // Current Cards Array size
  const [size, setSize] = useState(4);

  // Original Data
  const [agentsData, setAgentsData] = useState([]);

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

  // Cards
  const [playCards, setPlayCards] = useState([]);
  // playCards array will be updated as the size changes
  // with level
  useEffect(() => {
    setPlayCards(_.sampleSize(agentsData, size));
  }, [agentsData, size]);

  return (
    <div className='min-h-screen bg-zinc-900 text-slate-50 font-varela'>
      <Header />
      <Main
        cards={playCards}
        handleOnCardClick={() => {}}
        level={'1'}
        score={'2'}
        highScore={'3'}
      />
      <button onClick={() => setSize(size + 1)}>Click</button>
    </div>
  );
};

export default App;
