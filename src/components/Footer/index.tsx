import React from 'react';
import { FooterProps } from 'interfaces/AppContent';
import styles from './styles.module.scss';

const Header = ({
  copyright,
  contactInfo,
  iconCredits,
  socialLinks,
}: FooterProps) => (
  <header>
    <div className={styles.copyright}>
      &copy; {new Date().getFullYear()} {copyright}
    </div>
  </header>
);

export default Header;
