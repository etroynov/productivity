import { FC } from 'react';

import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import { MailOutlined, LockOutlined } from '@ant-design/icons';

import { useAuth } from '../../hooks';

import { StyledDiv, StyledContainer, StyledWrapper } from './styles';

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export const LoginPage: FC = () => {
  const { handlers, loading } = useAuth();

  return (
    <StyledWrapper>
      <Form name="login" onFinish={(values) => handlers.login(values)}>
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
