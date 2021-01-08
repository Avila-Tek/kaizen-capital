import React from 'react';
import WindowProvider from 'contexts/window-context';
import LanguageProvider from 'contexts/language-context';
import Header from './header';
import Footer from './footer';

export default function Layout({ lang, children }) {
  return (
    <WindowProvider>
      <LanguageProvider value={lang}>
        <Header />
        <main>{children}</main>
        <Footer />
      </LanguageProvider>
    </WindowProvider>
  );
}
