<template>
  <v-container>
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
  </v-container>
</template>

<script>
// @ is an alias to /src
import Navigator from '@/components/Navigator.vue'

export default {
  name: 'home',
  components: {
    Navigator
  }
}
</script>
