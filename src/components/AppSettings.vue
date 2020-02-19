<template>
  <v-container fluid>
    <h1>Application Settings</h1>
    <v-switch v-model="appThemeChoice" label="Enable Dark Mode"></v-switch>
  </v-container>
</template>

<script>
export default {
  computed: {
    appThemeChoice: {
      get () {
        let savedTheme = JSON.parse(localStorage.getItem('darkTheme'))
        return savedTheme === null ? this.$vuetify.theme.isDark : savedTheme
      },
      set (val) {
        localStorage.setItem('darkTheme', val)
        this.$vuetify.theme.isDark = val
      }
    }
  }
}
</script>

<style>

</style>
