import {useState, useRef} from 'react';
import {useSelector, useDispatch} from "react-redux";
import user, {setUserRole} from "../features/user";

const RegAdminCheckBox = () => {
    // const dispatch = useDispatch()
    // const role = useSelector(state => state.user.value.userRole)
    const checkBoxRef = useRef()
    // console.log(role)

    const [roles, setRoles] = useState([])

    const checkBoxInputs = [
        {
            id: 1,
            label: "Admin",
            value: "admin",
        },
        {
            id: 2,
            label: "User",
            value: "user",
        }
    ]

    const checkBoxChange = (e) => {
        if (e.target.checked) {
            if (!roles.includes(e.target.value)) {
                this.props.setRoles([...roles, e.target.value])
                console.log([...roles, e.target.value])
            }
        } else {
            let filteredRoles = roles.filter(function (value, index, array) {
                return value !== e.target.value
            })
            this.props.setRoles(filteredRoles)
        }
        // dispatch(setUserRole(user))
    }

    return (
        <div>
            <div>
                Choose your role:
            </div>
            <ul className="checkBoxWrapper">
                {checkBoxInputs.map((role, index) => (
                    <li key={index}>
                        <input ref={checkBoxRef} type="radio" id={role.value} name="roles" value={role.value} onChange={checkBoxChange}/>
                        <label htmlFor={role.value}>{role.label}</label>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RegAdminCheckBox;