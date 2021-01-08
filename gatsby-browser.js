import smoothscroll from 'smoothscroll-polyfill';

// styles
import './src/styles/global.scss';

export const onClientEntry = () => {
  if (typeof window.IntersectionObserver === 'undefined') {
    import('intersection-observer');
  }
};

// polyfills
const isServer = typeof window === 'undefined';
if (!isServer) {
  smoothscroll.polyfill();
}
