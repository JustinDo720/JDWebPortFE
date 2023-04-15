<template>
  <div class="mb-10">
    <navbar></navbar>
  </div>
  <div class="mb-10">
    <infocard></infocard>
  </div>
  <v-divider></v-divider>
    <!-- Short Biography & Current Project Section -->
    <v-parallax
        :src="require('../assets/images/py_parrallax_img.jpg')"
    >
      <v-container fluid class="pa-7">
        <v-row justify="space-around">
          <!-- Biography Box -->
          <v-col>
            <v-card class="pa-3" color="grey-lighten-3 rounded-sm elevation-2">
              <v-card-title class="text-h4">
                A Bit About Me
              </v-card-title>
              <v-card-text class="text-body-2">
                {{ biography_para }}
              </v-card-text>
              <v-card-actions>
                <v-btn
                  size="small"
                  variant="text"
                  @click="redirect_page(aboutMe.router_view_name)"
                >
                  {{ aboutMe.name }}
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <!-- Current Activity -->
          <v-col>
            <v-container class="bg-grey-lighten-3 rounded-sm">
              <v-row no-gutters justify="center">
                <h4 class="pa-2 text-h4">
                  Currently Working On...
                </h4>
              </v-row>
              <v-row justify="center" dense>
                <v-card
                    v-for="focus in recent_focus"
                    :key="focus"
                    color="grey-darken-3 ma-5"
                    class="focus_card rounded elevation-4"
                >
                  <v-card-title
                      class="text-h5"
                  >
                    {{ focus.focus_title }}
                  </v-card-title>
                  <v-card-subtitle>
                    Recently Added on {{ focus.focus_date }}
                  </v-card-subtitle>
                  <v-card-text
                      class="text-body-2 scrollable_text"
                  >
                    {{ focus.focus_info }}
                  </v-card-text>
                </v-card>
              </v-row>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </v-parallax>
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
  data(){
    return{
      biography_para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et egestas quis ipsum suspendisse ultrices gravida dictum. Mattis nunc sed blandit libero volutpat. Egestas purus viverra accumsan in nisl nisi scelerisque. Placerat in egestas erat imperdiet. Justo eget magna fermentum iaculis eu non diam. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Id porta nibh venenatis cras sed felis. Integer eget aliquet nibh praesent tristique. Purus gravida quis blandit turpis cursus in hac. Nunc aliquet bibendum enim facilisis gravida neque convallis.",
      recent_focus: [
        {
          focus_title : "Project 1",
          focus_date : "2025",
          focus_info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et egestas quis ipsum suspendisse ultrices gravida dictum. Mattis nunc sed blandit libero volutpat. Egestas purus viverra accumsan in nisl nisi scelerisque. Placerat in egestas erat imperdiet. Justo eget magna fermentum iaculis eu non diam. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Id porta nibh venenatis cras sed felis. Integer eget aliquet nibh praesent tristique. Purus gravida quis blandit turpis cursus in hac. Nunc aliquet bibendum enim facilisis gravida neque convallis."
        },
        {
          focus_title : "Project 2",
          focus_date : "2025",
          focus_info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et egestas quis ipsum suspendisse ultrices gravida dictum. Mattis nunc sed blandit libero volutpat. Egestas purus viverra accumsan in nisl nisi scelerisque. Placerat in egestas erat imperdiet. Justo eget magna fermentum iaculis eu non diam. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Id porta nibh venenatis cras sed felis. Integer eget aliquet nibh praesent tristique. Purus gravida quis blandit turpis cursus in hac. Nunc aliquet bibendum enim facilisis gravida neque convallis."
        },
        {
          focus_title : "Project 3",
          focus_date : "2025",
          focus_info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et egestas quis ipsum suspendisse ultrices gravida dictum. Mattis nunc sed blandit libero volutpat. Egestas purus viverra accumsan in nisl nisi scelerisque. Placerat in egestas erat imperdiet. Justo eget magna fermentum iaculis eu non diam. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Id porta nibh venenatis cras sed felis. Integer eget aliquet nibh praesent tristique. Purus gravida quis blandit turpis cursus in hac. Nunc aliquet bibendum enim facilisis gravida neque convallis."
        }
      ],
      aboutMe: {
        name: "SEE MORE...",
        router_view_name: "view_aboutme",
      },
      inquiry_options: {
        job_opp: "Job Opportunity",
        connect: "Connect With Me",
        feedback: "General/Website Feedback",
      },
    }
  },
  methods:{
    redirect_page(router_name){
      this.$router.push({name:router_name})
    }
  }
});
</script>

<style scoped>

.focus_card{
  max-height: 250px;
  overflow-y: scroll;
  scrollbar-width: thin;
}

</style>
