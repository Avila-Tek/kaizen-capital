import React from 'react';
import * as styles from './icon.module.scss';

export default ({ w, ...props }) => (
  <svg
    className={`${styles.icon} ${w ? styles[w] : styles.w14} ${
      props.className ? props.className : ''
    }`}
    viewBox="0 0 448 512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="currentColor"
      d="M136.97 380.485l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273H436c6.627 0 12-5.373 12-12v-10c0-6.627-5.373-12-12-12H60.113l83.928-83.444c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0l-116.485 116c-4.686 4.686-4.686 12.284 0 16.971l116.485 116c4.686 4.686 12.284 4.686 16.97-.001z"
    />
  </svg>
);
