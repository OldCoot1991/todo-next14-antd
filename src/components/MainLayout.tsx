'use client';
import React from 'react';
import { Layout } from 'antd';
// import Navbar from './Navbar';
import FooterComponent from './FooterComponent';
import HeaderTop from './Header';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { Content } = Layout;

  return (
    <Layout className="layout">
      <HeaderTop />
      <Content
        style={{
          minHeight: '100vh',
          marginTop: '80px',
        }}
        className="container"
      >
        {children}
      </Content>
      <FooterComponent />
    </Layout>
  );
};

export default MainLayout;
