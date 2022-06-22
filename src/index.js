import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";

import App from "./App";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Preview from "./pages/Preview";
import InfoProduct from "./pages/InfoProduct";
import EditProfile from "./pages/EditProfile";
import NotFound from "./components/404";
<<<<<<< HEAD
=======
import ProfileHeader from "./components/ProfileHeader";
import ProfileForm from "./components/ProfileForm";
>>>>>>> 60b4baf51dacca43c0e2385ac10fe9ed699af985

import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/." element={<App />} />
        <Route
          path="/login"
          element={
            <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_ID}>
              <Login />
            </GoogleOAuthProvider>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/preview" element={<Preview />} />
        <Route path="/infoproduct" element={<InfoProduct />} />
        <Route path="/profile" element={<EditProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
