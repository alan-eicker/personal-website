import React from 'react';
import Link from 'next/link';
import { HeaderProps } from 'interfaces/AppContent';
import styles from './styles.module.scss';

const Header = ({ title, nav }: HeaderProps) => (
  <header className={styles.header}>
    <div className={styles.logo}>{title}</div>
    <nav>
      <ul className={styles.nav}>
        {nav.map((link) => (
          <li key={link}>
            <Link className={styles.link} href={link}>
              {link.replace('/', '')}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Header;
