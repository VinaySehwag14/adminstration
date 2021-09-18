import axios from "axios";
import { API } from "../../../backend";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(`${API}/auth/login`, user);
    res.data.isAdmin && dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
