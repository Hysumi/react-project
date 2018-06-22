import React from "react";
import Input from "./input";

export default class InputKeyValue extends Input {

    constructor (props) {
        super(props);
        this.state = {
            key: "",
            value: ""
        };
    }

    onDeleteAttribute () {
        this.props.deleteAttribute(this.props.attrId);
    }

    change = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            // Callback after state change
            this.props.updateAttribute(this.props.index, this.state.key, this.state.value);
        });
    }

    render () {
        return (
            <div className="line">
                <label className="label-key">Key:</label>
                <input className="input-key"
                    name="key"
                    placeholder="Key"
                    value={this.state.key}
                    onChange={(e) => this.change(e)}
                />
                <label className="label-value">Value:</label>
                <input className="input-value"
                    name="value"
                    placeholder="Value"
                    value={this.state.value}
                    onChange={(e) => this.change(e)}
                />
                <button type="button" className="button-delete button-del" onClick={this.onDeleteAttribute.bind(this)}>
                    Delete Attribute
                </button>
            </div>
        );
    }
}
