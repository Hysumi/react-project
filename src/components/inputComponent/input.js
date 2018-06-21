import React from "react";

export default class Input extends React.Component {
    state = {
        data: "",
        name: "",
    }

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render () {
        return (
            <div>
                {this.state.name}:
                <input
                    name="{this.state.name}"
                    placeholder="Key"
                    value={this.state.data}
                    onChange={(e) => this.change(e)}
                />
            </div>
        );
    }
}