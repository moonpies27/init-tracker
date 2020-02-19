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
    // Apply app theme
    let savedTheme = JSON.parse(localStorage.getItem('darkTheme'))
    if (savedTheme === null) {
      savedTheme = false
    }
    this.$vuetify.theme.isDark = savedTheme
  }
}
</script>
