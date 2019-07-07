import Vue from 'vue'
import Vuetify, {
  VApp, // required
  VToolbar
} from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'mdi',
  components: {
    VApp,
    VToolbar
  }
})
