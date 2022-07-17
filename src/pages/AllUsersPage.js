import React from 'react';
import {useSelector} from "react-redux";
import UserCard from "../components/UserCard";

const AllUsersPage = () => {
    const users = useSelector(state => state.user.value.allUsers)
    return (
        <div>
            {users.map(x => <UserCard key={x.email} item={x}/>)}
        </div>
    );
};

export default AllUsersPage;