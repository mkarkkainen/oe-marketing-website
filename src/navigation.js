import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: '/',
    },
    {
      text: 'Empresa',
      href: '/empresa',
    },
    {
      text: 'Servicios',
      href: '/servicios',
    },
    {
      text: 'Contacto',
      href: '/contacto',
    },
  ],
  actions: [{ text: 'Solicitar Quota', variant: 'btn-primary', href: '/contacto' }],
};

export const footerData = {
  links: [
    {
      title: 'Sitio',
      links: [
        { text: 'Inicio', href: '/' },
        { text: 'Empresa', href: '/empresa' },
        { text: 'Servicios', href: '/servicios' },
        { text: 'Contacto', href: '/contacto' },
      ],
    },
    {
      title: 'Soporte',
      links: [
        { text: 'Condiciones', href: '/terminos' },
        { text: 'Privacidad', href: '/privacidad' },
        { text: 'Preguntas frecuentes', href: '/preguntas' },
      ],
    },
  ],

  socialLinks: [
    { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: 'https://wa.me/message/YFDBVC3TYC35I1' },
    {
      ariaLabel: 'LinkedIn',
      icon: 'tabler:brand-linkedin',
      href: 'https://www.linkedin.com/in/ocean-express-cr-b9880a2a4/',
    },
    {
      ariaLabel: 'Facebook',
      icon: 'tabler:brand-facebook',
      href: 'https://www.facebook.com/profile.php?id=61554657088233',
    },
  ],
};
