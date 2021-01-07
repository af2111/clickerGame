import React from "react";

class Upgrade extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div class="upgrade">
                <button onClick={e => this.props.onClick(this.props.price, this.props.amount, e)}>Buy +{this.props.amount} PPC(Points per Click) for {this.props.price} Points!</button>
            </div>
        )
    }
}

export default Upgrade;