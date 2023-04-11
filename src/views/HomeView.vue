<template>
  <div class="mb-10">
    <navbar></navbar>
  </div>
  <div class="mb-10">
    <infocard></infocard>
  </div>
  <v-divider></v-divider>
</template>

<script>
import { defineComponent } from "vue";

// Components
import navbar from "@/components/navbar";
import infocard from "@/components/infocard";

export default defineComponent({
  name: "HomeView",
  components: {
    navbar,
    infocard,
  },
});
</script>
