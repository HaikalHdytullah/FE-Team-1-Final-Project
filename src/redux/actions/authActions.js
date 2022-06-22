import { AUTH_ERROR, REGISTER, LOGIN, LOGOUT } from "./types";
import Swal from "sweetalert2";

const authError = (error) => async (dispatch) => {
  dispatch({
    type: AUTH_ERROR,
    payload: error.message,
  });

  setTimeout(() => {
    dispatch({
      type: AUTH_ERROR,
      payload: null,
    });
  }, 5000);
};

export const login = (data) => async (dispatch) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/api/v1/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();

    if (result.token) {
      await Swal.fire({
        title: "Berhasil",
        text: "Berhasil melakukan login",
        icon: "success",
      });
      dispatch({
        type: LOGIN,
        payload: result.token,
        user: result.user,
      });
    } else {
      await Swal.fire({
        icon: "error",
        title: "Oops...",
        text: result.message,
        timer: 2000,
      });
      authError(result.error);
    }
  } catch (error) {
    await Swal.fire({
      icon: "error",
      title: "Oops...",
      text: error.message,
      timer: 2000,
    });
    authError(error);
  }
};

export const loginWithGoogle = (accessToken) => async (dispatch) => {
  try {
    const data = {
      access_token: accessToken,
    };
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/api/v1/auth/google`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const result = await response.json();

    if (result.token) {
      await Swal.fire({
        title: "Berhasil",
        text: "Berhasil melakukan login",
        icon: "success",
      });
      dispatch({
        type: LOGIN,
        payload: result.token,
        user: result.user,
      });
    } else {
      await Swal.fire({
        icon: "error",
        title: "Oops...",
        text: result.message,
        timer: 2000,
      });
      authError(result.error);
    }
  } catch (error) {
    await Swal.fire({
      icon: "error",
      title: "Oops...",
      text: error.message,
      timer: 2000,
    });
    authError(error);
  }
};

export const logout = () => async (dispatch) => {
  await Swal.fire({
    title: "Berhasil",
    text: "Kamu berhasil logout",
    icon: "success",
  });
  dispatch({
    type: LOGOUT,
  });
};

export const register = (data) => async (dispatch) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/api/v1/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();
    dispatch({
      type: REGISTER,
      payload: result.user,
    });
    if (result.user) {
      await Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: "Berhasil melakukan registrasi",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: result.message,
      });
    }
  } catch (error) {
    authError(error);
  }
};
