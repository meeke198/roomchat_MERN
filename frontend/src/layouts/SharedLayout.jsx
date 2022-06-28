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
const { Header, Sider, Content} = Layout;

function SharedLayout(props) {
  const { component: Component } = props;
  console.log("sharedlayout props", props);
  const [collapsed, setCollapsed] = useState(false);
  console.log("props", props);
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  const navigate = useNavigate();
  const onClickMenu = (data) => {
    // console.log("data", data)
    navigate(data.key);
  };
  //data la object { item, key, keyPath, domEvent } ma antd tu passed vo cho onclick function(check doc)

  return (
    <>
      <Layout className="h-screen">
        <Header className="header" style={{ backgroundColor: "#6D8B74" }}>
          <div className="logo">
            <img
              className="logo-img w-17 h-20"
              src="https://homi-seeds.s3.us-east-2.amazonaws.com/logoWhatsup.png"
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
              onClick={onClickMenu}
              key="/home"
              icon={<BiMessageDots className="icon" />}
            />
            <Menu.Item
              className="header_icon"
              onClick={onClickMenu}
              key="/join-room"
              icon={<AiOutlineUserAdd className="icon" />}
            />
            <Menu.Item
              className="header_icon"
              onClick={onClickMenu}
              key="/setting"
              icon={<CgProfile className="icon" />}
            />
          </Menu>
        </Header>
        <Layout>
          <Sider className="site-layout-background" width={200}>
            <Menu onClick={onClickMenu}>
              <Menu.Item key="/home" icon={<HomeOutlined />}>
                Home
              </Menu.Item>
              <Menu.Item key="/join-room" icon={<WechatOutlined />}>
                Room Chat
              </Menu.Item>
              <Menu.Item key="/setting" icon={<SettingOutlined />}>
                Setting
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger ml-4 text-2xl",
                  onClick: toggle,
                }
              )}
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280,
              }}
            >
              <Component />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
}

export default SharedLayout;
//
