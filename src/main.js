import { createApp } from 'vue';

import router from './router';
import store from './store/';
import App from './App.vue';
import BaseButton from './components/UI/BaseButton.vue';
import BaseContainer from './components/UI/BaseContainer.vue';
import BaseForm from './components/UI/BaseForm.vue';
import BaseCard from './components/UI/BaseCard.vue';
import BaseBadge from './components/UI/BaseBadge.vue';
import BaseDialog from './components/UI/BaseDialog.vue';

const app = createApp(App);

app.component('base-button', BaseButton);
app.component('base-container', BaseContainer);
app.component('base-form', BaseForm);
app.component('base-card', BaseCard);
app.component('base-badge', BaseBadge);
app.component('base-dialog', BaseDialog);

app.use(store);
app.use(router);

app.mount('#app');
