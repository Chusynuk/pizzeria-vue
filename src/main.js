import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import Button from './components/button.vue'
import Ingredients from './components/ingredients.vue'
import Base from './components/base.vue'

Vue.component('my-button', Button)
Vue.component('my-ingredients', Ingredients)
Vue.component('my-base', Base)

Vue.use(Vuetify)
Vue.use(Button)
Vue.use(Ingredients)
Vue.use(Base)

new Vue({
  el: '#app',
  render: h => h(App)
})
