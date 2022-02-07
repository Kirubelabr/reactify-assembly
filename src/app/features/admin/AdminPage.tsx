import { Avatar, Tabs } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import React from 'react';
import MeetingStatus from '../../components/MeetingStatus';

function AdminPage() {

  const { TabPane } = Tabs;

  return <>
    <div className='h-screen bg-light'>
      <Header className='bg-light flex justify-end items-center'>
        <Avatar size={40} className='uppercase text-xs bg-dark-accent cursor-pointer'>KA</Avatar>
      </Header>
      <Tabs defaultActiveKey="1" centered size='large'>
        <TabPane tab="Meeting" key="1">
          <MeetingStatus />
        </TabPane>
        <TabPane tab="Polls" key="2">
          Content of Tab Pane 2
        </TabPane>
      </Tabs>
    </div>
  </>
}

export default AdminPage;
