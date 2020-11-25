import { FC, useEffect } from 'react';

import { Form, Input, Button } from 'antd';
import { Link, Redirect } from 'react-router-dom';
import { MailOutlined, LockOutlined } from '@ant-design/icons';

import { useFetch } from 'use-http';

import { StyledDiv, StyledContainer, StyledWrapper } from './styles';

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export const LoginPage: FC = () => {
  // TODO: add login, auth hooks
  const { data, post, loading, error } = useFetch('/login');

  const onFinish = (values: any) => {
    post(values);
  };

  if (data) {
    return <Redirect to="/" />;
  }

  return (
    <StyledWrapper>
      <Form name="login" onFinish={onFinish}>
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input prefix={<MailOutlined />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <StyledContainer>
            <Button loading={loading} type="primary" htmlType="submit">
              Log in
            </Button>
            <StyledDiv>
              <Link to="/register">register now!</Link>
            </StyledDiv>
          </StyledContainer>
        </Form.Item>
      </Form>
    </StyledWrapper>
  );
};
