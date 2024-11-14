'use client';
import React from 'react';
import { Layout } from 'antd';
// import Navbar from './Navbar';
import FooterComponent from './FooterComponent';
import HeaderTop from './Header';

const MainLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <Layout className="layout">
      <HeaderTop />
        {children}
      <FooterComponent />
    </Layout>
  );
};

export default MainLayout;
