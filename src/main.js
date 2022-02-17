import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import './assets/styles/main.css';

const app = createApp(App);

const requireComponent = require.context(
  '@/components/',
  false,
  /[A-Z]\w+\.vue$/,
);

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);
  app.component(
    fileName
      .split('/')
      .pop()
      .replace(/\.\w+$/, ''),
    componentConfig.default || componentConfig,
  );
});

const requireIcon = require.context('../public/icons', false, /[A-Z]\w+\.vue$/);

requireIcon.keys().forEach((fileName) => {
  const componentConfig = requireIcon(fileName);
  app.component(
    fileName
      .split('/')
      .pop()
      .replace(/\.\w+$/, ''),
    componentConfig.default || componentConfig,
  );
});

app.use(store).mount('#app');
