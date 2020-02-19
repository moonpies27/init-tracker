<template>
  <v-container>
    <h2>Current Party</h2>
    <v-list-item
      two-line
      v-for="(p, index) in partyList"
      :key="index"
    >
      <v-list-item-content>
        <v-list-item-title>{{ p.name }}</v-list-item-title>
        <v-list-item-subtitle>{{ raceClass(p.race, p.class) }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-container>
</template>

<script>
export default {
  name: 'currentParty',
  computed: {
    partyList () {
      let currentList = this.$store.state.characters.filter(c => {
        if (this.$store.state.party.includes(c.id)) {
          return c
        }
      })
      console.error(currentList)
      return currentList
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
