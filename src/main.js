import { createApp } from 'vue';

import router from './router';
import store from './store/';
import App from './App.vue';
import BaseButton from './components/UI/BaseButton.vue';
import BaseContainer from './components/UI/BaseContainer.vue';

const app = createApp(App);

app.component('base-button', BaseButton);
app.component('base-container', BaseContainer);

app.use(store);
app.use(router);

app.mount('#app');
