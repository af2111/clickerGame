import React from "react";

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }
    
    tick() {
        this.setState({
            date: new Date()
        })
    }
    componentDidMount() {
        this.ticker = setInterval(() => this.tick(), 1000)
    }
    componentWillUnmount() {
        clearInterval(this.ticker);
    }
    render() {
        return (
            <div className="clock">
                It's {this.state.date.toLocaleTimeString()}
            </div>
        )
    }
}

export default Clock;