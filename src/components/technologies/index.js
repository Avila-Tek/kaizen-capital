import React, { useContext } from 'react';
import Swiper from 'react-id-swiper';
import { useStaticQuery, graphql } from 'gatsby';
// import PropTypes from "prop-types";
import { WindowContext } from 'contexts/window-context';
import { LanguageContext } from 'contexts/language-context';
import Section from 'components/shared/section';
import Title from 'components/shared/multi-title';
import Img from 'components/shared/image';
import { scss } from 'utils';
import * as styles from './technologies.module.scss';

// const propTypes = {};
// const defaultProps = {};

function TechCard({ image, teal, white, ...props }) {
  return (
    <div className={scss(styles.cardContainer, props.className ? props.className : '')}>
      <div className={styles.imgWrapper}>
        <div className={styles.zoomContainer}>
          <Img src={image} className={styles.img} />
        </div>
      </div>
      <div className={scss(styles.title, styles.teal)}>{teal}</div>
      {white && <div className={styles.title}>{white}</div>}
    </div>
  );
}

function Technologies() {
  const language = useContext(LanguageContext);
  const { displaySize } = useContext(WindowContext);
  const images = useStaticQuery(graphql`{
  SPA: file(relativePath: {eq: "SPA.png"}) {
    childImageSharp {
      gatsbyImageData(width: 350, height: 485, quality: 100, layout: CONSTRAINED)
    }
  }
  CMS: file(relativePath: {eq: "CMS.png"}) {
    childImageSharp {
      gatsbyImageData(width: 350, height: 485, quality: 100, layout: CONSTRAINED)
    }
  }
  MPA: file(relativePath: {eq: "MPA.png"}) {
    childImageSharp {
      gatsbyImageData(width: 350, height: 485, quality: 100, layout: CONSTRAINED)
    }
  }
  APPS: file(relativePath: {eq: "APPS.png"}) {
    childImageSharp {
      gatsbyImageData(width: 350, height: 485, quality: 100, layout: CONSTRAINED)
    }
  }
  ECOM: file(relativePath: {eq: "ECOM.png"}) {
    childImageSharp {
      gatsbyImageData(width: 350, height: 485, quality: 100, layout: CONSTRAINED)
    }
  }
}
`);

  const swiperConfig = {
    centeredSlides: true,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true,
  };

  const techCards = [
    <TechCard
      key="SPA"
      image={images.SPA}
      teal={language.WebsitesTitle1}
      white={language.WebsitesSubtitle1}
    />,
    <TechCard
      key="MPA"
      image={images.MPA}
      teal={language.WebsitesTitle2}
      white={language.WebsitesSubtitle2}
    />,
    <TechCard
      key="CMS"
      className={styles.margin120lg}
      image={images.CMS}
      teal={language.WebsitesTitle3}
      white={language.WebsitesSubtitle3}
    />,
    <TechCard
      key="ECOM"
      className={styles.margin120md}
      image={images.ECOM}
      teal={language.WebsitesTitle4}
    />,
    <TechCard
      key="APPS"
      className={styles.margin240}
      image={images.APPS}
      teal={language.WebsitesTitle5}
    />,
  ];

  return (
    <Section id={language.TechId}>
      <Title
        name={language.WebsitesTitle}
        teal={language.WebsitesSubtitlePrimary}
        white={language.WebsitesSubtitleSecondary}
      />
      {displaySize === 'MOBILE' ? (
        <Swiper {...swiperConfig}>
          {techCards.map((card, i) => (
            <div key={`swiper-slide-${i}`}>{card}</div>
          ))}
        </Swiper>
      ) : (
        <div className={styles.cardsWrapper}>{techCards}</div>
      )}
    </Section>
  );
}

// Technologies.propTypes = propTypes;
// Technologies.defaultProps = defaultProps;

export default Technologies;
