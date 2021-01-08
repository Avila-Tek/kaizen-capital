import React from 'react';
import PropTypes from 'prop-types';
import { scss } from 'utils';
import styles from './multi-title.module.scss';

const propTypes = {
  name: PropTypes.string.isRequired,
  teal: PropTypes.string,
  white: PropTypes.string,
  inline: PropTypes.bool,
};
const defaultProps = {
  inline: false,
};

function MultiTitle({ name, teal, white, inline }) {
  return (
    <>
      <div className={styles.titleContainer}>
        <h1 className={styles.sectionTitle}>{name}</h1>
        <div className={styles.line} />
      </div>
      {inline ? (
        <h2 className={scss(styles.slogan, styles.margin)}>
          <span className={styles.teal}>{teal}</span>
          {' '}
          {white}
        </h2>
      ) : (
        <>
          <h2 className={scss(styles.slogan, styles.teal)}>{teal}</h2>
          <h2 className={scss(styles.slogan, styles.margin)}>{white}</h2>
        </>
      )}
    </>
  );
}

MultiTitle.propTypes = propTypes;
MultiTitle.defaultProps = defaultProps;

export default MultiTitle;
