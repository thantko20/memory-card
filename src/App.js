import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App = () => {
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

  return (
    <div className='min-h-screen bg-zinc-900 text-slate-50 font-varela'>
      <Header />
      <Main
        cards={agentsData}
        handleOnCardClick={() => {}}
        level={'1'}
        score={'2'}
        highScore={'3'}
      />
    </div>
  );
};

export default App;
