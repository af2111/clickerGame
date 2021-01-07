import React from "react";

import {BrowserRouter as Router, Route} from "react-router-dom";

import CurrencyCalculator from "./pages/currency-calculator/CurrencyCalculator";
import Clock from "./pages/Clock/Clock";
import Game from "./pages/Clicker/Game/Game.js";
class App extends React.Component {
    render() {
        return (
            <Router>
                <Route path="/" exact component={Clock}/>
                <Route path="/currency-calculator" component={CurrencyCalculator}/>
                <Route path="/clicker" component={Game}/>
            </Router>
        );
    };
};

export default App;