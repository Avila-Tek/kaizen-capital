import React from 'react';
import { scss } from 'utils';
import * as styles from './section.module.scss';

function Section({ children, bkgClassName, className, ...props }) {
  return (
    <section className={scss(styles.root, bkgClassName)}>
      <div className={scss(styles.container, className)} {...props}>
        {children}
      </div>
    </section>
  );
}

export default Section;
