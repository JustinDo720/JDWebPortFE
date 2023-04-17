<template>
  <div>
    <v-footer class="bg-grey-darken-3 pa-5">
      <v-row no-gutters justify="center">
        <v-btn
            v-for="social in socials"
            :key="social"
            size="medium"
            class="mr-5 pa-2"
            :color="social.info_color"
            variant="tonal"
            @click="check_link(social.info_link)"
        >
          <v-icon :icon="social.info_icon" class="pr-1" />
          {{ social.info }}
        </v-btn>
        <v-col class="text-center mt-4" cols="12">
          {{ new Date().getFullYear() }} — <strong>{{web_title}}</strong>
        </v-col>
      </v-row>
    </v-footer>
  </div>
  <!-- contact me modal component -->
  <contactme v-if="activate_contactme"
             :style_bottom="true"
             @close-contact-me="activate_contactme = !activate_contactme"
  ></contactme>
</template>
<script>
import contactme from "@/components/contactme";

export default{
  name: "footer",
  components: {
    contactme
  },
  data(){
    return{
      web_title: "JHDo Web Portfolio",
      socials: {
        github: {
          info: "Justindo720",
          info_link: "https://github.com/JustinDo720",
          info_icon: "mdi-github",
          info_color: "#eeeeee",
        },
        linkedin: {
          info: "Justin Do",
          info_link: "https://www.linkedin.com/in/justin-do-4651561a3/",
          info_icon: "mdi-linkedin",
          info_color: "#0c65c3",
        },
        email: {
          info: "justindo720@gmail.com",
          info_icon: "mdi-email",
          info_color: "#43a047",
        },
        instagram: {
          info: "@darkowwl",
          info_link: "https://www.instagram.com/darkowwl/",
          info_icon: "mdi-instagram",
          info_color: "#e2306c",
        },
      },
      activate_contactme: false
    }
  },
  methods:{
    check_link(link){
      if(link){
        this.$router.push({ redirect: (window.location.href = link) });
      } else {
        // user wants to contact me
        this.activate_contactme = !this.activate_contactme
      }
    },
  }
}
</script>

<style scoped>

/*.sticky-bottom{*/
/*  position: absolute;*/
/*  width: 100%;*/
/*  */
/*}*/
</style>