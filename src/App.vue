<template>
  <v-app>
    <Navbar></Navbar>
    <Sidebar></Sidebar>
    <AppMain></AppMain>
    <!-- <Footer></Footer> -->
  </v-app>
</template>

<script>
import Navbar from '@/layout/Navbar.vue';
import AppMain from '@/layout/AppMain.vue';
import Sidebar from '@/layout/Sidebar.vue';
import Footer from '@/layout/Footer.vue';
export default {
  name: "App",

  components: {
    Navbar,
    AppMain,
    Sidebar,
    Footer
  },

  data: () => ({
  })
};
</script>

<style>
</style>
