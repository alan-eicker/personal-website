import React from 'react';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import Layout from 'components/Layout';
import content from 'data/content.json';
import { AppContent } from 'interfaces/components';
import 'styles/base.scss';

const App = ({ Component, pageProps }: AppProps) => {
  const { pathname } = useRouter();
  const { header, footer } = content;
  const page = pathname.split('/')[1];
  const componentProps = content[page as keyof AppContent] as object;

  return (
    <Layout header={header} footer={footer}>
      <Component {...pageProps} {...componentProps} />
    </Layout>
  );
};

export default App;
