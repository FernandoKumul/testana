/* eslint-disable vue/no-reserved-component-names */
/* eslint-disable vue/multi-word-component-names */
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import "primevue/resources/themes/aura-light-green/theme.css";
import Button from 'primevue/button';

const app = createApp(App)
app.use(PrimeVue);
app.use(router)
app.component('Button', Button)

app.mount('#app')
