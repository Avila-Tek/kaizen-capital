import React from 'react';
import Swiper from 'react-id-swiper';
import Icon from 'components/shared/icon';

import * as styles from './GroupCarousel.module.scss';

const GroupCarousel = () => {
    const params = {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
    };
    return (
      <div className={styles.sliderWrapper}>
        <Swiper {...params}>
          <div className={styles.slide}><Icon icon="brand-kaizen-holdings" /></div>
          <div className={styles.slide}><Icon icon="brand-kaizen-capital" /></div>
          <div className={styles.slide}><Icon icon="brand-kaizen-digital-agency" /></div>
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
