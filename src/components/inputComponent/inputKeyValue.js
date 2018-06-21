import React from "react";
import Input from "./input";

export default class InputKeyValue extends Input {

    constructor (props) {
        super(props);
        this.state = {
            data: {}
        };
    }

    onDeleteAttribute () {
        this.props.deleteAttribute(this.props.attrId);
    }

    render () {
        return (
            <div>
                Key:
                <input
                    name="key"
                    placeholder="Key"
                    value={this.state.data.key}
                    onChange={(e) => this.change(e)}
                />
                Value:
                <input
                    name="value"
                    placeholder="Value"
                    value={this.state.data.value}
                    onChange={(e) => this.change(e)}
                />
                <button onClick={this.onDeleteAttribute.bind(this)}>
                    Delete Attribute
                </button>
            </div>
        );
    }
}