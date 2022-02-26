import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import "antd/dist/antd.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./routers/Private";
import PublicRoute from "./routers/Public";
import JoinRoomContainer from "./pages/JoinRoom/JoinRoom";
import LoginContainer from "./pages/Login/Login";
import HomeContainer from "./pages/Home/Home";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route exact path="/" element={<PrivateRoute />}>
          <Route exact path="/join-room" element={<JoinRoomContainer />} />
        </Route>
        <Route path="/login" element={<LoginContainer />} />
        <Route path="/home" element={<HomeContainer />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
