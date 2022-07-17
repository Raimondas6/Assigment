import {useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentUser} from "../features/user";

const LoginPage = () => {
    const emailRef = useRef()
    const passRef = useRef()

    const nav = useNavigate()
    const dis = useDispatch()

    const allUsers = useSelector(state => state.user.value.allUsers)
    const [errorMessages, setErrorMessages] = useState(null)

    function loginUser() {
        const user = {
            email: emailRef.current.value,
            password: passRef.current.value,
        }

        const userLoggedIn = allUsers.find(x => x.email === user.email && x.password === user.password)
        if (!userLoggedIn) return setErrorMessages("That user does not exist")

        dis(setCurrentUser(userLoggedIn))

        nav("/profile")
    }

    return (
        <div className="regPageWrapper">
            <div className="inputWrapper">
                <input ref={emailRef} type="text" placeholder="email"/>
                <input ref={passRef} type="text" placeholder="password"/>
                {errorMessages && <h3>{errorMessages}</h3>}
            </div>
            <div className="regBtnWrapper">
                <div onClick={loginUser} className="regBtn">Login</div>
            </div>

        </div>
    );
};

export default LoginPage;