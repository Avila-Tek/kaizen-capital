import React from 'react';
import * as styles from './icon.module.scss';

export default ({ ...props }) => (
  <svg
    style={props.style}
    className={`${styles.icon} ${styles.w30} ${props.className ? props.className : ''}`}
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="currentColor"
      d="M140 274c-6.6 0-12-5.4-12-12v-12c0-6.6 5.4-12 12-12h232c6.6 0 12 5.4 12 12v12c0 6.6-5.4 12-12 12H140zm364-18c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-32 0c0-119.9-97.3-216-216-216-119.9 0-216 97.3-216 216 0 119.9 97.3 216 216 216 119.9 0 216-97.3 216-216z"
    />
  </svg>
);
