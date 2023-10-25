import React from "react";
import './App.css';

import musicSound from './sound/The Scientist com pássaros e trovões - Coldplay .mp3';
import imgProfile from './image/IMG_20230707_223036_915.jpg';

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
      
    <img className="img" src={imgProfile} />
           <h1>Meus Links</h1>
      <ul>
       <li className="b"><a href="https://victorssx.github.io/My_Page/">My_Page</a></li>
        <li className="b"><a href="https://victorssx.github.io/one-piece/">One Piece</a></li>
        <li className="b"><a href="https://victorssx.github.io/Projeto-X/">X-Men</a></li>
        <li className="b"><a href="https://victorssx.github.io/R-Digtal/">Relógio Digital</a></li>
        <li className="b"><a href="https://victorssx.github.io/Clima/">Climas</a></li>
        <li className="b"><a href="https://victorssx.github.io/projeto-Landing-page-pepsi-/">Landing-page pepsi</a></li>
        <li className="b"><a href="https://victorssx.github.io/projeto_website/">Website GPT-3</a></li>
        <li className="b"><a href="https://victorssx.github.io/clone-netflix/">Netflix-Clone</a></li>
      </ul>
    </div>
    </div>
  );
}

export default App;
