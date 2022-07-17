import React from 'react';
import {useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";

const UserCard = ({item}) => {
    const nav = useNavigate()
    const user = useSelector(state => state.user.value.allUsers)

    return (
        <div className="userCardWrapper" onClick={() => nav("/user/"+item.email)}>
            <img src={item.image} alt=""/>
            <div>
                <h3>{item.email}</h3>
                <h3>Role</h3>
            </div>
        </div>
    );
};

export default UserCard;