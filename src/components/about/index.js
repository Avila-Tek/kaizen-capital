import React, { useState, useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image";
import { getImage } from 'gatsby-plugin-image';
// import BackgroundImage from 'gatsby-background-image';
// import { convertToBgImage } from 'gbimage-bridge';
import { Waypoint } from 'react-waypoint';
import Section from 'components/shared/section';
import Title from 'components/shared/multi-title';
import Icon from 'components/shared/icon';
import { LanguageContext } from 'contexts/language-context';
import { scss } from 'utils';
import * as styles from './about.module.scss';

const propTypes = {};
const defaultProps = {};

function KDABanner() {
  const language = useContext(LanguageContext);
  // const placeholderImage = useStaticQuery(graphql`
  //   {
  //     banner: file(relativePath: { eq: "kc-banner.jpg" }) {
  //       childImageSharp {
  //         gatsbyImageData(
  //           quality: 100
  //           placeholder: BLURRED
  //           formats: [AUTO, WEBP]
  //           width: 1300
  //           height: 445
  //         )
  //       }
  //     }
  //   }
  // `);
  // const image = getImage(placeholderImage.banner);
  // const bgImage = convertToBgImage(image);

  return (
    <StaticImage
      src="../../images/kc-banner.jpg"
      style={{
        width: '100%',
        height: '445',
      }}
      className={styles.bannerWrapper}
      alt={language.AboutBannerAlt}
    />
  );

  // return (
  //   <BackgroundImage
  //     Tag="div"
  //     {...bgImage}
  //     preserveStackingContext
  //     className={styles.bannerWrapper}
  //     alt={language.AboutBannerAlt}
  //   />
  // );
}

function ContentItem({ icon, line1='', line2='', className }) {
  return (
    <div className={scss(styles.cardWrapper, className)}>
      <div className={styles.iconWrapper}>
        <Icon icon={icon} />
      </div>
      <p>{line1}</p>
      <p>{line2}</p>
    </div>
  );
}

function AboutParagraph({ firstParagraph, secondParagraph }) {
  return (
    <div className={styles.paragraphWrapper}>
      <p>
        {firstParagraph}
      </p>
      <br />
      <br />
      <p>
        {secondParagraph}
      </p>
    </div>
  );
}

function About() {
  const language = useContext(LanguageContext);
  const [active, setActive] = useState(false);

  return (
    <>
      <Section id={language.AboutUsId}>
        <Title
          name={language.AboutTitle}
          teal={language.AboutSubtitlePrimary}
          white={language.AboutSubtitleSecondary}
        />
        <AboutParagraph
          firstParagraph={language.AboutFirstParagraph}
          secondParagraph={language.AboutSecondParagraph}
        />
        <Waypoint onEnter={() => setActive(true)}>
          <div className={styles.content}>
            <ContentItem
              className={scss(styles.first, active ? styles.active : '')}
              icon="graph"
              line1={language.AboutFirstColTitle}
            />
            <ContentItem
              className={scss(styles.second, active ? styles.active : '')}
              icon="relations"
              line1={language.AboutSecondColTitle}
            />
            <ContentItem
              className={scss(styles.third, active ? styles.active : '')}
              icon="security"
              line1={language.AboutThirdColTitle}
            />
            <ContentItem
              className={scss(styles.fourth, active ? styles.active : '')}
              icon="customer-service"
              line1={language.AboutFourthColTitle}
            />
          </div>
        </Waypoint>
      </Section>
      <KDABanner />
    </>
  );
}

About.propTypes = propTypes;
About.defaultProps = defaultProps;

export default About;
