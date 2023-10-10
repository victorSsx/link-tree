import react from "react";
import './App.css';

import musicSound from './sound/The Scientist com pássaros e trovões - Coldplay .mp3'

function App() {
  return (
    <div>
      <div className="background"></div>
    <div className="sumir">
      <audio controls autoPlay>
        <source src={musicSound} />
        </audio>
        </div>

    <div className="linktree">
      <h1>Meus Links</h1>
      <ul>
        <li><a href="https://victorssx.github.io/My_Page/">My_Page</a></li>
        <li><a href="https://victorssx.github.io/One-Piece-X/">One Piece</a></li>
        <li><a href="https://victorssx.github.io/Projeto-X/">X-Men</a></li>
        <li><a href="https://victorssx.github.io/clone-netflix/">Netflix-Clone</a></li>
        <li><a href="https://victorssx.github.io/projeto-Landing-page-pepsi-/">Landing-page pepsi</a></li>
      </ul>
    </div>
    </div>
  );
}

export default App;
