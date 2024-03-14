/* eslint-disable react/display-name */
import React, { ComponentType } from 'react';
import Layout from 'components/Layout';
import { useAppContent } from '../pages/_app';

export const withLayout = <TProps extends object>(
  Component: ComponentType<TProps>,
) => {
  return (props: TProps) => {
    const { content } = useAppContent();

    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};

export default withLayout;
