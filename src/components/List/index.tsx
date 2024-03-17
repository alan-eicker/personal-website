import React from 'react';
import classnames from 'classnames';
import { ListProps } from 'interfaces/components';
import styles from './styles.module.scss';

const List = ({ items, orientation = 'vertical' }: ListProps) => (
  <ul
    className={classnames(styles.list, {
      [styles.horizontal]: orientation === 'horizontal',
    })}
  >
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

export default List;
