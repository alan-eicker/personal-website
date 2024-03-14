import React, { ReactNode } from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import styles from './styles.module.scss';
import { HeaderProps, FooterProps } from '../../interfaces/AppContent';

export interface ILayoutProps {
  children: ReactNode;
  header: HeaderProps;
  footer: FooterProps;
}

const Layout = ({ children, header, footer }: ILayoutProps) => {
  return (
    <div className={styles.layout}>
      <Header {...header} />
      <main className={styles.main}>
        <div className={styles.content}>{children}</div>
        <Footer {...footer} />
      </main>
    </div>
  );
};

export default Layout;
