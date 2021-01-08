import React, { useRef, useEffect, useState, useContext } from 'react';
// import PropTypes from 'prop-types';
import { scss } from 'utils';
import { useStaticQuery, graphql } from 'gatsby';
import Section from 'components/shared/section';
import Title from 'components/shared/multi-title';
import Img from 'components/shared/image';
import { LanguageContext } from 'contexts/language-context';
import styles from './services.module.scss';

// const propTypes = {};
const defaultProps = {};

function ServiceCard({ title, img, details = [], ...props }) {
  const detailsRef = useRef(null);

  const [open, toggleOpen] = useState(false);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (open && detailsRef) {
      setHeight(detailsRef.current.scrollHeight);
      detailsRef.current.style.height = `${detailsRef.current.scrollHeight}px`;
    } else if (detailsRef) {
      detailsRef.current.style.height = '0';
    }
  }, [height, open, title]);

  function heightChange(open) {
    if (open) {
      detailsRef.current.style.height = `${height}px`;
    } else {
      detailsRef.current.style.height = 0;
    }
  }

  return (
    <div
      onMouseEnter={() => {
        toggleOpen(!open);
        heightChange(!open);
      }}
      onMouseLeave={() => {
        toggleOpen(!open);
        heightChange(!open);
      }}
      className={scss(styles.cardWrapper, props.className ? props.className : '')}
    >
      <div className={styles.title}>
        <span dangerouslySetInnerHTML={{ __html: title }} />
        <div className={styles.details} ref={detailsRef}>
          {details.map(detail => (
            <div key={detail} dangerouslySetInnerHTML={{ __html: detail }} />
          ))}
        </div>
      </div>
      <div className={styles.overlay} />
      <Img className={styles.img} src={img} />
    </div>
  );
}

function Services() {
  const language = useContext(LanguageContext);
  const data = useStaticQuery(graphql`
    query {
      consulting_img: file(relativePath: { eq: "consulting.png" }) {
        childImageSharp {
          fluid(maxWidth: 535, maxHeight: 440, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      corporate_img: file(relativePath: { eq: "corporate-debt.png" }) {
        childImageSharp {
          fluid(maxWidth: 535, maxHeight: 440, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      financial_img: file(relativePath: { eq: "financial-placements.png" }) {
        childImageSharp {
          fluid(maxWidth: 535, maxHeight: 360, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      capital_img: file(relativePath: { eq: "capital-management.png" }) {
        childImageSharp {
          fluid(maxWidth: 535, maxHeight: 360, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <Section id={language.ServicesId}>
      <Title
        name={language.ServicesTitle}
        teal=""
        white=""
      />
      <div className={styles.mainWrapper}>
        <ServiceCard
          className={styles.first}
          title={language.DigitalTitle}
          img={data.consulting_img}
          details={language.DigitalInner}
        />
        <ServiceCard
          className={styles.second}
          title={language.BrandingTitle}
          img={data.capital_img}
          details={language.BrandingInner}
        />
        <ServiceCard
          className={styles.third}
          title={language.ExpertsTitle}
          img={data.financial_img}
          details={language.ExpertsInner}
        />
        <ServiceCard
          className={styles.fourth}
          title={language.PublicityTitle}
          img={data.corporate_img}
          details={language.PublicityInner}
        />
      </div>
    </Section>
  );
}

// Services.propTypes = propTypes;
Services.defaultProps = defaultProps;

export default Services;
