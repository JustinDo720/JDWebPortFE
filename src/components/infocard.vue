<template>
  <v-container class="bg-grey-lighten-2" style="max-width: 1200px !important">
    <v-card
      class="mx-auto justify-center bg-surface-variant text-center"
      elevation="12"
    >
      <v-container>
        <!-- information -->
        <v-avatar
          :image="require('../assets/images/logo_2.png')"
          size="250"
          class="mt-2"
        ></v-avatar>
      </v-container>
      <div
        class="text-h1 mb-5 font-weight-bold"
        style="font-family: 'Patua One', serif !important"
      >
        {{ infos.full_name }}
      </div>
      <v-container
        class="text-h4 font-weight-light"
        style="font-family: 'Patua One', serif !important"
      >
        <v-sheet
          class="bg-grey-darken-4 d-inline-block pa-3 rounded-shaped"
          elevation="12"
        >
          <span
            class="text-amber-darken-1"
            v-for="(desc, index) in infos.quick_desc"
            :key="desc"
          >
            {{ desc }}
            <span
              class="text-amber-darken-1"
              v-if="index + 1 !== infos.quick_desc.length"
              >•
            </span>
          </span>
        </v-sheet>
      </v-container>
      <!--      <v-card-actions class="justify-center pa-10">-->
      <v-container class="justify-center pa-10">
        <!-- Resume Dropdown -->
        <v-btn
          id="menu-activator"
          variant="elevated"
          size="large"
          class="mr-2 mb-2"
          color="cyan-lighten-2"
          :prepend-icon="resume_controls.icon"
        >
          {{ resume_controls.name }}
        </v-btn>

        <v-menu activator="#menu-activator" open-on-hover>
          <v-list>
            <v-list-item
              v-for="resume_option in resume_controls.resume_btn_controls"
              :key="resume_option"
              :title="resume_option.name"
              :prepend-icon="resume_option.icon"
              :value="resume_option.name"
              @click="resume_control_method(resume_option)"
            >
            </v-list-item>
          </v-list>
        </v-menu>
        <!-- Rest of the btn controls -->
        <v-btn
          v-for="control in btn_controls"
          :key="control"
          variant="elevated"
          size="large"
          class="mr-2 mb-2"
          color="cyan-lighten-2"
          @click="btn_control_method(control)"
          :prepend-icon="control.icon"
        >
          {{ control.name }}
        </v-btn>
      </v-container>
      <!--      </v-card-actions>-->
    </v-card>
  </v-container>

  <!-- Contact Me Overlay Component -->
  <contactme v-if="activate_contactme"
             :style_bottom="true"
             @close-contact-me="activate_contactme = !activate_contactme"
  >
  </contactme>
</template>

<script>
import contactme from "@/components/contactme";

export default {
  name: "infocard",
  components: {
    contactme,
  },
  data() {
    return {
      infos: {
        full_name: "Justin Hoang Do",
        quick_desc: ["Economic Student", "Software Engineer", "Animal Lover"],
      },
      resume_controls: {
        name: "My Resume",
        icon: "mdi-note",
        resume_btn_controls: {
          view: {
            name: "View Resume",
            icon: "mdi-file-find",
            router_view_name: "view_resume",
          },
          download: {
            name: "Download Resume",
            icon: "mdi-download-circle-outline",
          },
        },
      },
      btn_controls: {
        projects: {
          name: "My Projects",
          icon: "mdi-briefcase",
          router_view_name: "view_projects",
        },
        contactme: {
          name: "Contact Me",
          icon: "mdi-card-account-mail",
        }
      },
      activate_contactme: false
    };
  },
  methods: {
    resume_control_method(control) {
      // two possible control options: view and download
      if (control.name === this.resume_controls.resume_btn_controls.view.name) {
        // user wants to view
        this.$router.push({ name: control.router_view_name });
      } else {
        // Downloading Resume (work with api later)
      }
    },
    btn_control_method(control) {
      if(control.name === this.btn_controls.contactme.name){
        // we know that the user wants to contact us therefore:
        this.activate_contactme = !this.activate_contactme;
      } else {
        this.$router.push({ name: control.router_view_name });
      }
    },
  },
};
</script>

<style scoped>
/*.info_box{*/
/*  padding: 10px 25px;*/
/*  color: #FFF;*/
/*  font-size: 102px;*/
/*  font-weight: 900;*/

/*  border-radius:16px;*/
/*  background-color: rgba(255,255,255,0.25);*/
/*  box-shadow: 3px 6px rgba(0,0,0,0.25);*/
/*}*/
</style>
