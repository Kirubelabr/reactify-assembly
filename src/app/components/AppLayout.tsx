import { LogoutOutlined } from '@ant-design/icons';
import { Dropdown, Menu } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import { Header } from 'antd/lib/layout/layout';
import React, { useContext } from 'react';
import { AuthContext } from '../contexts/auth.context';

interface ILayout {
  component: React.ReactNode;
}

// @ts-ignore: Object is possibly 'undefined'.
function AppLayout({ component }) {

  const { logout } = useContext(AuthContext);

  const onLogout = () => {
    logout && logout();
  };

  const menu = (
    <Menu>
      <Menu.Item key={1} icon={<LogoutOutlined />}>
        <div className='' onClick={onLogout}>Sign Out</div>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className='h-screen bg-light'>
      <Header className='bg-light flex justify-end items-center'>
        <Dropdown overlay={menu} placement="bottomLeft">
          <Avatar size={40} className='uppercase text-xs bg-dark-accent cursor-pointer flex justify-center items-center'>
            <div className='text-sm font-semibold'>KA</div>
          </Avatar>
        </Dropdown>
      </Header>
      {component}
    </div>
  );
}

export default AppLayout;
