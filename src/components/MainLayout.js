import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import {
  AiOutlineDashboard,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineBgColors,
} from "react-icons/ai";
import { Layout, Menu, Button, theme } from 'antd';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RxDashboard } from "react-icons/rx";
import Dashboard from '../pages/Dashboard';
import { IoIosNotifications } from "react-icons/io";
import { TbMilk } from "react-icons/tb";
import { GiCow } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { useNavigate, Link, Outlet } from 'react-router-dom';
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
              key: 'customers',
              icon: <AiOutlineUser/>,
              label: 'Customers',
            },
            {
              key: 'cattle',
              icon: <GiCow />,
              label: 'Cattle',
            },
            {
              key: "Catalog",
              icon: <TbMilk className="fs-4" />,
              label: "Product Catalog",
              children: [
            {
              key: "product",
                  icon: <AiOutlineShoppingCart className="fs-4" />,
                  label: "Add Product",
            },
            {
              key: "list-product",
              icon: <AiOutlineShoppingCart className="fs-4" />,
              label: "Product List",
            },
          ],
        },
            {
              key: 'orders',
              icon: <GiCash />,
              label: 'Orders',
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
      <Header
          className="d-flex justify-content-between ps-1 pe-5"
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <div className="d-flex gap-4 align-items-center">
            {/* <div className="position-relative">
              <IoIosNotifications className="fs-4" />
              <span className="badge bg-warning rounded-circle p-1 position-absolute">
                3
              </span>
            </div> */}

            <div className="d-flex gap-3 align-items-center dropdown">
              <div>
                <img
                  width={32}
                  height={32}
                  src="https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-4-64x64.jpg"
                  alt=""
                />
              </div>
              <div
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <h5 className="mb-0">Navdeep</h5>
                <p className="mb-0">navdeepdahiya753@gmail.com</p>
              </div>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <Link
                    className="dropdown-item py-1 mb-1"
                    style={{ height: "auto", lineHeight: "20px" }}
                    to="/"
                  >
                    View Profile
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item py-1 mb-1"
                    style={{ height: "auto", lineHeight: "20px" }}
                    to="/"
                  >
                    Signout
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </Header>
          {/* <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          /> */}
       
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
         <ToastContainer
            position="top-right"
            autoClose={250}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            theme="light"
          />
           <Dashboard/>
          <Outlet />
        </Content>
      </Layout>
      {/* <Dashboard/> */}
    </Layout>
  );
};
export default MainLayout;