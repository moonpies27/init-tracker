<template>
  <v-container>
    <v-navigation-drawer
        v-model="drawer"
        app
        clipped
      >
        <v-list dense>
          <v-list-item
            link
            v-for="(menuOpt, index) in menuOptions"
            :key="index"
            @click="setNavigatorChosenId(menuOpt.id)"
          >
            <v-list-item-action>
              <v-icon>{{ menuOpt.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ menuOpt.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar
        app
        clipped-left
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title>5e Combat Tracker</v-toolbar-title>
      </v-app-bar>
  </v-container>
</template>

<script>
export default {
  name: 'Navigator',
  data: () => ({
    drawer: null
  }),
  computed: {
    menuOptions () {
      return this.$store.state.menuOptions
    }
  },
  methods: {
    setNavigatorChosenId (id) {
      this.$store.commit('setNavigatorChosenId', id)
    }
  }
}
</script>

<style>

</style>
