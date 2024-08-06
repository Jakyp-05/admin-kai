import { useAppDispatch } from "app/store";
import { logout } from "features/auth/login/store/slice";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return handleLogout;
};

export default useLogout;
