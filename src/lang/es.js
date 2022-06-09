const AboutUsId = 'quienes-somos';
const ServicesId = 'servicios';
const TechId = 'tecnologias';
// const ProjectsId = 'proyectos';
const ContactId = 'contacto';

module.exports = {
  /* SEO */
  meta: {
    title: "Inicio",
    description:
      "Te llevamos al mundo digital. Desarrolla y potencia tu página web, encuentra soluciones digitales para tu negocio, haz crecer tu marca, marca tendencia con KDA.",
  },
  /* Navbar */
  linkTitle: "Ir a la sección de",
  links: [
    { name: "Inicio", href: "/es/#" },
    { name: "Quiénes somos", href: `/es/#${AboutUsId}` },
    { name: "Servicios", href: `/es/#${ServicesId}` },
    // { name: 'tecnologías', href: `/es/#${TechId}` },
    // { name: 'proyectos', href: `/es/#${ProjectsId}` },
    { name: "Contáctanos", href: `/es/#${ContactId}` },
  ],

  /* Navbar Language Dropdown */
  languageDropdown: {
    language: "Español",
    otherLanguages: [{ name: "English", href: "/en/" }],
  },

  /* Hero Section */
  heroImgAlt: "Oficinas Kaizen",
  heroSubtitle: "Impulsa",
  heroSubtitle2: "tu",
  heroTitle: "Crecimiento Financiero",
  heroCTAText: "Saber Más",
  heroCTALink: `/es/#${AboutUsId}`,
  heroCTATitle: "Saber mas sobre nosotros",
  heroButtonText: "contáctanos",
  heroButtonLink: `/es/#${ContactId}`,
  /* About Section */
  AboutUsId,
  AboutBannerAlt: "Kaizen's Office",
  AboutTitle: "Somos",
  AboutSubtitlePrimary: "KAIZEN",
  AboutSubtitleSecondary: "CAPITAL",
  AboutFirstParagraph:
    "Una empresa de servicios financieros especializada en asesoría, consultoría, gestión y rendimiento de capital.",
  AboutSecondParagraph:
    "Proveemos la mejor experiencia en servicios financieros, con la finalidad de ser la primera referencia de confiabilidad para nuestros aliados.",
  mision: "Ser la primera referencia de confiabilidad para nuestros aliados.",
  misionTitle: "Misión:",
  vision: "Proveer la mejor experiencia en servicios financieros",
  visionTitle: "Visión:",
  whyWe: "¿Por qué",
  why: "Proveemos la mejor experiencia en servicios financieros, con la finalidad de ser la primera referencia de confiabilidad para nuestros aliados",
  target: "Target",
  targetContent:
    "Empresas, instituciones y personas de alto perfil transaccional (Multinacionales, empresas de alto volumen de facturación, individuos de alto patrimonio, etc).",
  AboutFirstColTitle:
    "Crecimiento continuo de los servicios financieros hacia nuestros aliados.",
  AboutFirstColSubTitle: "Quality Manegement",
  AboutSecondColTitle: "Fomentar relaciones de confianza.",
  AboutSecondColSubtitle: "We Leave A Mark",
  AboutThirdColTitle:
    "Brindar seguridad y certidumbre en todas operaciones financieras.",
  AboutThirdColSubtitle: "Goal Oriented",
  AboutFourthColTitle:
    "Ofrecer la mejor experiencia de atención para nuestros clientes.",
  /* Services Section */
  ServicesId,
  ServicesTitle: "Servicios",
  ServicesSubtitlePrimary: "You Only Exist",
  ServicesSubtitleSecondary: "if You Go Digital",
  DigitalTitle: "Servicio de administración de fondos (centro de costos)",
  DigitalInner: [""],
  ExpertsTitle: "Consultoría & Asesoría de inversiones financieras",
  ExpertsInner: [
    "",
  ],
  BrandingTitle: "Consultoría de contratación de créditos y financiamientos",
  BrandingInner: [
    "",
  ],
  PublicityTitle: "Consultoría de pago a proveedores",
  PublicityInner: [
    "",
  ],
  /* Technologies Section */
  TechId,
  WebsitesTitle: "Tecnologías / Websites",
  WebsitesSubtitlePrimary: "Creamos, Editamos, Ordenamos, Diseñamos",
  WebsitesSubtitleSecondary: "Y Publicamos Tu Contenido.",
  WebsitesTitle1: "SPA",
  WebsitesSubtitle1: "Single Page Application",
  WebsitesTitle2: "MPA",
  WebsitesSubtitle2: "Multiple Page Application",
  WebsitesTitle3: "CMS",
  WebsitesSubtitle3: "Content Management System",
  WebsitesTitle4: "E-Commerce",
  WebsitesSubtitle4: "",
  WebsitesTitle5: "Mobile Apps",
  WebsitesSubtitle5: "",
  TechnologiesTitle: "Nuestras tecnologías",
  /* Contact Us Section */
  ContactId,
  contactUs: "Contáctanos",
  FormTitlePrimary: "¿Qué Necesitas?",
  FormTitleSecondary: "Nosotros Nos Encargamos",
  FormLine1: "Contamos con los mejores profesionales",
  FormContactEmail: "Hello@kd.agency",
  FormLine2: "para tu crecimiento financiero.",
  FormNameField: "Nombre",
  FormEmailField: "Correo Electrónico",
  FormMessageField: "Mensaje",
  FormPhoneField: "Teléfono",
  FormCTA: "Enviar",
  FormCTADone: "Gracias!",
  FormEmailErrorRequired: "Ingresa tu email!",
  FormEmailErrorWrong: "Email incorrecto!",
  FormNameErrorRequired: "Ingresa tu nombre!",
  FormMsgErrorRequired: "Ingresa tu mensaje!",
  FormPhoneErrorRequired: "Ingresa tu número telefónico!",
  FormPhoneErrorWrong: "Número invalido.",
  /* Footer */
  BackToTop: "Volver al inicio",
  LinkToTop: "/es/#",
  rights: "Todos los derechos reservados | Desarrollo por",
  group: "Kaizen Capital es parte del grupo Kaizen Holdings",
};
