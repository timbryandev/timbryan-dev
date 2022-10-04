import { ReactNode } from 'react';

interface IContentProps {
  children: ReactNode | ReactNode[];
}

const Content = (props: IContentProps) => (
  <div className="content">{props.children}</div>
);

export { Content };
