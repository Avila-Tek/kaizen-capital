import React, { useState, useContext } from 'react';
import { Link } from 'gatsby';
// import PropTypes from 'prop-types';
import Icon from 'components/shared/icon';
import { scss } from 'utils';
import { WindowContext } from 'contexts/window-context';
import { LanguageContext } from 'contexts/language-context';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import * as styles from './header.module.scss';

const propTypes = {};
const defaultProps = {};

function NavItem({ name, href }) {
  const language = useContext(LanguageContext);
  return (
    <Link className={styles.link} to={href} title={`${language.linkTitle} ${name}`}>
      {name}
      <div className={styles.line} />
    </Link>
  );
}

const LanguageDropdown = () => {
  const [activeScrolldown, setActiveScrolldown] = useState(false);
  const language = useContext(LanguageContext);
  return (
    <div className={styles.languagedropdownWrapper}>
      <div className={styles.languageDropdown} onClick={() => setActiveScrolldown(!activeScrolldown)}>
        <p className={styles.dropdownText}>
          {language.languageDropdown.language}

          <Icon className={`${styles.closed} ${activeScrolldown ? styles.opened : ''}`} w="w14" icon="dropdown-arrow" />
        </p>
      </div>
      <div className={styles.dropdownText} style={{ display: activeScrolldown ? 'block' : 'none' }}>
        {language.languageDropdown.otherLanguages.map(lang => (
          <Link className={styles.dropdownElement} to={lang.href} key={lang}>
            {lang.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

const SocialMedia = () => {
  const SocialIcon = props => {
    return (
      <OutboundLink rel="noopener noreferrer" target="_blank" href={props.icon === 'instagram' ? 'https://www.instagram.com/kd.agency/' : 'https://www.linkedin.com/company/kd-agency/'}>
        <Icon icon={props.icon} />
      </OutboundLink>
    );
  };

  // style={{ width: '30px', height: '30px', <display:></display:> 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#01c1ab', borderRadius: '50%', cursor: 'pointer' }}

  return (
    <div className={styles.socialIconsWrapper} style={{ width: '55px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <SocialIcon icon="instagram" />
      <SocialIcon icon="linkedin" />
    </div>
  );
};

function Header() {
  const context = useContext(WindowContext);
  const language = useContext(LanguageContext);
  const { displaySize, scrolled } = context;
  const [activeNav, setActiveNav] = useState(false);

  if (displaySize === null) return null;
  return (
    <header
      className={styles.header}
      style={{ backgroundColor: scrolled ? '#214A79' : 'transparent' }}
    >
      <nav className={styles.wrapper}>
        <div className={styles.iconsWrapper}>
          <Icon icon="kaizen" />
        </div>
        {displaySize === 'DESKTOP' ? (
          <div className={styles.navWrapper}>
            {language.links.map(item => (
              <NavItem {...item} key={item.name} />
            ))}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <LanguageDropdown />
            </div>
          </div>
        ) : (
          <div onClick={() => (setActiveNav(!activeNav))}>
            <Icon w="w14" icon="burger" />
          </div>
        )}
        <div
          className={`${styles.navBackground}  ${activeNav ? `${styles.active}` : ''}`}
        >
          <div className={`${styles.navWrapperMdSm} ${activeNav ? `${styles.active}` : ''}`}>
            <div className={styles.linksWrapper}>
              {language.links.map(item => (
                <NavItem onClick={() => setActiveNav(false)} {...item} key={item.name} />
              ))}
              <span style={{ height: '30px' }} />
              <LanguageDropdown />
            </div>
            <div
              onClick={() => (setActiveNav(!activeNav))}
              className={styles.buttonWrapper}
            >
              <Icon icon="close-button" />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
