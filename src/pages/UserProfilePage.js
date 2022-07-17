import {useRef} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {updatePhoto, updatePassword} from "../features/user";



const UserProfilePage = () => {
    const dis = useDispatch()
    const photoRef = useRef()
    const passwordRef = useRef()
    const userState = useSelector(state => state.user.value)

    function changePhoto() {
        const email = userState.currentUser.email
        const imageUrl = photoRef.current.value

        const userIndex = userState.allUsers.findIndex(x => x.email === email)

        let usersUpdated = {...userState.currentUser}
        usersUpdated.image = imageUrl

        dis(updatePhoto({
            index: userIndex,
            current: usersUpdated
        }))
    }

    function changePassword() {
        const password = userState.currentUser.password
        const newPassword = passwordRef.current.value

        const userPassIndex = userState.allUsers.findIndex(x => x.password === password)

        let passwordUpdated = {...userState.currentUser}
        passwordUpdated.password = newPassword

        dis(updatePassword({
            pass: userPassIndex,
            current: newPassword
        }))
        console.log(userState.currentUser.password)
        console.log(newPassword)
    }



    return (
        <div className="profileWrapper">
            <img src={userState.currentUser.image} alt=""/>
            <h3 className="p-10">{userState.currentUser.email}</h3>

            <div className="profileInputWrapper">
                <div className="p-10">
                    <input ref={passwordRef} type="text" placeholder="new password"/>
                    <button onClick={changePassword}>Change Password</button>
                </div>
                <div className="p-10">
                    <input ref={photoRef} type="text" placeholder="photo url"/>
                    <button onClick={changePhoto}>Change Photo</button>
                </div>

            </div>

        </div>
    );
};

export default UserProfilePage;