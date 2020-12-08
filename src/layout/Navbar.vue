<template>
  <v-app-bar
    app
    dense
    disable-resize-watcher
    clipped-left
    color="gray"
    elevate-on-scroll
  >
    <v-app-bar-nav-icon @click="changeSidebar()"></v-app-bar-nav-icon>
    <v-toolbar-title>{{ $store.state.settings.title }}</v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {

    }
  },
  methods: {
    changeSidebar() {
      // this.$store.getters.sideBarState.isFold = false
      // this.$EventBus.$emit("changeFold",);
    }
  }
}
</script>

<style>
</style>