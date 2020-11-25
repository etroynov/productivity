import { FC, ReactNode } from 'react';

import { StyledCard, StyledMeta, StyledIcon } from './styles';

type Props = {
  icon?: ReactNode;
};

export const Card: FC<Props> = ({ icon, children }) => (
  <StyledCard>
    {icon && <StyledIcon>{icon}</StyledIcon>}

    <StyledMeta>{children}</StyledMeta>
  </StyledCard>
);
