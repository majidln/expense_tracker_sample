import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../assets/locales/en';
import fa from '../assets/locales/fa';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      fa: {
        translation: fa
      },
      en: {
        translation: en
      },
    },
    lng: 'en',
  });

export default i18n;
