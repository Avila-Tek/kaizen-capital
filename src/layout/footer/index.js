import React, { useContext } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
// import PropTypes from 'prop-types';
import BackgroundImage from 'gatsby-background-image';
import { WindowContext } from 'contexts/window-context';
import { LanguageContext } from 'contexts/language-context';
import Icon from 'components/shared/icon';
import Section from 'components/shared/section';
import * as styles from './footer.module.scss';

import GroupCarousel from './GroupCarousel';

const propTypes = {};
const defaultProps = {};

function KDABanner() {
  const language = useContext(LanguageContext);
  const context = useContext(WindowContext);
  const { displaySize } = context;
  const image = useStaticQuery(graphql`{
  banner: file(relativePath: {eq: "kc-banner.jpg"}) {
    childImageSharp {
      gatsbyImageData(quality: 100, layout: FULL_WIDTH)
    }
  }
}
`);

  if (displaySize === null) return null;

  return displaySize === 'DESKTOP' ? (
    <BackgroundImage
      className={styles.bannerWrapper}
      fluid={image.banner.childImageSharp.gatsbyImageData}
      alt={language.AboutBannerAlt}
    >
      <div className={styles.titleContainer}>
        <h3>
          Kaizen Capital es parte del grupo Kaizen Holdings
        </h3>
        <div className={styles.content}>
          <Icon icon="brand-kaizen-holdings" />
          <Icon icon="brand-kaizen-capital" />
          <Icon icon="brand-kaizen-digital-agency" />
          <Icon icon="brand-datacel" />
          <Icon icon="brand-bloom" />
          <Icon icon="brand-iselitas" />
          <Icon icon="brand-socado" />
        </div>
      </div>
    </BackgroundImage>
  ) : (
    <BackgroundImage
      className={styles.bannerWrapper}
      fluid={image.banner.childImageSharp.gatsbyImageData}
      alt={language.AboutBannerAlt}
    >
      <h3 className={styles.titleSmall}>
        Kaizen Capital es parte del grupo Kaizen Holdings
      </h3>
      <GroupCarousel />
    </BackgroundImage>
  );
}

function Footer() {
  const language = useContext(LanguageContext);

  return (
    <>
      <KDABanner />
      <footer className={styles.footer}>
        <Section className={styles.footerSection}>
          <Icon className={styles.footerLogo} icon="footer-logo" />
          <div className={styles.footerInfo}>
            <p className={styles.address}>
              Dirección: Urb. Las Mercedes, Caracas, Venezuela.
            </p>
            <p className={styles.legalInfo}>
              2020 ®Kaizen Capital. Todos los derechos reservados | Desarrollo por
              {' '}
              <a href="https://kd.agency/" target="__blank">kd.agency</a>
            </p>
          </div>
          <div className={styles.socialLinks}>
            <a href="">
              <Icon icon="linkedin" />
            </a>
            <a href="">
              <Icon icon="instagram" />
            </a>
          </div>
        </Section>
      </footer>
    </>
  );
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
