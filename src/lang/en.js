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
    { name: 'home', href: '/en/#' },
    { name: 'quiénes somos', href: `/en/#${AboutUsId}` },
    { name: 'services', href: `/en/#${ServicesId}` },
    // { name: 'technologies', href: `/en/#${TechId}` },
    // { name: 'projects', href: `/en/#${ProjectsId}` },
    { name: 'contact us', href: `/en/#${ContactId}` },
  ],

  /* Navbar Language Dropdown */
  languageDropdown: {
    language: 'english',
    otherLanguages: [{ name: 'español', href: '/es/' }],
  },

  /* Hero Section */
  heroImgAlt: "Kaizen's Office",
  heroSubtitle: 'Impulsa tu',
  heroTitle: 'Crecimiento Financiero',
  heroCTAText: 'Learn More About Us',
  heroCTALink: `/en/#${AboutUsId}`,
  heroCTATitle: 'Get to know us!',
  heroButtonText: 'contact us',
  heroButtonLink: `/en/#${ContactId}`,
  /* About Section */
  AboutUsId,
  AboutBannerAlt: "Kaizen's Office",
  AboutTitle: 'Somos',
  AboutSubtitlePrimary: 'KAIZEN',
  AboutSubtitleSecondary: 'CAPITAL',
  AboutFirstParagraph: 'Una empresa de servicios financieros especializada en asesoría, consultoría, gestión y rendimiento de capital.',
  AboutSecondParagraph: 'Proveemos la mejor experiencia en servicios financieros, con la finalidad de ser la primera referencia de confiabilidad para nuestros aliados',
  AboutFirstColTitle: 'Crecimiento continuo de los servicios financieros hacia nuestros aliados.',
  AboutFirstColSubTitle: 'Quality Manegement',
  AboutSecondColTitle: 'Fomentar relaciones de confianza.',
  AboutSecondColSubtitle: 'We Leave A Mark',
  AboutThirdColTitle: 'Brindar seguridad y certidumbre en todas operaciones financieras',
  AboutThirdColSubtitle: 'Goal Oriented',
  AboutFourthColTitle: 'Ofrecer la mejor experiencia de atención para nuestros clientes',
  /* Services Section */
  ServicesId,
  ServicesTitle: 'Servicios',
  ServicesSubtitlePrimary: 'You Only Exist',
  ServicesSubtitleSecondary: 'if You Go Digital',
  DigitalTitle: 'Consultoria en FOREX',
  DigitalInner: ['Asesoramos a clientes en la adquisición de divisas y pagos a proveedores internacionales.', 'Rendimiento de capital (Colocaciones financieras)'],
  ExpertsTitle: 'Rendimiento de capital<br />(Colocaciones financieras)',
  ExpertsInner: ['Ofrecemos planes de rendimiento de capital ocioso con tasas de interés atractivas.'],
  BrandingTitle: 'Gestión de capital',
  BrandingInner: ['Prestamos servicio de bróker para pagos a proveedores a nivel internacional.'],
  PublicityTitle: 'Levantamientos de<br />deuda corporativa',
  PublicityInner: ['Trabajamos junto a empresas para conseguir liquidez para sus operaciones.'],
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
  FormPhoneErrorWrong: 'Enter a valid number (example: +011234567).',
  /* Footer */
  BackToTop: 'Back to top',
  LinkToTop: '/en/#',
};
