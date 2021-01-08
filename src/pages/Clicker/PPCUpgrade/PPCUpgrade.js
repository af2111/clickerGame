import React from "react";

export class PPCUpgrade extends React.Component {
    render() {
        return (
            <div class="PPCupgrade">
                <button className="button" onClick={e => this.props.onClick(this.props.price, this.props.amount, e)}>Buy +{this.props.amount} PPC(Points per Click) for {this.props.price} Points!</button>
            </div>
        )
    }
}
