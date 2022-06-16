import { AUTH_ERROR, REGISTER } from "./types";
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
        title: "Success",
        text: "You have successfully registered",
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
