import React from 'react';
import classnames from 'classnames';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { HeaderProps } from 'interfaces/components';
import styles from './styles.module.scss';

const Header = ({ title, nav }: HeaderProps) => {
  const { pathname } = useRouter();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">{title}</Link>
      </div>
      <nav>
        <ul className={styles.nav}>
          {nav.map((link) => {
            const linkText = link.replace('/', '');
            const isActive = link === pathname;
            return (
              <li key={link}>
                <Link
                  className={classnames(styles.link, {
                    [styles.isActive]: isActive,
                  })}
                  href={link}
                >
                  {linkText}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
