/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: 'es',
  locales: ['es', 'en'],
  routes: {
    en: {
      empresa: 'about',
      contacto: 'contact',
      servicios: 'services',
      preguntas: 'faq',
      terminos: 'terms',
      privacidad: 'privacy',
      exito: 'success',
    },
  },
};
