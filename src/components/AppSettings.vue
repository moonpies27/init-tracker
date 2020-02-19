<template>
  <v-container>
    <h1>Application Settings</h1>
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title>App Theme</v-list-item-title>
        <v-list-item-subtitle>Choose between light mode and dark mode. Refresh page to take effect.</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-action>
        <v-container fluid>
          <v-switch v-model="appThemeChoice" label="Enable Dark Mode"></v-switch>
        </v-container>
      </v-list-item-action>
    </v-list-item>
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
