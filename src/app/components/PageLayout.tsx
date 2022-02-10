import { ArrowLeftOutlined, LogoutOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Tooltip } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import { Header } from 'antd/lib/layout/layout';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/auth.context';

interface ILayout {
  component: React.ReactNode;
  navigateBack?: boolean
}

function PageLayout({ component, navigateBack }: ILayout) {
  const auth = useContext(AuthContext);

  const onLogout = () => {
    auth.logout && auth.logout();
  };

  const menu = (
    <Menu>
      <Menu.Item key={1} icon={<LogoutOutlined />}>
        <div onClick={onLogout}>Sign Out</div>
      </Menu.Item>
    </Menu>
  );

  const renderNavigateBack = () => navigateBack && <div className='font-semibold cursor-pointer flex items-center' onClick={() => navigate('/home')}>
    <Tooltip placement="bottom" title={'Back'}>
      <ArrowLeftOutlined />
      <Avatar src='/assets/images/habesha beer logo.png' className='ml-2' />
    </Tooltip>
  </div>


  const navigate = useNavigate();


  return (
    <div className='h-screen bg-light'>
      <Header className={`bg-light flex items-center ${navigateBack ? 'justify-between' : 'justify-end'}`}>

        {renderNavigateBack()}

        <Dropdown overlay={menu} placement="bottomLeft">
          <Avatar size={40} className='uppercase text-xs bg-dark-accent cursor-pointer flex justify-center items-center'>
            <div className='text-sm font-semibold'>{`${auth.authState?.user?.firstName?.substring(0, 1)}${auth.authState?.user?.lastName?.substring(0, 1)}`}</div>
          </Avatar>
        </Dropdown>
      </Header>
      {component}
    </div>
  );
}

export default PageLayout
