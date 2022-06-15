import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { BiMessageDots } from "react-icons/bi";
import SearchBar from "../components/nav_bar/Search_bar";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined,
  WechatOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import "./sharedlayout.css";
import { useNavigate } from "react-router-dom";
// import NavBar from "../components/nav_bar/Nav_bar";
// import SearchBar from "../components/nav_bar/Search_bar";
const { Header, Sider} = Layout;

function SharedLayout(props) {
  const { component: Component } = props;
  console.log("sharedlayout props", props);
  // const [collapsed, setCollapsed] = useState(false);
  console.log("props", props);
  // const toggle = () => {
  //   setCollapsed(!collapsed);
  // };
  const navigate = useNavigate();
  const onClickMenu = (data) => {
    console.log("data", data);
    navigate(data.key);
  };
 
  return (
    <>
      <Layout className="h-screen">
        <Header className="header" style={{ backgroundColor: "#6D8B74" }}>
          <div className="logo">
            <img
              className="logo-img w-17 h-20"
              src="https://homi-seeds.s3.us-east-2.amazonaws.com/logowhatsup.png"
              alt=""
            />
          </div>
          <Menu
            className="nav_menu"
            mode="horizontal"
            inlineCollapsed="false"
            style={{ backgroundColor: "#6D8B74" }}
          >
            <Menu.Item
              className="header_icon"
              key="/home"
              icon={<BiMessageDots className="icon" />}
            />
            <Menu.Item
              className="header_icon"
              key="/join-room"
              icon={<AiOutlineUserAdd className="icon" />}
            />
            <Menu.Item
              className="header_icon"
              key="/setting"
              icon={<CgProfile className="icon" />}
            />
          </Menu>
        </Header>
        <Layout>
          <Sider className="site-layout-background" width={200}>
            <Menu>
              <Menu.Item key="/home" onClick={onClickMenu} icon={<HomeOutlined />}>
                Home
              </Menu.Item>
              <Menu.Item key="/join-room" onClick={onClickMenu} icon={<WechatOutlined />}>
                Room Chat
              </Menu.Item>
              <Menu.Item key="/setting" onClick={onClickMenu} icon={<SettingOutlined />}>
                Setting
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout
            style={{
              padding: "0 24px 24px",
            }}
          ></Layout>
        </Layout>
      </Layout>
    </>
  );
}

export default SharedLayout;
//
