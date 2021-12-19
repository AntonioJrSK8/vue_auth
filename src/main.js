/* Arquivo main inicialização da aplicação  
 * usados para controle da SPA e rotas
 * Autor: Antonio Junior Data: 10/12/2021 13:15
 */

import Vue from 'vue';
import App from './components/App.vue';
import router from './router';

// import dos style Tailwind Css
import './style.css';

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
