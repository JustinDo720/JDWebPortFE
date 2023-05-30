<template>
  <v-container>
    <!-- Project Name -->
    <v-row no-gutters justify="center" class="pa-10">
      <div class="text-h3 text-center text-cyan-lighten-2 font-weight-bold">
        {{ project_data.project_name }}
      </div>
    </v-row>

    <!-- Project Pictures -->
    <v-card
        elevation="24"
        max-width="1200"
        class="mx-auto mb-5"
        v-if="project_data.project_images"
    >
      <v-row no-gutters justify="center" class="pa-10">
        <v-carousel
            cycle
            height="400"
            show-arrows="hover"
            hide-delimiter-background
            hide-delimiters
        >
          <v-carousel-item
              v-for="(proj_img,i) in project_data.project_images"
              :key="i"
              :src="proj_img"
              cover
          ></v-carousel-item>
        </v-carousel>
      </v-row>
    </v-card>

    <!-- Project Purpose -->
    <v-row no-gutters justify="center">
      <v-sheet class="pa-10" color="grey-darken-3" elevation="6" rounded="xl">
        <div class="text-h4 text-cyan-lighten-2">
          What's the purpose of {{ project_data.project_name}}?
        </div>
        <p class="text-start font-weight-medium">
          {{ project_data.project_purpose }}
        </p>
      </v-sheet>
    </v-row>

    <!-- Project Initial to Final -->
    <v-row justify="space-around" class="mt-10">
      <!-- initial -->
      <v-col>
        <v-card variant="tonal" class="elevation-2">
          <v-card-item>
            <v-card-title>How {{ project_data.project_name}} Began</v-card-title>
          </v-card-item>
          <v-card-text>
            {{ project_data.project_init_notes }}
          </v-card-text>
        </v-card>
      </v-col>
      <v-divider vertical></v-divider>
      <!-- Final -->
      <v-col>
        <v-card variant="tonal" class="elevation-2">
          <v-card-item>
            <v-card-title>How {{ project_data.project_name}} Ended</v-card-title>
          </v-card-item>
          <v-card-text>
            {{ project_data.project_final_notes }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

  </v-container>

</template>

<script>
import { mapState } from 'vuex'

export default{
  name:"SpecificProject",
  data(){
    return{
      project_slug: "",
      project_data: {},
    }
  },
  computed:{
    ...mapState([
        'resized'
    ])
  },
  created(){
    this.project_slug = this.$route.params.project_slug
    this.project_data = {
      'project_name': "Project Name",
      'project_images': ['https://picsum.photos/id/11/1200/1200', 'https://picsum.photos/id/10/1200/1000', 'https://picsum.photos/id/16/200/300'],
      'project_purpose': "Project PurposeProject PurposeProject PurposeProject PurposeProject PurposeProject PurposeProject PurposeProject PurposeProject PurposeProject PurposeProject PurposeProject PurposeProject PurposeProject PurposeProject PurposeProject PurposeProject PurposeProject PurposeProject PurposeProject PurposeProject PurposeProject PurposeProject PurposeProject PurposeProject PurposeProject PurposeProject PurposeProject PurposeProject PurposeProject PurposeProject PurposeProject PurposeProject PurposeProject PurposeProject Purpose",
      'project_init_notes': "Initial Notes",
      'project_final_notes': "Final Notes",
    } // find data based on project_slug with our API
    console.log(this.$route.params.project_slug)
  }
}
</script>
