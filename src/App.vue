<template>
  <v-app>
    <Home></Home>
  </v-app>
</template>

<script>
import Home from '@/views/Home.vue'
export default {
  components: {
    Home
  },
  data: () => ({}),
  created () {
    this.$vuetify.theme.dark = true
  }
}
</script>
