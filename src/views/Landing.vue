<template>
  <div>
    <v-toolbar dark color="purple">
      <v-toolbar-side-icon></v-toolbar-side-icon>

      <v-toolbar-title>
        D&D Initiative Tracker
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
    </v-toolbar>
    <main class="main">
      This is a test message.
    </main>
    <v-footer class="pa-3">
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </div>
</template>

<script>
export default {}
</script>

<style>
main {
  text-align: center;
  height: 500px;
  display: block;
}
</style>
