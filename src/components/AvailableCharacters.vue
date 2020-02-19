<template>
  <v-container>
    <h2>Available Characters</h2>
    <v-list-item
      two-line
      v-for="(c, index) in characterList"
      :key="index"
    >
      <v-list-item-content>
        <v-list-item-title>{{ c.name }}</v-list-item-title>
        <v-list-item-subtitle>{{ raceClass(c.race, c.class) }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-container>
</template>

<script>
export default {
  name: 'availableCharacters',
  computed: {
    characterList () {
      let filteredList = this.$store.state.characters.filter(c => {
        if (!this.$store.state.party.includes(c.id)) {
          return c
        }
      })
      return filteredList
    }
  },
  methods: {
    raceClass (r, c) {
      return `${r} ${c}`
    }
  }

}
</script>

<style>

</style>
