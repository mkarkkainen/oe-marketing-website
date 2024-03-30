import AOS from 'aos';

export function aosInit() {
  AOS.init({ duration: 400, offset: 100 });
}
