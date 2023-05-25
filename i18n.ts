// IMPORTS
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { useRouter } from 'next/router';
import fr from '@/locales/fr.json';
import en from '@/locales/en.json';
import ar from '@/locales/ar.json';
import es from '@/locales/es.json';
import de from '@/locales/de.json';
import id from '@/locales/id.json';
import it from '@/locales/it.json';
import pr from '@/locales/pr.json';
import ru from '@/locales/ru.json';
import tr from '@/locales/tr.json';
import ph from '@/locales/ph.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr },
    ar: { translation: ar },
    es: { translation: es },
    de: { translation: de },
    id: { translation: id },
    it: { translation: it },
    pr: { translation: pr },
    ru: { translation: ru },
    tr: { translation: tr },
    ph: { translation: ph },
  },
  lng: 'en',
});

function I18n({ children }: { children: any }) {
  // VARIABLES
  const router = useRouter();
  const locale = router.locale || 'en';
  i18n.changeLanguage(locale);

  // RETURNS
  return children;
}

export default I18n;
