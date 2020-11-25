import styled from 'styled-components';

import { Card } from 'antd';

export const StyledCard = styled(Card)`
  & > .ant-card-body {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const StyledMeta = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 24px;
`;

export const StyledIcon = styled.div`
  font-size: 64px;
`;