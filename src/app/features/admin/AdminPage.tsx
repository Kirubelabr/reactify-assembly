import { Tabs } from 'antd';
import React from 'react';
import MeetingStatus from '../../components/MeetingStatus';

function AdminPage() {

  const { TabPane } = Tabs;

  return <>
    <Tabs defaultActiveKey="1" centered size='large'>
      <TabPane tab="Meeting" key="1">
        <MeetingStatus />
      </TabPane>
      <TabPane tab="Polls" key="2">
        Content of Tab Pane 2
      </TabPane>
    </Tabs>
  </>
}

export default AdminPage;
