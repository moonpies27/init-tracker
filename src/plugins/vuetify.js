import Vue from 'vue'
import Vuetify, {
  VApp, // required
  VToolbar,
  VFooter
} from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import '@mdi/font/css/materialdesignicons.min.css'

Vue.use(Vuetify, {
  iconfont: 'mdi',
  components: {
    VApp,
    VToolbar,
    VFooter
  }
})
