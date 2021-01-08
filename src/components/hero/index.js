import React, { useContext } from 'react';
// import PropTypes from "prop-types";
import { useStaticQuery, graphql, Link } from 'gatsby';
import Section from 'components/shared/section';
import Img from 'components/shared/image';
import Icon from 'components/shared/icon';
import { LanguageContext } from 'contexts/language-context';
import { scss } from 'utils';
import styles from './hero.module.scss';

const propTypes = {};
const defaultProps = {};

function Hero() {
  const language = useContext(LanguageContext);
  const data = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { eq: "kc-hero.png" }) {
        childImageSharp {
          fluid(maxWidth: 1900, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <Section bkgClassName={styles.root}>
      <Img className={styles.bkg} src={data.hero} alt={language.heroImgAlt} />
      <div className={styles.titleContainer}>
        <h2 className={styles.upperLine}>{language.heroSubtitle}</h2>
        <h2 className={scss(styles.lowerLine)}>{language.heroTitle}</h2>
      </div>
    </Section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
