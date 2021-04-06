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
      banner: file(relativePath: { eq: "hero.png" }) {
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
        <h3>{language.group}</h3>
        <div className={styles.upiconContainer}>
          <a className={styles.upicon} href={language.links[0].href}>
          <svg viewBox="0 0 446.62 272.85">
          <g fill="white" id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M0,157.32,228.49,0l24.17,15.12L446.62,151V266.5L229.05,116.69,0,272.85Z"/></g></g>
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
          <svg viewBox="0 0 446.62 272.85">
          <g fill="white" id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M0,157.32,228.49,0l24.17,15.12L446.62,151V266.5L229.05,116.69,0,272.85Z"/></g></g>
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
              Urb. Las Mercedes, Caracas – Venezuela.
            </p>
            <p className={styles.legalInfo}>{`
              2021 ®Kaizen Capital. ${language.rights}`}
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
