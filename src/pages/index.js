import React, { useEffect } from 'react';
import { navigate } from 'gatsby';

const Init = () => {
  useEffect(() => {
    const browserLang = navigator.language || navigator.userLanguage;
    navigate(browserLang.includes('es') ? '/es/' : '/en/');
  }, []);

  return <div />;
};

export default Init;
