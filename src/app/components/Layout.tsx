import Avatar from 'antd/lib/avatar/avatar';
import { Header } from 'antd/lib/layout/layout';
import React from 'react';

interface ILayout {
  component: React.ReactNode;
}

function Layout({ component }: ILayout) {
  return (
    <div className='h-screen bg-light'>
      <Header className='bg-light flex justify-end items-center'>
        <Avatar size={40} className='uppercase text-xs bg-dark-accent cursor-pointer'>KA</Avatar>
      </Header>
      {component}
    </div>
  );
}

export default Layout;
