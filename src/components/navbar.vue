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
    <v-spacer></v-spacer>
    <!-- Information Section -->
    <v-btn
      v-for="social in socials"
      :key="social"
      size="small"
      class="mr-5"
      :color="social.info_color"
      variant="tonal"
      v-if="!resized"
      @click="check_link(social.info_link)"
    >
      <v-icon :icon="social.info_icon" class="pr-1" />
      {{ social.info }}
    </v-btn>

    <!-- Mobile or Collapse Controller -->
    <v-app-bar-nav-icon
      variant="text"
      v-if="resized"
      @click="drawers = !drawers"
    ></v-app-bar-nav-icon>
  </v-app-bar>

  <!-- Mobile or Collapse View -->
  <v-navigation-drawer v-model="drawers" app dark right temporary>
    <v-list>
      <v-list-item
        v-for="social in socials"
        :key="social"
        :prepend-icon="social.info_icon"
        :title="social.info"
        :value="social.info"
        @click="check_link(social.info_link)"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "navBar",
  data() {
    return {
      title: "Home",
      socials: {
        github: {
          info: "Justindo720",
          info_link: "https://github.com/JustinDo720",
          info_icon: "mdi-github",
          info_color: "#eeeeee",
        },
        instagram: {
          info: "@darkowwl",
          info_link: "https://www.instagram.com/darkowwl/",
          info_icon: "mdi-instagram",
          info_color: "#e2306c",
        },
        email: {
          info: "justindo720@gmail.com",
          info_icon: "mdi-email",
          info_color: "#43a047",
        },
      },
      resized: false,
      drawers: false,
    };
  },
  methods: {
    onResize: function () {
      this.resized = window.innerWidth <= 990;
    },
    check_link: function (link) {
      if (link) {
        this.$router.push({ redirect: (window.location.href = link) });
      }
    },
  },
  computed: {},
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
</style>
