import { Table, Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import { getAttendedShareholdersList, getShareholdersList } from './api/getShareholders';

function MeetingPage() {
  const [shareholdersList, setShareholdersList] = useState([]);
  const [attendedShareholdersList, setAttendedShareholdersList] = useState([]);
  const [loading, setLoading] = useState(false);

  const { TabPane } = Tabs;

  useEffect(() => {
    getShareholdersList(setShareholdersList, setLoading);
  }, []);

  useEffect(() => {
    getAttendedShareholdersList(setAttendedShareholdersList, setLoading);
  }, []);

  const columns = [

    {
      title: 'Shareholder ID',
      dataIndex: 'shareholderId',
      sorter: {
        compare: (a: any, b: any) => a.shareholderId - b.shareholderId
      },
    },
    {
      title: 'English Full Name',
      dataIndex: 'englishFullName',
      sorter: {
        compare: (a: any, b: any) => a.englishFullName - b.englishFullName
      },
    },
    {
      title: 'Amharic Full Name',
      dataIndex: 'amharicFullName',
      sorter: {
        compare: (a: any, b: any) => a.amharicFullName - b.amharicFullName
      },
    },
    {
      title: 'Phone Number',
      dataIndex: 'mobile1',
      sorter: {
        compare: (a: any, b: any) => a.mobile1 - b.mobile1
      },
    },
    {
      title: 'Paid Up Capital',
      dataIndex: 'paidUpCapital',
      sorter: {
        compare: (a: any, b: any) => a.paidUpCapital - b.paidUpCapital
      },
    },
  ];

  const data: any[] = [];

  return <>
    <Tabs defaultActiveKey="1" centered size='large'>
      <TabPane tab="Shareholders" key="1">
        <Table rowKey={'id'} loading={loading} columns={columns} dataSource={shareholdersList} />
      </TabPane>
      <TabPane tab="Attended Shareholders" key="2">
        <Table rowKey={'id'} columns={columns} dataSource={attendedShareholdersList} />
      </TabPane>
    </Tabs>
  </>;
}

export default MeetingPage;
