import {useRef, useState} from 'react';
import {useDispatch} from "react-redux";
import {addUser} from "../features/user";
import {useNavigate} from "react-router-dom";
import RegAdminCheckBox from "../components/RegAdminCheckBox";

const RegistrationPage = () => {
    const emailRef = useRef()
    const passOneRef = useRef()
    const passTwoRef = useRef()
    // const adminRef = useRef()

    const nav = useNavigate()
    const dis = useDispatch()

    const [errorMessages, setErrorMessages] = useState(null)

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    function registerUser() {
        let invalid = false

        const user = {
            email: emailRef.current.value,
            passOne: passOneRef.current.value,
            passTwo: passTwoRef.current.value
        }
        if (!validateEmail(user.email)) invalid = "wrong email address"
        if (user.passOne.length < 4 || user.passOne.length > 20) invalid = "password is too short or too long"
        if (user.passOne !== user.passTwo) invalid = "passwords does not mach"

        if (invalid) return setErrorMessages(invalid)

        dis(addUser(user))
        nav("/")
    }

    return (
        <div className="regPageWrapper">
            <div className="inputWrapper">
                <input ref={emailRef} type="text" placeholder="email"/>
                <input ref={passOneRef} type="text" placeholder="password"/>
                <input ref={passTwoRef} type="text" placeholder="repeat password"/>
                {errorMessages && <h3>{errorMessages}</h3>}
            </div>
            <div className="regCheckBox">
                <RegAdminCheckBox/>
            </div>
            <div className="regBtnWrapper">
                <div onClick={registerUser} className="regBtn">Register</div>
            </div>

        </div>
    );
};

export default RegistrationPage;