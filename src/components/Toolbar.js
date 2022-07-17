import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {setCurrentUser} from "../features/user";

const Toolbar = () => {
    const dis = useDispatch()
    const nav = useNavigate()
    const currentUser = useSelector(state => state.user.value.currentUser)

    function logout() {
        dis(setCurrentUser(null))
        nav("/")
    }

    return (
        <div>

            <div></div>

            {!currentUser ?
                <div className="toolbar">
                    <Link to="/">Login</Link>
                    <Link to="/register">Register</Link>
                </div> :

                <div className="toolbar">
                    <Link to="/profile">Profile</Link>
                    <Link to="/users">All Users</Link>
                    <Link to="/conversations">Conversations</Link>
                    <button onClick={logout}>Logout</button>
                </div>
            }

        </div>
    );
};

export default Toolbar;