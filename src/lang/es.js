const AboutUsId = 'quienes-somos';
const ServicesId = 'servicios';
const TechId = 'tecnologias';
// const ProjectsId = 'proyectos';
const ContactId = 'contacto';

module.exports = {
  /* SEO */
  meta: {
    title: 'Inicio',
    description:
      'Te llevamos al mundo digital. Desarrolla y potencia tu página web, encuentra soluciones digitales para tu negocio, haz crecer tu marca, marca tendencia con KDA.',
  },
  /* Navbar */
  linkTitle: 'Ir a la sección de',
  links: [
    { name: 'inicio', href: '/es/#' },
    { name: 'quiénes somos', href: `/es/#${AboutUsId}` },
    { name: 'servicios', href: `/es/#${ServicesId}` },
    // { name: 'tecnologías', href: `/es/#${TechId}` },
    // { name: 'proyectos', href: `/es/#${ProjectsId}` },
    { name: 'contáctanos', href: `/es/#${ContactId}` },
  ],

  /* Navbar Language Dropdown */
  languageDropdown: {
    language: 'español',
    otherLanguages: [{ name: 'english', href: '/en/' }],
  },

  /* Hero Section */
  heroImgAlt: 'Oficinas Kaizen',
  heroSubtitle: 'Impulsa tu',
  heroTitle: 'Crecimiento Financiero',
  heroCTAText: 'Saber Más',
  heroCTALink: `/es/#${AboutUsId}`,
  heroCTATitle: 'Saber mas sobre nosotros',
  heroButtonText: 'contáctanos',
  heroButtonLink: `/es/#${ContactId}`,
  /* About Section */
  AboutUsId,
  AboutBannerAlt: 'Oficinas Kaizen',
  AboutTitle: 'Somos',
  AboutSubtitlePrimary: 'KAIZEN',
  AboutSubtitleSecondary: 'CAPITAL',
  AboutFirstParagraph: 'Una empresa de servicios financieros especializada en asesoría, consultoría, gestión y rendimiento de capital.',
  AboutSecondParagraph: 'Proveemos la mejor experiencia en servicios financieros, con la finalidad de ser la primera referencia de confiabilidad para nuestros aliados',
  AboutFirstColTitle: 'Mejora Continua',
  AboutFirstColSubTitle: 'Gestión De Calidad',
  AboutSecondColTitle: 'Marcamos Tendencia',
  AboutSecondColSubtitle: 'Dejamos Una Huella',
  AboutThirdColTitle: 'Asesores',
  AboutThirdColSubtitle: 'Orientado A Metas',
  /* Services Section */
  ServicesId,
  ServicesTitle: 'Servicios',
  ServicesSubtitlePrimary: 'Si No Estás, No Existes...',
  ServicesSubtitleSecondary: 'Pero Tranquilo, Para Eso Estamos.',
  DigitalTitle: 'Mercadeo',
  DigitalInner: ['- Desarrollo de Marca', '- Plan de Mercadeo'],
  BrandingTitle: 'Innovación',
  BrandingInner: ['- Hacemos de tus Ideas Proyectos Tangibles'],
  ExpertsTitle: 'Programación Y Desarrollo',
  ExpertsInner: ['- Páginas Web:', '&nbsp; &nbsp; Estáticas</span>', '&nbsp; &nbsp; Ecommerce', '&nbsp; &nbsp; Marketplace', '- Aplicaciones Web', '- Mobile Apps', '- Especializados', '- Programadores Aliados'],
  PublicityTitle: 'Publicidad',
  PublicityInner: ['- Plan de Comunicaciones', '- Publicidad: Digital, ATL y BTL', '- Gestión de RRSS', '- Producción de Eventos', '- Conceptualizaciones Creativas', '- Producción Ejecutiva de Proyectos', '- Desarrollo de Marca', '- Relaciones Públicas'],
  /* Technologies Section */
  TechId,
  WebsitesTitle: 'Tecnologías / Websites',
  WebsitesSubtitlePrimary: 'Creamos, Editamos, Ordenamos, Diseñamos',
  WebsitesSubtitleSecondary: 'Y Publicamos Tu Contenido.',
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
  TechnologiesTitle: 'Nuestras tecnologías',
  /* Contact Us Section */
  ContactId,
  FormTitlePrimary: '¿Qué Necesitas?',
  FormTitleSecondary: 'Nosotros Nos Encargamos',
  FormLine1: 'Ponte en contacto con nosotros: ',
  FormContactEmail: 'Hello@kd.agency',
  FormLine2: 'o escríbenos por aquí',
  FormNameField: 'Nombre',
  FormEmailField: 'Correo',
  FormMessageField: 'Mensaje',
  FormPhoneField: 'Número Telefónico',
  FormCTA: 'Enviar',
  FormCTADone: 'Gracias!',
  FormEmailErrorRequired: 'Ingresa tu email!',
  FormEmailErrorWrong: 'Email incorrecto!',
  FormNameErrorRequired: 'Ingresa tu nombre!',
  FormMsgErrorRequired: 'Ingresa tu mensaje!',
  FormPhoneErrorRequired: 'Ingresa tu número telefónico!',
  /* Footer */
  BackToTop: 'Volver al inicio',
  LinkToTop: '/es/#',
};
