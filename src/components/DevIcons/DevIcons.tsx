import DevIcon from './DevIcon';
import { SKILLS } from './Skills';
import { IDevIconsProps } from './types';

const DevIcons = ({ list }: IDevIconsProps) => {
  const skillsList = SKILLS[list];

  return (
    <div className="flex flex-wrap justify-center">
      {skillsList.map(([title, icon, url]) => (
        <DevIcon key={title} Icon={icon} title={title} url={url} />
      ))}
    </div>
  );
};

export default DevIcons;
