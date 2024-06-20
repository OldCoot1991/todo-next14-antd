'use client';
import React from 'react';
import { Layout } from 'antd';
import Logo from "../../public/assets/logo.webp"

const HeaderTop: React.FC = () => {
  const { Header } = Layout;
  return (
    <Header className="header">
         <img src="/assets/logo.svg" className='header_logo'/>
    </Header>
  );
};

export default HeaderTop;