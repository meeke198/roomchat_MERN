import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import reportWebVitals from "./reportWebVitals";
import "antd/dist/antd.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./routers/Private";
import JoinRoomContainer from "./pages/JoinRoom/JoinRoom";
import LoginContainer from "./pages/Login/Login";
import SignUpContainer from "./pages/SignUp/SignUp";
import HomeContainer from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import SharedLayout from "./layouts/SharedLayout"

ReactDOM.render(
  <BrowserRouter>
    <div className="w-screen h-screen">
      <React.StrictMode>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route exact path="/" element={<PrivateRoute />}>
            <Route exact path="/join-room" element={<SharedLayout component={JoinRoomContainer} />} />
          </Route>
          <Route path="/login" element={<LoginContainer/>} />
          <Route path="/signup" element={<SignUpContainer/>} />
          <Route path="/home" element={<SharedLayout component={HomeContainer} />} />
          <Route />
          <Route path="*" element></Route>
        </Routes>
      </React.StrictMode>
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
// Means: Render the whole React App into the element with id=root 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
