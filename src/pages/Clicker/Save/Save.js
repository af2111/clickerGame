import React from "react";

export class Save extends React.Component {
    render = () => (
        <div id="save">
            <button className="button saveButton" onClick={e => this.props.onClick(e)}>Save</button>
        </div>
    )
}