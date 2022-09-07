import Wrapper from './DevIconWrapper';
import { IDevIconProps } from './types';

export default function DevIcon({ Icon, title, url }: IDevIconProps) {
  return (
    <Wrapper url={url}>
      <Icon size={50} />
      {title}
    </Wrapper>
  );
}
