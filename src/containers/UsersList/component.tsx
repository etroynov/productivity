import { FC, useState, useRef } from 'react';
import { Table, Radio, Divider, Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import { UserSwitchStatusContainer } from '../UserSwitchStatus';

import { useUsers } from '../../hooks';

import { formatTimeToWords } from '../../utils';

export const UsersListContainer: FC = () => {
  const [users, loading] = useUsers();
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const [userStatus, setUserStatus] = useState('active');
  const inputEl = useRef<any>(null);

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText('');
  };

  const handleSearch = (
    selectedKeys: any[],
    confirm: () => void,
    dataIndex: string
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const getColumnSearchProps = (dataIndex: any) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }: any) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={inputEl}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: any) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value: any, record: any) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: (visible: any) => {
      if (visible) {
        setTimeout(() => inputEl.current.select(), 100);
      }
    },
    render: (text: string) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      ...getColumnSearchProps('name'),
    },
    {
      title: 'Total Clocked in time',
      dataIndex: 'totalClockedInTime',
      render: (text: number, record: any) =>
        formatTimeToWords(
          record.totalProductiveTime + record.totalUnproductiveTime
        ),
    },
    {
      title: 'Total Productive time',
      dataIndex: 'totalProductiveTime',
      render: formatTimeToWords,
    },
    {
      title: 'Total Unproductive time',
      dataIndex: 'totalUnproductiveTime',
      render: formatTimeToWords,
    },
    {
      title: 'Active',
      dataIndex: 'status',
      render: (checked: boolean) => (
        <UserSwitchStatusContainer checked={checked} />
      ),
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: () => <a>Details</a>,
    },
  ];

  return (
    <div>
      <Radio.Group
        onChange={({ target: { value } }) => {
          setUserStatus(value);
        }}
        value={userStatus}
      >
        <Radio value="active">active</Radio>
        <Radio value="inactive">inactive</Radio>
      </Radio.Group>

      <Divider />
      <Table loading={loading} columns={columns} dataSource={users} />
    </div>
  );
};
