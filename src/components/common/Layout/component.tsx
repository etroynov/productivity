import { FC } from 'react';
import { Layout as AntLayout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';

import { AppstoreOutlined, TeamOutlined } from '@ant-design/icons';

import { Logo } from '../Logo';

import { StyledContent, StyledFooter, StyledWidgets } from './styles';

const { Header, Sider } = AntLayout;

type Props = {
  header?: React.ReactNode;
};

export const Layout: FC<Props> = ({ header, children }) => {
  const location = useLocation();

  return (
    <AntLayout>
      <Sider theme="light">
        <Logo>productivity</Logo>
        <Menu mode="inline" defaultSelectedKeys={[location.pathname]}>
          <Menu.Item key="/" icon={<AppstoreOutlined />}>
            <Link to="/">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="/users" icon={<TeamOutlined />}>
            <Link to="/users">Employees</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <AntLayout>
        <Header />
        {header && <StyledWidgets>{header}</StyledWidgets>}
        <StyledContent>{children}</StyledContent>
        <StyledFooter>Productivity ©2020 Created by etroynov</StyledFooter>
      </AntLayout>
    </AntLayout>
  );
};
