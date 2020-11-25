import { FC } from 'react';
import { Typography } from 'antd';

import { UsersListContainer } from '../../containers';

import { Layout } from '../../components';

export const UsersPage: FC = () => {

  return (
    <Layout>
      <header>
        <Typography.Title>Employees</Typography.Title>
      </header>
      <UsersListContainer />
    </Layout>
  );
}