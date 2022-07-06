import { IconType } from 'react-icons';

export interface IDevIconsProps {
  list: 'proficient' | 'comfortable' | 'working-knowledge';
}

export type IDevIconList = [string, IconType, string | undefined][];

export interface IDevIconProps {
  Icon: React.FunctionComponent;
  title: string;
  url?: string;
}
