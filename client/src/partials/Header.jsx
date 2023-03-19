import React from 'react';
import { Link } from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <div>
                <Link to="/">  Home </Link> 
                <Link to="/operators">  Operators </Link> 
                header
            </div>
        );
    }
}

export default Header;