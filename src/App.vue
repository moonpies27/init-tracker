<template>
  <v-app>
    <!-- Begin Nav Drawer -->
    <Navigator></Navigator>
    <!-- End Nav Drawer -->

    <!-- Begin Main Content -->
    <v-content>
    </v-content>
    <!-- End Main Content -->

    <!-- Begin Footer -->
    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
    <!-- End Footer -->
  </v-app>
</template>

<script>
import Navigator from '@/components/Navigator.vue'
export default {
  components: {
    Navigator
  },
  data: () => ({}),
  created () {
    this.$vuetify.theme.dark = true
  }
}
</script>
