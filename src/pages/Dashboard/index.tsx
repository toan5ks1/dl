// const Dashboard: React.FC = () => {
//   return <>
    
//   </>;
// };

// export default Dashboard;

import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Tag, Space } from 'antd';
import type { ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import request from 'umi-request';
import { typeProColumns } from '@ant-design/pro-table';

type GithubIssueItem = {
  url: string;
  id: number;
  number: number;
  title: string;
  labels: {
    name: string;
    color: string;
  }[];
  state: string;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at?: string;
};

const columns: ProColumns<GithubIssueItem>[] = [
  {
    title: 'Mission details',
    dataIndex: 'title',
    ellipsis: true,
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
      ],
    },
    width: '20%',
  },
  {
    title: 'Operate',
    dataIndex: 'labels',
    search: false,
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
      ],
    },
    renderFormItem: (_, { defaultRender }) => {
      return defaultRender(_);
    },
    render: (_, record) => (
      <Space>
        {record.labels.map(({ name, color }) => (
          <>
            <Tag color="default" key={name}>
              Copy Link
            </Tag>
            {/* <Tag color="default" key={name}>
              Copy Link
            </Tag> */}
          </>
        ))}
      </Space>
    ),
  },
  {
    title: 'Target',
    dataIndex: 'state',
    initialValue: 'all',
    valueEnum: {
      all: { text: 'Install', status: 'Default' },
      open: { text: 'Install', status: 'Success' },
      // running: { text: '运行中', status: 'Processing' },
      // online: { text: '已上线', status: 'Success' },
      // error: { text: '异常', status: 'Error' },
    },
  },
  {
    title: 'The number of clicks',
    dataIndex: 'title',
    valueType: 'digit',
    render: () => (Math.floor(Math.random() * 20000)),
  },
  {
    title: 'Install',
    dataIndex: 'title',
    valueType: 'digit',
    render: () => (Math.floor(Math.random() * 1000)),
  },
  {
    title: 'Commission income',
    dataIndex: 'title',
    valueType: 'digit',
    render: () => (`$${(Math.floor(Math.random() * 100))}`),
  },
  {
    title: 'Task collection time',
    key: 'showTime',
    dataIndex: 'created_at',
    valueType: 'dateTime',
    hideInSearch: true,
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
      ],
    },
  },
];

const Dashboard: React.FC = () => {
  return (
    <ProTable<GithubIssueItem>
      columns={columns}
      request={async (params = {}) =>
        request<{
          data: GithubIssueItem[];
        }>('https://proapi.azurewebsites.net/github/issues', {
          params,
        })
      }
      rowKey="id"
      search={{
        labelWidth: 'auto',
      }}
      form={{
        ignoreRules: false,
      }}
      pagination={{
        pageSize: 5,
      }}
      dateFormatter="string"
      headerTitle="My task"
      toolBarRender={() => [
        <Button key="button" icon={<PlusOutlined />} type="primary">
          新建
        </Button>,
      ]}
    />
  );
};

export default Dashboard;
