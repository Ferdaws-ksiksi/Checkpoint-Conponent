import './App.css';
import React from 'react';
import ProfilePhoto from './component/Profile/ProfilePhoto.js';
import {FullName} from './component/Profile/FullName.js';
import {Address} from './component/Profile/Address.js';
function App() {
  return (
    <div className="App">
      <p id="tada">Try to touch me !!</p>
      <ProfilePhoto/>
      <FullName/>
      <Address/>
    </div>
  );
}

export default App;