import { useEffect } from "react"
import { getLocalStorage } from "../utils/LocalStorageUtils";
import { TOKEN_KEY } from "../utils/CONSTANTS";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./reduxHooks";
import { logoutUser } from "../slices/userSlice";

interface Props {
    redirectWithoutToken: boolean
}
export const useAuth = ({ redirectWithoutToken }: Props) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const token = getLocalStorage(TOKEN_KEY);
    const userEmail = useAppSelector(state => state.user.email);

    const logout = () => {
        dispatch(logoutUser());
        localStorage.removeItem(TOKEN_KEY);
        navigate("/login");
    }
    return { token, logout, userEmail };
}