import { Avatar, Table, Tabs } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import React from 'react';

function MeetingPage() {

  const { TabPane } = Tabs;

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Chinese Score',
      dataIndex: 'chinese',
      sorter: {
        compare: (a: any, b: any) => a.chinese - b.chinese,
        multiple: 3,
      },
    },
    {
      title: 'Math Score',
      dataIndex: 'math',
      sorter: {
        compare: (a: any, b: any) => a.math - b.math,
        multiple: 2,
      },
    },
    {
      title: 'English Score',
      dataIndex: 'english',
      sorter: {
        compare: (a: any, b: any) => a.english - b.english,
        multiple: 1,
      },
    },
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      chinese: 98,
      math: 60,
      english: 70,
    },
    {
      key: '2',
      name: 'Jim Green',
      chinese: 98,
      math: 66,
      english: 89,
    },
    {
      key: '3',
      name: 'Joe Black',
      chinese: 98,
      math: 90,
      english: 70,
    },
    {
      key: '4',
      name: 'Jim Red',
      chinese: 88,
      math: 99,
      english: 89,
    },
  ];

  return <>
    <div className='h-screen bg-light'>
      <Header className='bg-light flex justify-end items-center'>
        <Avatar size={40} className='uppercase text-xs bg-dark-accent cursor-pointer'>KA</Avatar>
      </Header>
      <Tabs defaultActiveKey="1" centered size='large'>
        <TabPane tab="Shareholders" key="1">
          <Table columns={columns} dataSource={data} />
        </TabPane>
        <TabPane tab="Attended Shareholders" key="2">
          <Table columns={columns} dataSource={data} />
        </TabPane>
      </Tabs>
    </div>
  </>;
}

export default MeetingPage;
