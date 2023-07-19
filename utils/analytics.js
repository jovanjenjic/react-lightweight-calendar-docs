import ReactGA from 'react-ga';
import { REACT_APP_GOOGLE_ANALYTICS } from '../env';

export const initGA = () => {
  ReactGA.initialize(REACT_APP_GOOGLE_ANALYTICS);
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
