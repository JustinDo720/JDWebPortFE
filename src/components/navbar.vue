<template>
  <v-app-bar
    :elevation="15"
    color="grey-darken-3"
    density="default"
    v-resize="onResize"
    app
  >
    <v-btn size="medium">
      <router-link :to="{ name: 'home' }">
        <v-img
          :src="require('../assets/images/logo_2-removebg-preview.png')"
          class="logo_size"
        />
      </router-link>
    </v-btn>
    <!-- Navigation Section (maybe consider the middle this time -->
    <v-app-bar-title class="mx-auto" v-if="!resized">
      <router-link
          v-for="nav in navigation_buttons"
          :to="{name: nav.router_name}"
          tag="button"
          class="router_link_style pa-2 text-white text-h6"
          exact-active-class="text-cyan-lighten-2"
      >
        {{ nav.name }}
      </router-link>
    </v-app-bar-title>

    <!-- Mobile or Collapse Controller -->
    <v-spacer v-if="resized"></v-spacer>
    <div v-if="resized">
      <v-app-bar-nav-icon
          variant="text"
          v-if="resized"
          @click="drawers = !drawers"
      ></v-app-bar-nav-icon>
    </div>

  </v-app-bar>

  <!-- Mobile or Collapse View -->
  <v-navigation-drawer v-model="drawers" app dark right temporary>
    <v-list>
      <v-list-item
        v-for="(nav,index) in navigation_buttons"
        :key="index"
        :title="nav.name"
        :value="nav.name"
        @click="redirect_user(nav.router_name)"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>

</template>

<script>
import router from "@/router";

export default {
  name: "navBar",
  data() {
    return {
      title: "Home",
      resized: false,
      drawers: false,
      navigation_buttons: {
        home: {'name': 'Home', 'router_name': 'home'},
        project: {'name': 'Project', 'router_name': 'view_projects'},
        about_me: {'name': 'About Me', 'router_name': 'view_aboutme'},
        resume: {'name': 'Resume', 'router_name': 'view_resume'},
      },
    };
  },
  methods: {
    onResize: function () {
      this.resized = window.innerWidth <= 990;
      // we're going to make sure our store is also updated if resize does happen in navbar
      this.$store.commit('changeResize', {resized_screen: this.resized}) // sent a payload when we're committing a mutation
    },
    redirect_user: function (router_name) {
      if (router_name) {
        this.$router.push({ name: router_name });
      }
    },
  },
};
</script>

<style scoped>
.center_content {
  text-align: center;
}
.logo_size {
  width: 85px;
  height: 50px;
}

.router_link_style{
  text-decoration: none;
}

</style>
