import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { RxDashboard } from "react-icons/rx";
import { TbMilk } from "react-icons/tb";
import { GiCow } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';
import { GiCash } from "react-icons/gi";
const { Header, Sider, Content } = Layout;


const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h3 className='text-center fs-5 py-1'>
            <span className='sm-logo'>MH</span>
            <span className='lg-logo'>Milkhouse</span>
          </h3>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['']}
          onClick={({key})=>{
            if(key=='signout'){

            }else{
              navigate(key);
            }
          }}
          items={[
           
            {
              key: '',
              icon: <RxDashboard />,
              label: 'Dashboard',
            },
            {
              key: 'My Profile',
              icon: <CgProfile />,
              label: 'My Profile',
            },
            {
              key: 'cattle',
              icon: <GiCow />,
              label: 'Cattle',
            },
            {
              key: 'products',
              icon: <TbMilk />,
              label: 'Products',
            },
            {
              key: 'revenue',
              icon: <GiCash />,
              label: 'Revenue',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;