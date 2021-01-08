import React from 'react';
// import PropTypes from 'prop-types';
import Section from 'components/shared/section';
import Title from 'components/shared/multi-title';
import styles from './projects.module.scss';

const propTypes = {};
const defaultProps = {};

function Projects() {
  return (
    <Section id="proyectos">
      <Title name="nuestros proyectos" teal="ideas hechas" white="realidad" inline />
    </Section>
  );
}

Projects.propTypes = propTypes;
Projects.defaultProps = defaultProps;

export default Projects;
