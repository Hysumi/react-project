import React, { Component } from "react";

// components

class Header extends Component {
    render () {
        return (
            <header>
                <div className="logo">LOGO</div>
                <nav>
                    <ul>
                        <li className="first">
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Products</a>
                        </li>
                        <li className="last">
                            <a href="#">Content</a>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;
