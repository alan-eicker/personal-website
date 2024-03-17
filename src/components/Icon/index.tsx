import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';

export interface IconProps {
  icon: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Icon = ({ icon, size = 'md' }: IconProps) => (
  <i className={classnames('icon', icon, styles[size])} aria-hidden="true" />
);

export default Icon;
