import { FunctionComponent } from 'react';

import { IconType } from 'react-icons';

export interface IDevIconsProps {
  list: 'proficient' | 'comfortable' | 'working-knowledge';
}

export type IDevIconList = [string, IconType, string][];

export interface IDevIconProps {
  Icon: FunctionComponent<{ size: number }>;
  title: string;
  url?: string;
}
