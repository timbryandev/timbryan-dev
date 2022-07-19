import { ReactNode } from 'react';

type IContentProps = {
  children: ReactNode | ReactNode[];
};

const Content = (props: IContentProps) => (
  <div className="content">{props.children}</div>
);

export { Content };
