<template>
  <v-container>
    <v-card class="mb-2" v-for="c in characters" :key="c.id">
      <v-card-title>{{ c.name }}</v-card-title>
      <v-card-subtitle>{{ raceClass(c.race, c.class) }}</v-card-subtitle>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'combatTrack',
  data: () => ({
    characters: [
      { name: 'Bruenor', class: 'Fighter', race: 'Dwarf', id: 0 },
      { name: 'Celeste', class: 'Cleric', race: 'Human', id: 1 },
      { name: 'Jarlaxle', class: 'Rogue', race: 'Drow', id: 2 }
    ]
  }),
  methods: {
    raceClass: (r, c) => {
      return `${r} ${c}`
    }
  }
}
</script>

<style>

</style>
