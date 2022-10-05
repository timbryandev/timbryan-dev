import DevIcon from './DevIcon';
import { SKILLS } from './Skills';
import { IDevIconsProps } from './types';

const DevIcons = ({ list }: IDevIconsProps): JSX.Element => {
  const skillsList = SKILLS[list];

  return (
    <div className="devicons">
      {skillsList.map(([title, icon, url]) => (
        <DevIcon key={title} Icon={icon} title={title} url={url} />
      ))}
    </div>
  );
};

export default DevIcons;
