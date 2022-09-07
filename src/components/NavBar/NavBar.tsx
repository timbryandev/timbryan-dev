import NavItem, { NavItemProps } from './NavItem';

export interface NavBarProps {
  items: NavItemProps[];
}

export default function NavBar({ items }: NavBarProps) {
  return (
    <nav className="navbar">
      <ul className="navbar__list flex flex-wrap text-xl px-5 py-2">
        {items.map(({ link, text, newWindow }) => (
          <NavItem key={link} link={link} text={text} newWindow={newWindow} />
        ))}
      </ul>
    </nav>
  );
}
