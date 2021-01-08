import React from 'react';
import ReactDOM from 'react-dom';

import Game from "./pages/Clicker/Game/Game";
import "./pages/Clicker/Game/Game.css"
ReactDOM.render(
    <React.StrictMode>
        <Game/>
    </React.StrictMode>,
    document.getElementById("root")
)