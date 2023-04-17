<template>
  <v-app>
    <v-main>
      <navbar class="mb-10"></navbar>
        <router-view />
      <my-footer></my-footer>
    </v-main>
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
