import React from 'react';
import SEO from 'components/shared/seo';
import Hero from 'components/hero';
import About from 'components/about';
import Services from 'components/services';
// import Projects from 'components/projects';
// import Team from 'components/our-team';
import Technologies from 'components/technologies';
import Contact from 'components/contact';
import Tools from 'components/tools';
import Layout from '../layout';

const LandingTemplate = ({ pageContext }) => {
  const { lang } = pageContext;

  return (
    <Layout lang={lang}>
      <SEO {...lang.meta} />
      <Hero />
      <About />
      <Services />
      {/* <Technologies />
      <Tools /> */}
      {/* <Projects /> */}
      {/* <Team /> */}
      <Contact />
    </Layout>
  );
};

export default LandingTemplate;
