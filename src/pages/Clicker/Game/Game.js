import React from "react";

import Upgrade from "../Upgrade/Upgrade";
import {getCookie, setCookie} from "../Util/cookies";
class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: ((getCookie("count") === undefined) ? 0 : parseInt(getCookie("count"))),
            ppc: ((getCookie("ppc") === undefined) ? 1 : parseInt(getCookie("ppc")))
        }
        this.buyPPC=this.buyPPC.bind(this);
    }
    setCount(val) {
        this.setState({
            count: val
        })
    }
    setPPC(val) {
        this.setState({
            ppc: val
        })
    }
    buyPPC(price, amount) {
        if(this.state.count >= price) {
            this.setCount(this.state.count - price);
            this.setPPC(this.state.ppc + amount)
        }
        else {
            alert("You can't afford this!")
        }
    }
    

    componentWillUnmount() {
        clearInterval(this.saveInterval);
    }
    save() {
        for (let key in this.state) {
            setCookie(key, this.state[key]);
        }
    }
    componentDidMount() {
        this.saveInterval = setInterval(() => this.save(), 60000);
    }
    render() {
        return (
            <div id="game">
                <div id="count">
                    <cite id="ppcDisplay">You have {this.state.ppc} Points Per Click</cite>
                    <h1 id="countDisplay">{this.state.count}</h1>
                    <button className="countButton button" onClick={e => this.setCount(this.state.count + this.state.ppc, e)}>Click me!</button>
                </div>
                <div id="save">
                    <button className="saveButton button" onClick={e => this.save(e)}>Save</button>
                </div>
                <div id="shop">
                    <Upgrade amount={10} price={Math.floor(this.state.ppc * 0.1 * 1000)} onClick={this.buyPPC}/>
                </div>
            </div>
        );
    };
};
export default Game;