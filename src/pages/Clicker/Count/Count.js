import React from "react";

export class Count extends React.Component {

    render = () => (
        <div id="count">
            <cite id="ppcDisplay">You have {this.props.ppc} Points Per Click</cite>
            <h1 id="countDisplay">{this.props.count}</h1>
            <button className="countButton button" onClick={e => this.props.onClick(this.props.count + this.props.ppc, e)}>Click me!</button>
        </div>
    )
}