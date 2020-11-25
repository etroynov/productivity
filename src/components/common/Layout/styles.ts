import styled from 'styled-components';
import { Layout } from 'antd';

export const StyledContent = styled(Layout.Content)`
  min-height: calc(100vh - 40px - 64px - 70px);
  margin: 20px;
  padding: 20px;
  background-color: #ffffff;
`;

export const StyledFooter = styled(Layout.Footer)`
  height: 70px;
`;

export const StyledWidgets = styled.div`
  padding: 20px;
`;