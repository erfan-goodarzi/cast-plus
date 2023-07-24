import { Navbar } from '@nextui-org/react';
import { Link } from '@tanstack/react-location';

import type { NavLinkItems } from './Nav';

interface Props {
  links: NavLinkItems[];
}

export const MobileNav = ({ links }: Props) => {
  return (
    <Navbar.Collapse transitionTime={800}>
      {links.map((item, index) => (
        <Navbar.CollapseItem
          key={item.label}
          activeColor="warning"
          css={{
            color: index === item.label.length - 1 ? '$error' : '',
          }}
          isActive={index === 2}
        >
          <Link color="inherit">{item.label}</Link>
        </Navbar.CollapseItem>
      ))}
    </Navbar.Collapse>
  );
};
