<template>
  <v-app>
    <v-main>
      <navbar></navbar>
      <router-view/>
    </v-main>
    <my-footer></my-footer>
  </v-app>
</template>

<script>
import navbar from "@/components/navbar";
import footer from "@/components/footer";

export default {
  name: "App",
  components: {
    navbar,
    'my-footer':footer
  },
  data: () => ({
    // Justin H. Do - Portfolio should be the title of our tab
  }),
};
</script>
