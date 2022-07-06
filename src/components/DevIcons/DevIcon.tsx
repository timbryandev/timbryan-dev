import React from 'react';

import Wrapper from './DevIconWrapper';
import { IDevIconProps } from './types';

const DevIcon = ({ Icon, title, url }: IDevIconProps) => (
  <Wrapper url={url}>
    <Icon />
    {title}
  </Wrapper>
);
export default DevIcon;
