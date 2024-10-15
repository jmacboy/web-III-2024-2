import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./reduxHooks";
import { loginUser, logoutUser } from "../slices/userSlice";
import { UserService } from "../services/UserService";

interface Props {
    redirectWithoutToken: boolean
}
export const useAuth = ({ redirectWithoutToken }: Props) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const userEmail = useAppSelector(state => state.user.email);

    useEffect(() => {

        const getUserInfo = () => {
            new UserService().me().then(response => {
                dispatch(loginUser(response.email));
            });
        }
        if (redirectWithoutToken) {
            getUserInfo();
        }

    }, [])


    const logout = () => {
        new UserService().logout().then(() => {
            dispatch(logoutUser());
            navigate("/login");
        });
    }
    return { logout, userEmail };
}