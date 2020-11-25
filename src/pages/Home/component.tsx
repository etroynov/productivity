import { FC } from 'react';

import { Typography, Row, Col } from 'antd';

import {
  TeamOutlined,
  RocketOutlined,
  ClockCircleOutlined,
  AlertOutlined,
} from '@ant-design/icons';

import { getTotalTime } from './utils';

import { Layout, Card } from '../../components';
import { UsersListContainer } from '../../containers';
import { useUsers } from '../../hooks';

export const HomePage: FC = () => {
  const [users, loading] = useUsers();
  const [totalClockedInTime, totalProductiveTime, totalUnproductiveTime] = getTotalTime(users);

  return (
    <Layout
      header={
        <Row gutter={24}>
          <Col span={6}>
            <Card icon={<TeamOutlined />}>
              <Typography.Text>Employees</Typography.Text>
              <Typography.Text>{users.length}</Typography.Text>
            </Card>
          </Col>

          <Col span={6}>
            <Card icon={<ClockCircleOutlined />}>
              <Typography.Text>Clocked in time</Typography.Text>
              {totalClockedInTime}
            </Card>
          </Col>

          <Col span={6}>
            <Card icon={<RocketOutlined />}>
              <Typography.Text>Productive time</Typography.Text>
              {totalProductiveTime}
            </Card>
          </Col>

          <Col span={6}>
            <Card icon={<AlertOutlined />}>
              <Typography.Text>Unproductive time</Typography.Text>
              {totalUnproductiveTime}
            </Card>
          </Col>
        </Row>
      }
    >
      <UsersListContainer />
    </Layout>
  );
};
