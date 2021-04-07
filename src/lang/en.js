const AboutUsId = 'about-us';
const ServicesId = 'services';
const TechId = 'technology';
// const ProjectsId = 'projects';
const ContactId = 'contact';

module.exports = {
  /* SEO */
  meta: {
    title: 'Home',
    description:
      "We'll drive you to the digital world. Develop your web page, find digital solutions for your business, build and improve your brand, set the trend with KDA",
  },
  /* Navbar */
  linkTitle: 'Go to',
  links: [
    { name: 'Home', href: '/en/#' },
    { name: 'Who we are', href: `/en/#${AboutUsId}` },
    { name: 'Services', href: `/en/#${ServicesId}` },
    // { name: 'technologies', href: `/en/#${TechId}` },
    // { name: 'projects', href: `/en/#${ProjectsId}` },
    { name: 'Contact us', href: `/en/#${ContactId}` },
  ],

  /* Navbar Language Dropdown */
  languageDropdown: {
    language: 'English',
    otherLanguages: [{ name: 'español', href: '/es/' }],
  },

  /* Hero Section */
  heroImgAlt: "Kaizen's Office",
  heroSubtitle: 'Boost',
  heroSubtitle2: 'your',
  heroTitle: 'financial growth',
  heroCTAText: 'Learn More About Us',
  heroCTALink: `/en/#${AboutUsId}`,
  heroCTATitle: 'Get to know us!',
  heroButtonText: 'contact us',
  heroButtonLink: `/en/#${ContactId}`,
  /* About Section */
  AboutUsId,
  AboutBannerAlt: "Kaizen's Office",
  AboutTitle: 'We are',
  AboutSubtitlePrimary: 'KAIZEN',
  AboutSubtitleSecondary: 'CAPITAL',
  AboutFirstParagraph: 'A financial services company specializing in advisory, consulting, management and return on capital.',
  AboutSecondParagraph: 'We provide the best experience in financial services, in order to be the first reliability reference for our allies.',
  AboutFirstColTitle: 'Continuous growth of financial services towards our partners.',
  AboutFirstColSubTitle: 'Quality Manegement',
  AboutSecondColTitle: 'Foster relationships of trust.',
  AboutSecondColSubtitle: 'We Leave A Mark',
  AboutThirdColTitle: 'Provide security and certainty in all financial operations.',
  AboutThirdColSubtitle: 'Goal Oriented',
  AboutFourthColTitle: 'Offer the best service experience for our clients.',
  /* Services Section */
  ServicesId,
  contactUs: 'Contact Us',
  ServicesTitle: 'Services',
  ServicesSubtitlePrimary: 'You Only Exist',
  ServicesSubtitleSecondary: 'if You Go Digital',
  DigitalTitle: 'Forex Consulting',
  DigitalInner: ['We advise clients in the acquisition of foreign currency and payments to international suppliers.'],
  ExpertsTitle: 'Return on capital <br /> (financial placement)',
  ExpertsInner: ['We offer return on idle capital plans with attractive interest rates.'],
  BrandingTitle: 'Capital Management',
  BrandingInner: ['We provide a broker service for payments to suppliers at an international level.'],
  PublicityTitle: 'Lifting of corporate debt.',
  PublicityInner: ['We work together with companies to obtain liquidity for their operations.'],
  /* Technologies Section */
  TechId,
  WebsitesTitle: 'Technologies / Websites',
  WebsitesSubtitlePrimary: 'We Create, Edit, Design',
  WebsitesSubtitleSecondary: '& Publish Your Content',
  WebsitesTitle1: 'SPA',
  WebsitesSubtitle1: 'Single Page Application',
  WebsitesTitle2: 'MPA',
  WebsitesSubtitle2: 'Multiple Page Application',
  WebsitesTitle3: 'CMS',
  WebsitesSubtitle3: 'Content Management System',
  WebsitesTitle4: 'E-Commerce',
  WebsitesSubtitle4: '',
  WebsitesTitle5: 'Mobile Apps',
  WebsitesSubtitle5: '',
  TechnologiesTitle: 'Our Technologies',
  /* Contact Us Section */
  ContactId,
  FormTitlePrimary: 'What Do You Need?',
  FormTitleSecondary: "We'll Take Care Of It",
  FormLine1: 'We have the best professionals',
  FormContactEmail: 'hello@kd.agency',
  FormLine2: 'for your financial growth.',
  FormNameField: 'Name',
  FormEmailField: 'Email',
  FormMessageField: 'Message',
  FormPhoneField: 'Phone',
  FormCTA: 'Send',
  FormCTADone: 'Thanks!',
  FormEmailErrorRequired: 'Enter your email!',
  FormEmailErrorWrong: 'Wrong Email!',
  FormNameErrorRequired: 'Enter your name!',
  FormMsgErrorRequired: 'Enter your message!',
  FormPhoneErrorRequired: 'Enter your phone number!',
  FormPhoneErrorWrong: 'Wrong telephone number.',
  /* Footer */
  BackToTop: 'Back to top',
  LinkToTop: '/en/#',
  rights: 'All rights reserved. Developed by',
  group: 'Kaizen Capital is part of the Kaizen Holdings Group.',
};
