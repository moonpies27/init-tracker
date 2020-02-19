<template>
  <v-container>
    <!-- Begin Nav Drawer -->
    <Navigator></Navigator>
    <!-- End Nav Drawer -->

    <!-- Begin Main Content -->
    <v-content>
      <CombatTracker v-if="showCombatTracker"></CombatTracker>
      <PartyBuilder v-if="showPartyBuilder"></PartyBuilder>
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
import PartyBuilder from '@/components/PartyBuilder.vue'

export default {
  name: 'home',
  components: {
    Navigator,
    CombatTracker,
    AppSettings,
    PartyBuilder
  },
  computed: {
    showCombatTracker () {
      return this.$store.state.navigatorChosenId === 0
    },
    showPartyBuilder () {
      return this.$store.state.navigatorChosenId === 1
    },
    showSettingsMenu () {
      return this.$store.state.navigatorChosenId === 2
    }
  }
}
</script>
