import { FC } from 'react';

import { StyledLogo } from './styles';

export const Logo: FC = ({ children }) => (
  <StyledLogo>{children}</StyledLogo>
);
