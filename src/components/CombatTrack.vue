<template>
  <v-container>
    <v-card class="mb-2" v-for="c in characters" :key="c.id">
      <v-card-title>{{ c.name }}</v-card-title>
      <v-card-subtitle>{{ raceClass(c.race, c.class) }}</v-card-subtitle>
    </v-card>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'combatTrack',
  data: () => ({}),
  computed: {
    ...mapState(['characters'])
  },
  methods: {
    raceClass: (r, c) => {
      return `${r} ${c}`
    }
  }
}
</script>

<style>

</style>
