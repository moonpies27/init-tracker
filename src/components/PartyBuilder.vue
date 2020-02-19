<template>
  <v-container fluid>
    <v-row
      no-gutters
      justify="center"
    >
      <v-col cols="6">
        <CurrentParty></CurrentParty>
      </v-col>
      <v-col cols="6">
        <AvailableCharacters></AvailableCharacters>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CurrentParty from '@/components/CurrentParty.vue'
import AvailableCharacters from '@/components/AvailableCharacters.vue'

export default {
  name: 'partyBuilder',
  components: {
    CurrentParty,
    AvailableCharacters
  },
  data: () => ({

  })
}
</script>

<style>

</style>
