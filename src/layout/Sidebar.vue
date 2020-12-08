<template>
  <v-navigation-drawer v-model="isShow" :miniVariant="isFold" app clipped>
    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    const isShow = this.$store.getters.sideBarState.isShow;
    const isFold = this.$store.getters.sideBarState.isFold;
    return {
      isShow, // 是否显示
      isFold, // 是否收起
      items: [
        { icon: 'mdi-briefcase-variant', title: '111' },
        { icon: 'mdi-domain', title: '1111' },
        { icon: 'mdi-domain', title: '11111' },
        { icon: 'mdi-domain', title: '111111' },
      ]
    }
  },

}
</script>

<style>
</style>