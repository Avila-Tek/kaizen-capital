import React from 'react';
import * as styles from './icon.module.scss';

export default ({ w, ...props }) => (
  <svg
    className={`${styles.icon} ${w ? styles[w] : styles.w14} ${
      props.className ? props.className : ''
    }`}
    viewBox="0 0 320 512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="currentColor"
      d="M168.5 164.2l148 146.8c4.7 4.7 4.7 12.3 0 17l-19.8 19.8c-4.7 4.7-12.3 4.7-17 0L160 229.3 40.3 347.8c-4.7 4.7-12.3 4.7-17 0L3.5 328c-4.7-4.7-4.7-12.3 0-17l148-146.8c4.7-4.7 12.3-4.7 17 0z"
    />
  </svg>
);
