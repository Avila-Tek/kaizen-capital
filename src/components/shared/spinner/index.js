import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './spinner.module.scss';

const propTypes = {};
const defaultProps = {};

function Spinner() {
  return (
    <div className={styles.ldsEllipsis}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
}

Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;

export default Spinner;
