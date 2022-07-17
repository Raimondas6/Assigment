import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        value: {
            allUsers: [],
            currentUser: null,
            // userRole: "",

        }
    },
    reducers: {
        addUser: ({value}, {payload}) => {
            const user = {
                email: payload.email,
                password: payload.passOne,
                image: "https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Clipart.png"

            }
            value.allUsers.push(user)
        },
        setCurrentUser: ({value}, {payload}) => {
            value.currentUser = payload
        },
        // setUserRole: (state, action) => {
        //     console.log(state.value.userRole)
        //     state.value.userRole = action.payload
        // },
        updatePhoto: ({value}, {payload}) => {
            const {index, current} = payload
            value.allUsers[index] = current
            value.currentUser = current
        },
        updatePassword: (state, action) => {
            state.value.currentUser.password = action.payload.current
            let user = state.value.allUsers.find(item=> item.email == state.value.currentUser.email)
            let indexof = state.value.allUsers.indexOf(item=> item.email == state.value.currentUser.email)
            state.value.allUsers = state.value.allUsers.splice(indexof,1)
            user.password = action.payload.current
            addUser(user)

        }
    }
})


export const {addUser, setCurrentUser, updatePhoto, updatePassword, setUserRole} = userSlice.actions
export default userSlice.reducer