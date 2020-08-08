import React, { Component } from 'react';
import './header.css';

class Header extends Component {

    constructor() {
        super();
        this.state = { btn_name: 'Login' };
        this.changeState = this.changeState.bind(this);
    }

    changeState() {
        let btn_name = ( this.state.btn_name === 'Login' ) ? 'Logout' : 'Login';
        this.setState({ btn_name: btn_name });
    }

    render() {
        return (
            <div className="Header">
                <button onClick={this.changeState}>
                    {this.state.btn_name}
                </button>
            </div>
        )
    }

}
export default Header;
