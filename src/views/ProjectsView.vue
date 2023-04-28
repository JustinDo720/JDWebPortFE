<template>
  <!-- All Projects available in the directory -->
  <v-container>
    <v-row no-gutters justify="center">
      <div class="text-h4 text-center font-weight-bold">
        Projects to Showcase
      </div>
    </v-row>
    <v-row no-gutters>
      <v-container
          class="bg-surface-variant"
          style="max-width: 1200px !important; max-height: 800px; overflow-y: scroll"
      >
        <v-card
          v-for="(project,index) in showcase_projects"
          :key="index"
          class="pa-5 mb-2"
        >
          <v-card-title>
            {{ project.name }}
          </v-card-title>
          <v-card-subtitle>
            <i>Tools: {{ tools_joined(project.tools) }}</i>
          </v-card-subtitle>


          <v-tabs
              v-model="tab[index]"
          >
            <v-tab value="brief_description">Brief Description</v-tab>
            <v-tab value="purpose">Purpose</v-tab>
            <v-tab value="learnings">Learnings</v-tab>
          </v-tabs>
          <v-card-text>
            <v-window v-model="tab[index]">
              <v-window-item value="brief_description">
                {{ project.info.brief_description }}
              </v-window-item>

              <v-window-item value="purpose">
                {{ project.info.purpose }}
              </v-window-item>

              <v-window-item value="learnings">
                <ul>
                  <li v-for="learnings in project.info.learnings">
                    {{ learnings }}
                  </li>
                </ul>
              </v-window-item>
            </v-window>
          </v-card-text>
          <v-card-actions class="justify-end">
            <router-link
              tag="button"
              :to="{name: 'view_specific_project', params: {'project_slug': project.slug}}"
              class="router_link_style pa-2 text-cyan-lighten-2 text-body-1 font-weight-black"
            >
              See more...
            </router-link>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "ProjectsView",
  data(){
    return{
      showcase_projects: [
        {name: 'p1', slug:"p1", info: {'purpose': "p1", "brief_description": "brief_description for project", "learnings": ["Learnings from project","Learnings from project" ]}, tools: ['py', 'sql']},
        {name: 'p2', slug:"p2", info: {'purpose': "p1", "brief_description": "brief_description for project", "learnings": ["Learnings from project","Learnings from project" ]}, tools: ['py', 'sql']},
        {name: 'p3', slug:"p3", info: {'purpose': "p1", "brief_description": "brief_description for project", "learnings": ["Learnings from project","Learnings from project" ]}, tools: ['py', 'sql']},
        {name: 'p4', slug:"p4", info: {'purpose': "p1", "brief_description": "brief_description for project", "learnings": ["Learnings from project","Learnings from project" ]}, tools: ['py', 'sql']},
        {name: 'p5', slug:"p5", info: {'purpose': "p1", "brief_description": "brief_description for project", "learnings": ["Learnings from project","Learnings from project" ]}, tools: ['py', 'sql']},
      ],
      tab: {},
    }
  },
  methods:{
    tools_joined(tools){
      return tools.join(', ')
    }
  }
};
</script>
<style scoped>

.router_link_style{
  text-decoration: none;
}

</style>