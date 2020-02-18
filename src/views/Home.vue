<template>
  <v-container>
    <!-- Begin Nav Drawer -->
    <Navigator></Navigator>
    <!-- End Nav Drawer -->

    <!-- Begin Main Content -->
    <v-content>
      <CombatTracker v-if="combatTrackerActive"></CombatTracker>
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
import CombatTracker from '@/components/CombatTracker.vue'

export default {
  name: 'home',
  components: {
    Navigator,
    CombatTracker
  },
  computed: {
    combatTrackerActive () {
      return this.$store.state.navigatorChosenId === 0
    }
  }
}
</script>
