import React from 'react';
import { Table } from 'antd';

export default function Pointstable() {
  const columns = [
    {
      title: 'Team',
      dataIndex: 'team',
    },
    {
      title: 'PLD',
      dataIndex: 'pld',
    },
    {
      title: 'NET RR',
      dataIndex: 'rr',
    },
    {
      title: 'PTS',
      dataIndex: 'points',
    },
  ];
  const data = [
    {
      key: '1',
      team: 'CSK',
      pld: '7',
      rr: '+2.32',
      points: '14',
    },
    {
      key: '2',
      team: 'RCB',
      pld: '9',
      rr: '+1.32',
      points: '14',
    },
    {
      key: '3',
      team: 'DC',
      pld: '9',
      rr: '+0.32',
      points: '12',
    },
    {
      key: '4',
      team: 'MI',
      pld: '10',
      rr: '+0.02',
      points: '14',
    },
    {
      key: '5',
      team: 'RR',
      pld: '11',
      rr: '-0.06',
      points: '10',
    },
    {
      key: '6',
      team: 'KXIP',
      pld: '9',
      rr: '-0.62',
      points: '8',
    },
    {
      key: '7',
      team: 'SRH',
      pld: '10',
      rr: '-1.42',
      points: '6',
    },
    {
      key: '8',
      team: 'KKR',
      pld: '10',
      rr: '-2.47',
      points: '4',
    },
  ];
  return (
    <Table
      columns={columns}
      dataSource={data}
      size="small"
      pagination={false}
    />
  );
}
