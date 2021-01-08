import React, { useState, useEffect, useContext } from 'react';
import { WindowContext } from 'contexts/window-context';
import Icon from 'components/shared/icon';
import Section from 'components/shared/section';
import Title from 'components/shared/multi-title';
import Img from 'components/shared/image';
import { LanguageContext } from 'contexts/language-context';
import { useStaticQuery, graphql } from 'gatsby';
import Swiper from 'react-id-swiper';
import styles from './tools.module.scss';

const propTypes = {};
const defaultProps = {};

function ToolCard({ image, name }) {
  return (
    <div className={styles.toolSlide}>
      <div
        className={
          image.childImageSharp.fluid.aspectRatio === 1
            ? styles.imgWrapper
            : styles.imgWrapperRectangularV
        }
      >
        <Img src={image} className={styles.img} />
      </div>
      <div className={styles.slideText}>{name.split(/(?=[A-Z])/).join(' ')}</div>
    </div>
  );
}

function NavigationArrow({ previous, onClick, disabled }) {
  return previous ? (
    <button
      type="button"
      aria-label="previous"
      className={`${styles.navigationButton} ${disabled ? styles.disabled : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      <Icon icon="arrow-up" w="w30" />
    </button>
  ) : (
    <button
      type="button"
      aria-label="next"
      className={`${styles.navigationButton} ${disabled ? styles.disabled : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      <Icon icon="arrow-up" w="w30" />
    </button>
  );
}

function Tools() {
  const images = useStaticQuery(graphql`
    query {
      Angular: file(relativePath: { eq: "angular.png" }) {
        childImageSharp {
          fluid(maxWidth: 120, maxHeight: 120) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
            presentationWidth
            presentationHeight
          }
        }
      }
      React: file(relativePath: { eq: "react.png" }) {
        childImageSharp {
          fluid(maxWidth: 120, maxHeight: 120) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
            presentationWidth
            presentationHeight
          }
        }
      }
      ReactNative: file(relativePath: { eq: "reactnative5.png" }) {
        childImageSharp {
          fluid(maxWidth: 80, maxHeight: 80) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
            presentationWidth
            presentationHeight
          }
        }
      }
      Wordpress: file(relativePath: { eq: "wordpress.png" }) {
        childImageSharp {
          fluid(maxWidth: 120, maxHeight: 120) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
            presentationWidth
            presentationHeight
          }
        }
      }
      Puppeteer: file(relativePath: { eq: "puppeteer.png" }) {
        childImageSharp {
          fluid(maxWidth: 63, maxHeight: 92) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
            presentationWidth
            presentationHeight
          }
        }
      }
      D3: file(relativePath: { eq: "d3.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, maxHeight: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
            presentationWidth
            presentationHeight
          }
        }
      }
      Firebase: file(relativePath: { eq: "firebase.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, maxHeight: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
            presentationWidth
            presentationHeight
          }
        }
      }
      Gatsby: file(relativePath: { eq: "gatsby.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, maxHeight: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
            presentationWidth
            presentationHeight
          }
        }
      }
      Mongodb: file(relativePath: { eq: "mongodb.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, maxHeight: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
            presentationWidth
            presentationHeight
          }
        }
      }
    }
  `);

  const [swiper, updateSwiper] = useState(null);
  const [previousDisabled, updatePrevious] = useState(true);
  const [nextDisabled, updateNext] = useState(false);
  const [previousdisplaySize, updatePreviousdisplaySize] = useState(null);
  const [rerender, updateRerender] = useState(false);
  const { displaySize } = useContext(WindowContext);
  const language = useContext(LanguageContext);
  useEffect(() => {
    updateRerender(false);
  });
  const checkEnds = () => {
    if (swiper.isBeginning) {
      updatePrevious(true);
    } else {
      updatePrevious(false);
    }
    if (swiper.isEnd) {
      updateNext(true);
    } else {
      updateNext(false);
    }
  };
  const getPrevious = () => {
    swiper.slidePrev();
    checkEnds();
  };

  const getNext = () => {
    swiper.slideNext();
    checkEnds();
  };
  if (previousdisplaySize !== displaySize) {
    updatePreviousdisplaySize(displaySize);
  }

  let swiperParams;
  if (displaySize === 'MOBILE') {
    swiperParams = {
      slidesPerView: 4,
      direction: 'vertical',
      spaceBetween: 10,
    };
    return (
      <Section>
        <Title name={language.TechnologiesTitle} />
        <div className={styles.swiperWrapper}>
          <Swiper {...swiperParams} containerClass={styles.swiperContainer} rebuildOnUpdate>
            {Object.keys(images).map(propertyName => (
              <div key={`${propertyName}`}>
                <ToolCard image={images[propertyName]} name={propertyName} />
              </div>
            ))}
          </Swiper>
          <div className={styles.fadeEffect} />
        </div>
      </Section>
    );
  }

  swiperParams = {
    slidesPerView: 1,
    direction: 'horizontal',
    breakpointsInverse: true,
    centererSlides: true,
    breakpoints: {
      768: {
        slidesPerView: 4,
      },
      1230: {
        slidesPerView: 6,
      },
    },
  };
  if (previousdisplaySize === 'MOBILE') {
    updateRerender(true);
  }

  return (
    <Section>
      <Title name={language.TechnologiesTitle} />
      <div className={styles.swiperWrapper}>
        <Swiper
          {...swiperParams}
          getSwiper={updateSwiper}
          containerClass={styles.swiperContainer}
          rebuildOnUpdate={rerender}
        >
          {Object.keys(images).map(propertyName => (
            <div key={`${propertyName}`}>
              <ToolCard image={images[propertyName]} name={propertyName} />
            </div>
          ))}
        </Swiper>
        <div className={styles.navigationWrapper}>
          <NavigationArrow previous onClick={() => getPrevious()} disabled={previousDisabled} />
          <NavigationArrow next onClick={() => getNext()} disabled={nextDisabled} />
        </div>
      </div>
    </Section>
  );
}

Tools.propTypes = propTypes;
Tools.defaultProps = defaultProps;

export default Tools;
