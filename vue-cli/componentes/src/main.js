import App from './App.vue'
import Contador from './Contador.vue'

VueElement.config.productionTip = false
VueElement.component('app-contador', Contador)

new Vue({
    render:h => h(App),
}).$mount('#app')
