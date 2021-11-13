import React from 'react'
import Frontpage from './components/Frontpage';
import ObsPopup from './components/ObsPopup';
import { useState } from 'react';

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);   
  return (
    <div>
 
      <Frontpage/>
    <button onClick={() => setButtonPopup(true)}>Open obs popup</button>
      <ObsPopup trigger={buttonPopup} setTrigger ={setButtonPopup}/>
    </div>
  );
  }
export default App;
