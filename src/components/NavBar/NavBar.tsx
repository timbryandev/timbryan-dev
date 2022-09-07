import { NavItem, NavItemProps } from './NavItem';

export interface NavBarProps {
  items: NavItemProps[];
}

export const NavBar = ({ items }: NavBarProps) => (
  <nav>
    <ul className="NavBar flex flex-wrap text-xl px-5 py-2">
      {items.map(({ link, text, newWindow }) => (
        <NavItem key={link} link={link} text={text} newWindow={newWindow} />
      ))}
    </ul>
  </nav>
);
