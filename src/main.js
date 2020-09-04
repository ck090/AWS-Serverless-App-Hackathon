import Vue from 'vue'
import './plugins/axios'
import App from './views/Home.vue'
import './registerServiceWorker'
import router from './router'

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#home')