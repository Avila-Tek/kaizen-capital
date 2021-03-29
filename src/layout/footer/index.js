import React, { useContext } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
// import PropTypes from 'prop-types';
import BackgroundImage from 'gatsby-background-image';
import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
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
  const placeholderImage = useStaticQuery(graphql`
    {
      banner: file(relativePath: { eq: "hero.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            quality: 100
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            width: 1300
            height: 445
          )
        }
      }
    }
  `);

  const image = getImage(placeholderImage.banner);
  const bgImage = convertToBgImage(image);

  if (displaySize === null) return null;

  return displaySize === 'DESKTOP' ? (
    <BackgroundImage
      Tag="section"
      {...bgImage}
      preserveStackingContext
      className={styles.bannerWrapper}
      alt={language.AboutBannerAlt}
    >
      <div className={styles.titleContainer}>
        <h3>Kaizen Capital es parte del grupo Kaizen Holdings</h3>
        <div className={styles.upiconContainer}>
          <a className={styles.upicon} href={language.links[0].href}>
            <svg viewBox="0 0 512 512">
              <path
                fill="rgba(33, 74, 121, 0.9)"
                d="M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm143.6 28.9l72.4-75.5V392c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V209.4l72.4 75.5c9.3 9.7 24.8 9.9 34.3.4l10.9-11c9.4-9.4 9.4-24.6 0-33.9L273 107.7c-9.4-9.4-24.6-9.4-33.9 0L106.3 240.4c-9.4 9.4-9.4 24.6 0 33.9l10.9 11c9.6 9.5 25.1 9.3 34.4-.4z"
              />
            </svg>
          </a>
        </div>
        <div className={styles.content}>
          <Icon icon="brand-kaizen-holdings" />
          <Icon icon="brand-kaizen-capital" />
          <Icon icon="brand-kaizen-digital-agency" />
          <Icon icon="brand-iselitas" />
          <Icon icon="brand-socado" />
        </div>
      </div>
    </BackgroundImage>
  ) : (
    <BackgroundImage
      Tag="section"
      className={styles.bannerWrapper}
      {...bgImage}
      alt={language.AboutBannerAlt}
    >
      <div className={styles.upiconContainer}>
        <a className={styles.upicon} href={language.links[0].href}>
          <svg viewBox="0 0 512 512">
            <path
              fill="rgba(33, 74, 121, 0.9)"
              d="M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm143.6 28.9l72.4-75.5V392c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V209.4l72.4 75.5c9.3 9.7 24.8 9.9 34.3.4l10.9-11c9.4-9.4 9.4-24.6 0-33.9L273 107.7c-9.4-9.4-24.6-9.4-33.9 0L106.3 240.4c-9.4 9.4-9.4 24.6 0 33.9l10.9 11c9.6 9.5 25.1 9.3 34.4-.4z"
            />
          </svg>
        </a>
      </div>
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
              2020 ®Kaizen Capital. Todos los derechos reservados | Desarrollo
              por
              {' '}
              <a href="https://kd.agency/" target="__blank">
                kd.agency
              </a>
            </p>
          </div>
          <div className={styles.socialLinks}>
            <a href="https://www.linkedin.com/company/kaizen-capital-venezuela/about/" target="_black">
              <Icon icon="linkedin" />
            </a>
            <a href="https://www.instagram.com/kaizencapital_/" target="_black">
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
