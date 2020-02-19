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
      return this.$store.state.characters
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
