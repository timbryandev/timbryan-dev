import React, { ReactNode } from 'react';

type INavbarProps = {
  children: ReactNode;
};

const Navbar = (props: INavbarProps) => (
  <nav>
    <ul className="navbar flex flex-wrap text-xl">{props.children}</ul>
  </nav>
);

export { Navbar };
