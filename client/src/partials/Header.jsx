import React from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../contexts/AuthContext';
import AuthService from "../services/AuthService";
import withRouter from '../sub/withRouter';

class Header extends React.Component {

    static contextType = AuthContext;

    handleClick = async (e)=>{
        e.preventDefault()
        const { dispatch, user } = this.context;
        try {
            dispatch({type: 'LOGOUT'})
            await AuthService.logout()
        }catch (e) {
            console.log(e)
        }finally {
            this.props.router.navigate("/login")
        }
    }

    render() {

        const { dispatch, user } = this.context;

        return (
            <div className="navigation">
                <header>
                    <Link to="/" className="nice-button">Home</Link>
                    <Link to="/operators" className="nice-button">Operators</Link>

                    {user ?
                        (
                            <div className="">
                                <span className="nice-button">{user.nickname}</span>
                                <button onClick={this.handleClick} className="">Logout</button>
                            </div>)
                        :
                        (
                            <div className="input-group">
                                <Link to="/login" className="nice-button">Login</Link>
                                <Link to="/register" className="nice-button">Sign-up</Link>
                            </div>
                        )
                    }

                </header>
            </div>
        );
    }
}

export default withRouter(Header);