import Swal from "sweetalert2";
import {
  GET_ALL_PRODUCT,
  GET_PRODUCT,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  PREVIEW_PRODUCT,
  CLEAR_PRODUCT,
  PRODUCT_ERROR,
} from "./types";

export const getAllProducts = () => async (dispatch) => {
  try {
    const response = await fetch(
      process.env.REACT_APP_BACKEND_URL + "/api/v1/products",
      {
        method: "GET",
      }
    );
    const data = await response.json();
    dispatch({
      type: GET_ALL_PRODUCT,
      payload: data.data.products,
      status: "Get All",
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: error.response,
    });
    Swal.fire({
      position: "center",
      icon: "error",
      title: error.message,
      showConfirmButton: false,
      timer: 1500,
    });
  }
};

export const getProductById = (params) => async (dispatch) => {
  try {
    const id = params;
    const response = await fetch(
      process.env.REACT_APP_BACKEND_URL +
        "/api/v1/product?" +
        new URLSearchParams({
          id,
        })
    );
    const data = await response.json();

    dispatch({
      type: GET_PRODUCT,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: error.response,
    });
    Swal.fire({
      position: "center",
      icon: "error",
      title: error.message,
      showConfirmButton: false,
      timer: 1500,
    });
  }
};

export const getProductByNama = (params) => async (dispatch) => {
  try {
    const nama = params;
    const response = await fetch(
      process.env.REACT_APP_BACKEND_URL +
        "/api/v1/product/name?" +
        new URLSearchParams({
          nama,
        })
    );
    const data = await response.json();

    dispatch({
      type: GET_ALL_PRODUCT,
      payload: data,
      status: "Get All by Nama",
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: error.response,
    });

    Swal.fire({
      position: "center",
      icon: "error",
      title: error.message,
      showConfirmButton: false,
      timer: 1500,
    });
  }
};
export const getProductByKategory = (params) => async (dispatch) => {
  try {
    const kategori = params;
    const response = await fetch(
      process.env.REACT_APP_BACKEND_URL +
        "/api/v1/product/kategory?" +
        new URLSearchParams({
          kategori,
        })
    );
    const data = await response.json();

    dispatch({
      type: GET_ALL_PRODUCT,
      payload: data,
      status: "Get All by Kategory",
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: error.response,
    });

    Swal.fire({
      position: "center",
      icon: "error",
      title: error.message,
      showConfirmButton: false,
      timer: 1500,
    });
  }
};

export const addProduct = (data) => async (dispatch) => {
  try {
    var formdata = new FormData();
    formdata.append("idUser", data.idUser);
    formdata.append("nama", data.nama);
    formdata.append("harga", data.harga);
    formdata.append("kategori", data.kategori);
    formdata.append("deskripsi", data.deskripsi);
    if (data.gambar.length > 0) {
      for (var i = 0; i < data.gambar.length; i++) {
        if (
          data.gambar[i].type === "image/jpeg" ||
          data.gambar[i].type === "image/png"
        ) {
          formdata.append("gambar", data.gambar[i]);
        }
      }
    }

    const response = await fetch(
      process.env.REACT_APP_BACKEND_URL + "/api/v1/products",
      {
        method: "POST",
        body: formdata,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    if (response.status === 200) {
      const data = await response.json();

      dispatch({
        type: CREATE_PRODUCT,
        payload: data,
        status: "Created",
      });

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Berhasil",
        text: "Data berhasil ditambahkan",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      const data = await response.json();

      dispatch({
        type: PRODUCT_ERROR,
        payload: data,
      });

      Swal.fire({
        position: "center",
        icon: "error",
        title: data.message,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  } catch (error) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: error.response,
    });

    Swal.fire({
      position: "center",
      icon: "error",
      title: error.message,
      showConfirmButton: false,
      timer: 1500,
    });
  }
};

export const updateProduct = (data) => async (dispatch) => {
  try {
    var formdata = new FormData();
    formdata.append("idUser", data.idUser);
    formdata.append("nama", data.nama);
    formdata.append("harga", data.harga);
    formdata.append("kategori", data.kategori);
    formdata.append("deskripsi", data.deskripsi);
    if (data.gambar.length > 0) {
      for (var i = 0; i < data.gambar.length; i++) {
        if (
          data.gambar[i].type === "image/jpeg" ||
          data.gambar[i].type === "image/png"
        ) {
          formdata.append("gambar", data.gambar[i]);
        }
      }
    }

    const response = await fetch(
      process.env.REACT_APP_BACKEND_URL + "/api/v1/products/" + data.id,
      {
        method: "PUT",
        body: formdata,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    if (response.status === 200) {
      const data = await response.json();

      dispatch({
        type: UPDATE_PRODUCT,
        payload: data,
        status: "Updated",
      });

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Berhasil",
        text: "Data berhasil diupdate",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      const data = await response.json();

      dispatch({
        type: PRODUCT_ERROR,
        payload: data,
      });

      Swal.fire({
        position: "center",
        icon: "error",
        title: data.message,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  } catch (error) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: error.response,
    });

    Swal.fire({
      position: "center",
      icon: "error",
      title: error.message,
      showConfirmButton: false,
      timer: 1500,
    });
  }
};

export const clearProduct = () => async (dispatch) => {
  dispatch({
    type: CLEAR_PRODUCT,
  });
};

export const previewImg = (params) => async (dispatch) => {
  dispatch({
    type: PREVIEW_PRODUCT,
    payload: params,
  });
};
