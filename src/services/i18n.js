import I18n from 'react-native-i18n';
import en from '../assets/locales/en';
import fa from '../assets/locales/fa';

I18n.fallbacks = true;

I18n.translations = {
  en,
  fa
};

export default I18n;
