import React from 'react';
import { Link } from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <div className="navigation">
                <Link to="/">  Home </Link> 
                <Link to="/operators">  Operators </Link> 
            </div>
        );
    }
}

export default Header;