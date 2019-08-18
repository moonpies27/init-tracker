<template>
  <div>
    <v-toolbar dark color="purple">
      <v-toolbar-side-icon></v-toolbar-side-icon>

      <v-toolbar-title>
        D&D 5e Combat Tracker
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
    </v-toolbar>
    <main class="main">
      <CombatTrack></CombatTrack>
    </main>
    <v-footer class="pa-3" absolute="true">
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </div>
</template>

<script>
import CombatTrack from '@/components/CombatTrack.vue'
export default {
  components: {
    CombatTrack
  }
}
</script>

<style>
main {
  text-align: center;
  display: block;
}
</style>
