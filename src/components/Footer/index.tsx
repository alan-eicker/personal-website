import React from 'react';
import Link from 'next/link';
import { FooterProps } from 'interfaces/components';
import styles from './styles.module.scss';
import List from 'components/List';
import Icon from 'components/Icon';

const Footer = ({
  copyright,
  contactInfo,
  iconCredits,
  socialLinks,
}: FooterProps) => {
  const listItems = socialLinks.map(({ icon, name, url }) => (
    <Link className={styles.socialLink} key={name} aria-label={name} href={url}>
      <Icon icon={icon} />
    </Link>
  ));

  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        &copy; {new Date().getFullYear()} {copyright}
      </div>
      <List items={listItems} orientation="horizontal" />
    </footer>
  );
};

export default Footer;
