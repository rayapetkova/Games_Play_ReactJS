import { useContext, useEffect } from "react";
import { logout } from "../../services/authServices";
import { AuthContext } from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const {logoutHandler} = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        logout()
            .then(() => logoutHandler())
            .catch(() => navigate('/'))
    }, [])

    return null
}

export default Logout;