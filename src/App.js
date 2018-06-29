import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";

// components
import Header from "./components/headerComponent/header";
import Footer from "./components/footerComponent/footer";
import Homepage from "./components/pages/homePage";

// includes
import "./Assets/css/default.min.css";

class App extends Component {
    render () {
        return (
            <Router>
                <div className="App">
                    <Header />
                    <Homepage />
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
