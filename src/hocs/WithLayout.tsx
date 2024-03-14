/* eslint-disable react/display-name */
import React, { ComponentType } from 'react';
import Layout from 'components/Layout';
import { useRouter } from 'next/router';
import { AppContent } from '../interfaces/AppContent';
import content from '../data/content.json';

export const withLayout = <TProps extends object>(
  Component: ComponentType<TProps>,
) => {
  return (props: TProps) => {
    const { pathname } = useRouter();
    const { header, footer } = content;
    const [_, page] = pathname.split('/');
    const pageProps = content[page as keyof AppContent] as object;

    return (
      <Layout header={header} footer={footer}>
        <Component {...props} {...pageProps} />
      </Layout>
    );
  };
};

export default withLayout;
