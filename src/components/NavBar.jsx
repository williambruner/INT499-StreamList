import React from 'react';
import { NavLink } from 'react-router-dom';
import { Clapperboard, ListVideo, ShoppingCart, CircleHelp } from 'lucide-react';

const links = [
  { to: '/', label: 'StreamList', Icon: ListVideo, end: true },
  { to: '/movies', label: 'Movies', Icon: Clapperboard },
  { to: '/cart', label: 'Cart', Icon: ShoppingCart },
  { to: '/about', label: 'About', Icon: CircleHelp },
];

export default function NavBar() {
  return (
    <nav className="nav" aria-label="Main navigation">
      {links.map(({ to, label, Icon, end }) => (
        <NavLink key={to} to={to} end={end} className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
          <Icon aria-hidden="true" size={18}/><span>{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
