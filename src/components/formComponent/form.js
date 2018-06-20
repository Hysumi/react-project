import React from "react";

export default class Form extends React.Component {
    state = {
        websiteURL: "",
        source: "",
        medium: "",
        name: "",
        term: "",
        content: ""
    }

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({
            websiteURL: "",
            source: "",
            medium: "",
            name: "",
            term: "",
            content: ""
        });
    }

    render () {
        return (
            <form>
                <input
                    name="websiteURL"
                    placeholder="Website URL"
                    value={this.state.websiteURL}
                    onChange={(e) => this.change(e)}
                />
                <br />
                <input
                    name="source"
                    placeholder="Source"
                    value={this.state.source}
                    onChange={(e) => this.change(e)}
                />
                <br />
                <input
                    name="medium"
                    placeholder="Medium"
                    value={this.state.medium}
                    onChange={(e) => this.change(e)}
                />
                <br />
                <input
                    name="name"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={(e) => this.change(e)}
                />
                <br />
                <input
                    name="term"
                    placeholder="Term"
                    value={this.state.term}
                    onChange={(e) => this.change(e)}
                />
                <br />
                <input
                    name="content"
                    placeholder="Content"
                    value={this.state.content}
                    onChange={(e) => this.change(e)}
                />
                <br />
                <p>
                    {JSON.stringify(this.state, null, 2)}
                    <a href="{this.state.websiteURL}">{this.state.websiteURL}</a>
                </p>
                <button onClick={(e) => this.onSubmit(e)}> Generate </button>
            </form>
        );
    }
}