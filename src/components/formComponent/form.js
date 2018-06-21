import React from "react";

// Components
import { InputKeyValue } from "./../inputComponent";

export default class Form extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            attributes: [],
            id: 0
        };
        this.addAttribute = this.addAttribute.bind(this);
        this.deleteAttribute = this.deleteAttribute.bind(this);
    }

    addAttribute (e) {
        e.preventDefault();
        const newAttribute = {id: this.state.id, key: "", value: ""};
        let id = this.state.id + 1;
        let attributes = [...this.state.attributes, newAttribute];
        this.setState({
            id,
            attributes
        });
    }

    deleteAttribute (id) {
        let _state = [];
        for (var i = 0; i < this.state.attributes.length; i++) {
            if (this.state.attributes[i].id === id) {
                delete this.state.attributes[i];
                continue;
            }
            _state.push(this.state.attributes[i]);
        }
        this.setState({attributes: _state});
    }

    getInputOfType (attribute, type = "default") {
        let component;
        switch (type) {
        default:
            component = (
                <InputKeyValue
                    // attribute
                />
            );
            break;
        }
        return component;
    }

    setUniqueId () {

    }

    render () {
        return (
            <div>
                <button onClick={(e) => this.addAttribute(e)}>Add Attribute</button>
                {this.state.attributes.map((attr) => {
                    return (
                        <div key={attr.id}>
                            {this.getInputOfType(attr)}
                            <button onClick={this.deleteAttribute.bind(this, attr.id)}>
                                Delete Attribute
                            </button>
                        </div>
                    );
                })}
            </div>
        );
    }
}