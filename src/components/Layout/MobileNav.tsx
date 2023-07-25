import { Navbar } from '@nextui-org/react';
import { Link } from '@tanstack/react-location';

import type { NavLinkItems } from './Nav';

interface Props {
  links: NavLinkItems[];
  pathname: string;
}

export const MobileNav = ({ links, pathname }: Props) => {
  return (
    <>
      {links.map(item => (
        <Navbar.CollapseItem key={item.path}>
          <Link
            activeOptions={{ exact: pathname === item.path }}
            style={{
              padding: '8px 22px',
              fontSize: '16px',
            }}
            to={item.path}
          >
            {item.label}
          </Link>
        </Navbar.CollapseItem>
      ))}
    </>
  );
};
