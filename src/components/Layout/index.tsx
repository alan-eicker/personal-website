import React, { ReactNode } from 'react';
import styles from './styles.module.scss';

export interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <div className={styles.layout}>
      {/** Header... */}
      <main className={styles.main}>
        <div className={styles.content}>{children}</div>
        {/** Footer... */}
      </main>
    </div>
  );
};

export default Layout;
