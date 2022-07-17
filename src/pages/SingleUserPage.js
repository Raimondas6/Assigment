import React from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const SingleUserPage = () => {
    const {email} = useParams()
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.value.allUsers)
    const currUser = user.find(x => x.email === email)
    console.log(user)
    console.log(currUser)

    return (
        <div className="userCardWrapper">
            <div>
                <img src={user.image} alt=""/>
            </div>
            <div>
                <h3>{user.email}</h3>
                <h3>Role: {user.role}</h3>
            </div>
            <div>
                <button>Send Message</button>
                <button>Delete User</button>
            </div>

        </div>
    );
};

export default SingleUserPage;