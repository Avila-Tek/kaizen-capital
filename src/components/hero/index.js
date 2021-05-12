import React, { useContext } from 'react';
// import PropTypes from "prop-types";
import { useStaticQuery, graphql, Link } from 'gatsby';
import Section from 'components/shared/section';
import Img from 'components/shared/image';
import Icon from 'components/shared/icon';
import { LanguageContext } from 'contexts/language-context';
import { scss } from 'utils';
import * as styles from './hero.module.scss';

const propTypes = {};
const defaultProps = {};

function Hero() {
  const language = useContext(LanguageContext);
  const data = useStaticQuery(graphql`{
  hero: file(relativePath: {eq: "kc-hero.jpg"}) {
    childImageSharp {
      gatsbyImageData(quality: 100, layout: FULL_WIDTH)
    }
  }
}
`);
  return (
    <Section bkgClassName={styles.root}>
      <Img className={styles.bkg} src={data.hero} alt={language.heroImgAlt} />
      <div className={styles.titleContainer}>
        <h2 className={styles.upperLine}>{language.heroSubtitle}&nbsp;&nbsp;{language.heroSubtitle2}</h2>
        <h2 className={scss(styles.lowerLine)}>{language.heroTitle}</h2>
      </div>
    </Section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
