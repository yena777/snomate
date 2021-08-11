import React, { Component } from 'react';
import style from "./Section.module.css";

class MainHeader extends Component {
    render() {
        return (
            <div className="black-nav">
                <div>SNOMATE</div>
                <div className={style.spacer}></div>
                <button>Log In</button>
            </div>
        );
    }
}

export default MainHeader;