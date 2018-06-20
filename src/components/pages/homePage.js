import React, { Component } from "react";

// Components
import Form from "./../formComponent/form";

class HomePage extends Component {

    state = {
        fields: {}
    }

    onSubmit = (fields) => {
        var x = fields;
        console.log(x);
    }

    render () {
        return (
            <div>
                <Form onSubmit={(fields) => this.onSubmit(fields)}/>
            </div>
        );
    }
}

export default HomePage;
