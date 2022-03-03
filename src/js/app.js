// Import Vue
import { createApp } from 'vue';

import { createI18n } from 'vue-i18n';

// Import Framework7
import Framework7 from 'framework7/lite-bundle';

// Import Framework7-Vue Plugin
import Framework7Vue, { registerComponents } from 'framework7-vue/bundle';

// Import Framework7 Styles
import 'framework7/framework7-bundle.css';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.css';

// Import App Component
import App from '../components/app.vue';

// Init Framework7-Vue Plugin
Framework7.use(Framework7Vue);

export const i18n = createI18n({
  locale: 'ja',
  fallbackLocale: 'ja',
  messages: {
    ja: {
      title: '日本手話',
      あ: 'あ',
      い: 'い',
      う: 'う',
      え: 'え',
      お: 'お',
      何も: 'サインは検出されませんでした。',
      img: 'static/svg/ja.svg',
      ja: '日本語',
      es: 'スペイン語',
      en: '英語'
    },
    es: {
      title: 'Lengua de signos japonesa',
      あ: 'A',
      い: 'I',
      う: 'U',
      え: 'E',
      お: 'O',
      何も: 'No se detecta ningún signo.',
      img: 'static/svg/es.svg',
      ja: 'Japonés',
      es: 'Español',
      en: 'Inglés'
    },
    en: {
      title: 'Japanese Sign Language',
      あ: 'A',
      い: 'I',
      う: 'U',
      え: 'E',
      お: 'O',
      何も: 'No sign detected.',
      img: 'static/svg/en.svg',
      ja: 'Japanese',
      es: 'Spanish',
      en: 'English'
    },
  },
  // If you need to specify other options, you can set other options
  // ...
});

// Init App with i!8n
const app = createApp(App).use(i18n);

// Register Framework7 Vue Components
registerComponents(app);

// Mount the App
app.mount('#app');
