import { createContext, useReducer } from "react"
import AuthReducer from "./AuthReducer"




const INITIAL_STATE = {
    user:{
        "_id":"61dfb2ae0009fb06aceab7f3",
        "profilePicture":"",
        "coverPicture":"",
        "followers":[],
        "followings":[],
        "isAdmin":false,
        "username":"calmighted",
        "email":"calmighted@gmail.com",
        "followers":[],
        "followings":[],
    },
    isFetching: false,
    error:false
}


export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider = ({children}) => {
    const[state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

    return(
        <AuthContext.Provider 
        value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch
        }}>
            {children}
        </AuthContext.Provider>
    )
}