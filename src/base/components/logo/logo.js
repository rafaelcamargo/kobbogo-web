import './logo.styl';
import logotypeImageUrl from '@src/base/images/logo.svg';
import template from './logo.html';

export const logo = {
  name: 'logo',
  data(){
    return { logotypeImageUrl }
  },
  template
};
