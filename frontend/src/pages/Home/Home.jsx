
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined,
  WechatOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import React, {useState} from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const Home = (props) => {
   const [collapsed, setCollapsed] = useState(false);
  console.log("props", props)
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  const navigate = useNavigate();
  const onClickMenu = (data) => {
    // console.log("data", data)
    navigate(data.key)
   
  }

    return (
      <Layout className="h-screen">
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]} onClick={onClickMenu}>
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
            Content
          </Content>
        </Layout>
      </Layout>
    );
  }

export default Home;