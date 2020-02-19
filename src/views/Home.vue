<template>
  <v-container>
    <!-- Begin Nav Drawer -->
    <Navigator></Navigator>
    <!-- End Nav Drawer -->

    <!-- Begin Main Content -->
    <v-content>
      <CombatTracker v-if="showCombatTracker"></CombatTracker>
      <AppSettings v-if="showSettingsMenu"></AppSettings>
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
import AppSettings from '@/components/AppSettings.vue'

export default {
  name: 'home',
  components: {
    Navigator,
    CombatTracker,
    AppSettings
  },
  computed: {
    showCombatTracker () {
      return this.$store.state.navigatorChosenId === 0
    },
    showSettingsMenu () {
      return this.$store.state.navigatorChosenId === 2
    }
  }
}
</script>
