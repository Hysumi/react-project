import React from "react";

// Components
import { InputKeyValue } from "./../inputComponent";

export default class Form extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            id: [],
        };
        this.addAttribute = this.addAttribute.bind(this);
        this.deleteAttribute = this.deleteAttribute.bind(this);
    }

    addAttribute () {
        let hasNull = false;
        let _state = this.state;
        let cont = 0;
        while (cont < _state.id.length && !hasNull) {
            if (!_state.id[cont] && _state.id[cont] !== 0) {
                _state.id[cont] = cont;
                hasNull = true;
                this.setState({id: _state});
            }
            cont++;
        }
        if (!hasNull) {
            this.state.id.push(this.state.id.length);
        }
        this.setState(this.state);
        console.log(this.state.id);
    }

    deleteAttribute (v) {
        for (var i = 0; i < this.state.id.length; i++) {
            if (this.state.id[i] === v) {
                delete this.state.id[i];
            }
        }
        this.setState({
            id:this.state.id
        });
        console.log(this.state.id);
    }

    getInputOfType (type) {
        let component;
        switch (type) {
        default:
            component = (
                <InputKeyValue />
            );
            break;
        }
        return component;
    }

    render () {
        let { id } = this.state;
        return (
            <div>
                <button className="addbutton" onClick={this.addAttribute}>Add Attribute</button>
                {id.map((attribute, i) => {
                    return (
                        <div key={i}>
                            {this.getInputOfType(attribute)}
                            <button onClick={this.deleteAttribute.bind(this, attribute)}>
                                Delete Attribute
                            </button>{attribute}
                        </div>
                    );
                })}
            </div>
        );
    }
}