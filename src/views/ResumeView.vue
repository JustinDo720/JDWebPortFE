<template>
  <v-container class="resume_box">
    <v-sheet class="bg-surface-variant pa-2 mx-auto">
      <div class="text-h4 text-center text-cyan-lighten-2">
        {{ user_info.name }}
      </div>

      <!-- Socials-->
      <v-row no-gutters class="mb-2" justify="space-evenly">
        <div
            v-for="(social_information, social_name) in user_info.socials"
        >
          <v-col
              v-if="social_name === 'github' || social_name === 'email' || social_name === 'number'"
              justify="center"
          >
            <div class="text-body-1 font-weight-medium">
              <strong :class="[social_information.info_color, 'text-h6', 'text-capitalize', 'font-weight-black']">
                {{ social_name }}:
              </strong> {{ social_information.info }}
            </div>
          </v-col>
        </div>
        <v-divider class="border-opacity-100"></v-divider>
      </v-row>

      <!-- Education -->
      <v-row no-gutters justify="center">
        <div class="text-h4 text-center text-cyan-lighten-2">
          Education
        </div>
        <v-container class="text-h6 font-weight-black">
          <v-row no-gutters justify="space-between">
            <v-col>
              <strong>
                {{ user_info.education.school_info.name }}
              </strong>
            </v-col>
            <v-spacer></v-spacer>
            <v-col class="text-right">
              {{ user_info.education.school_info.name }}
            </v-col>
          </v-row>
          <div>
            <strong>{{ user_info.education.degree }}</strong>
          </div>
          <div class="text-body-1 font-weight-medium">
            <i>
              <strong class="text-h6 font-weight-black">
                Relevant Coursework:
              </strong>
              {{ display_list_items(user_info.education.rel_course) }}
            </i>
          </div>
        </v-container>
      </v-row>

      <!-- Skills -->
      <v-row no-gutters justify="center">
        <div class="text-h4 text-center text-cyan-lighten-2">
          Skills
        </div>
        <v-container class="text-body-1 font-weight-medium">
          <div>
            <strong class="text-h6 font-weight-black">Languages:</strong> {{ display_list_items(user_info.skills.lang) }}
          </div>
          <div>
            <strong class="text-h6 font-weight-black">Frameworks:</strong> {{ display_list_items(user_info.skills.fw) }}
          </div>
          <div>
            <strong class="text-h6 font-weight-black">Tools:</strong> {{ display_list_items(user_info.skills.tools) }}
          </div>
        </v-container>
      </v-row>

      <!-- Projects (We could use Expansion Panels -->
      <v-row no-gutters justify="center">
        <div class="text-h4 text-center text-cyan-lighten-2">
          Projects
        </div>
        <v-expansion-panels variant="popout" class="my-4">
          <v-expansion-panel
              v-for="(project,i) in user_info.projects"
              :key="i"
              class="bg-grey-darken-2"
          >
            <v-expansion-panel-title class="text-h6 font-weight-black">
              {{ project.name }}
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <ul class="pl-4">
                <li v-for="info in user_info.projects[i].info">
                  {{ info }}
                </li>
              </ul>
              <div class="text-center pa-3">
                <v-btn
                  size="medium"
                  variant="outlined"
                  color="info"
                  class="pa-2"
                  @click="see_project(project)"
                >
                  See {{ project.name }}
                </v-btn>
              </div>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>

      <!-- Awards & Achievements -->
      <v-row no-gutters justify="center">
        <div class="text-h4 text-center text-cyan-lighten-2">
          Awards & Achievements
        </div>
        <v-container class="text-h6 font-weight-black">
          <v-row v-for="aaa in user_info.awards_and_achievements" no-gutters>
            <v-col>
              <strong>
                {{ aaa.name }}
              </strong>
            </v-col>
            <v-col class="text-right">
              {{ aaa.date }}
            </v-col>
          </v-row>
        </v-container>
      </v-row>
    </v-sheet>
  </v-container>
</template>

<script>
export default {
  name: "ResumeView",
  data(){
    return{
      user_info: {
        name: "Justin Do",
        socials: {},
        education: {
          school_info: {name: "School Name", loc: "New York", gpa: "3.6/4.0"},
          degree: "Eco",
          rel_course: ['Stats', "Py for Business Analysis", "Econometrics"]
        },
        skills:{
          lang: ["Py", "Excel", "SQL"],
          fw: ["Django", "Vue"],
          tools: ["S3", "Firebase"]
        },
        projects:{
          powerpetpro: {name:"PowerPetPro", info:["Good", "Dogs"], slug:"powerpetpro"},
          ptspop: {name:"PTS PopCorn", info:["DoubleGood", "SCholarship"], slug:"ptspop"}
        },
        awards_and_achievements:{
          pts: {name:"PTS", date:"2015-2020"},
          pvs: {name:"PvS", date:"2015-2023"}
        }
      }
    }
  },
  methods:{
    display_list_items(list_of_items){
      return list_of_items.join(', ')
    },
    see_project(project){
      console.log(project.slug)
      this.$router.push({name:"view_specific_project", params: {project_slug: project.slug}})
    }
  },
  created(){
    this.user_info.socials = this.$store.state.socials
  }
}
</script>

<style scoped>

.resume_box{
  margin-right: auto;
  margin-left: auto;
  max-width: 75%;
}

</style>