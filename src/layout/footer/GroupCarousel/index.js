import React from 'react';
import Swiper from 'react-id-swiper';
import Icon from 'components/shared/icon';

import * as styles from './GroupCarousel.module.scss';

const GroupCarousel = () => {
    const params = {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true
    };
    return (
      <div className={styles.sliderWrapper}>
        <Swiper {...params}>
          <div className={styles.slide}><Icon icon="brand-kaizen-holdings" /></div>
          <div className={styles.slide}><Icon icon="brand-kaizen-capital" /></div>
          <div className={styles.slide}><Icon icon="brand-kaizen-digital-agency" /></div>
          <div className={styles.slide}><Icon icon="brand-datacel" /></div>
          <div className={styles.slide}><Icon icon="brand-bloom" /></div>
          <div className={styles.slide}>
            <Icon icon="brand-iselitas" />
          </div>
          <div className={styles.slide}>
            <Icon icon="brand-socado" />
          </div>
        </Swiper>
      </div>
    );
};
export default GroupCarousel;
