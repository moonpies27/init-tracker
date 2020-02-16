<template>
  <v-app>
    <!-- Begin Nav Drawer -->
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-format-list-text</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Initiative Track</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- End Nav Drawer -->

    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>5e Combat Tracker</v-toolbar-title>
    </v-app-bar>

    <!-- Begin Main Content -->
    <v-content>
    </v-content>
    <!-- End Main Content -->

    <!-- Begin Footer -->
    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
    <!-- End Footer -->
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null
  }),
  created () {
    this.$vuetify.theme.dark = true
  }
}
</script>
