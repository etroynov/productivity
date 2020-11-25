import styled from 'styled-components';

import { Card } from 'antd';

export const StyledCard = styled(Card)`
  & > .ant-card-body {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 32px;
  }
`;
