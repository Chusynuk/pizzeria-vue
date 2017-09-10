import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import OrderButton from './components/OrderButton.vue'
import Ingredients from './components/Ingredients.vue'
import BasePizza from './components/BasePizza.vue'

Vue.component('my-orderButton', OrderButton)
Vue.component('my-ingredients', Ingredients)
Vue.component('my-basePizza', BasePizza)

Vue.use(Vuetify)
Vue.use(OrderButton)
Vue.use(Ingredients)
Vue.use(BasePizza)

new Vue({
  el: '#app',
  render: h => h(App),
  components: {
    OrderButton,
    Ingredients,
    BasePizza
  }
})
