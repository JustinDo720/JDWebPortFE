<template>
  <!-- Quote -->
  <v-container fluid class="mt-5">
    <v-row align="center"
           justify="center">
      <v-sheet color="grey-darken-3"
               class="align-center justify-center text-center pa-4"
               :elevation="10"
               rounded
               max-width="800"
               width="100%">
        <div>
          <h2 class="text-h5 font-weight-black text-cyan-lighten-2">
            <i>"{{ quote }}"</i>
          </h2>

          <div class="text-h5 font-weight-medium mb-2">
            - {{ authors }}
          </div>
        </div>
      </v-sheet>
    </v-row>
  </v-container>
  <!-- General Information -->
  <v-sheet color="grey-darken-2" class="pa-4 mt-5">
    <div>
      <h2 class="text-h5 font-weight-black text-cyan-lighten-2">
        About Me
      </h2>
      <br>
      <p class="text-body-1">
        {{ about_me }}
      </p>
    </div>
  </v-sheet>
  <v-divider></v-divider>
  <!-- Specific Sections -->
  <v-container>
    <v-sheet class="pa-4 mt-5 bg-grey-darken-2" border="lg">
      <v-tabs
          v-model="tab"
          color="amber-darken-1"
          align-tabs="center"
      >
        <v-tab v-for="(section, index) in bio_sections"
               :key="index"
               :value="index"
               class="text-h5 font-weight-black"
        >
          {{ section.name }}
        </v-tab>
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item
            v-for="(section, index) in bio_sections"
            :key="index"
            :value="index"
        >
          <v-divider inset :thickness="2"></v-divider>
          <v-card v-if="section.imgs" max-width="777" class="mx-auto mt-2">
            <v-carousel
                cycle
                height="400"
                hide-delimiter-background
                show-arrows="hover"
            >
              <v-carousel-item
                  v-for="(slide, i) in section.imgs"
                  :key="i"
                  :src="slide"
                  cover
              >
              </v-carousel-item>
            </v-carousel>
          </v-card>
          <v-container fluid>
            <h5 class="text-h4 text-amber-darken-1">
              {{ section.name}}
            </h5>

            <br>
            <p class="text-body-1">
              {{ section.info }}
            </p>

          </v-container>
        </v-window-item>
      </v-window>
    </v-sheet>
  </v-container>
</template>
<script>
export default {
  name: "AboutMeView",
  data(){
    return{
      tab: null,
      quote: "It was great to see how dedicated you were to the MVP building process. It is clear that one of your strengths is the ability to put your head down and work hard at something you are passionate about. That passion will always make you a good teammate in whatever career you pursue.",
      authors: "Professor Parakh & Matt",
      about_me: "Something about me",
      bio_sections: {
        economic_student: {name: "Economic Student", info: "I was an Economic Student", imgs: ['https://picsum.photos/id/11/1200/1200', 'https://picsum.photos/id/10/1200/1000', 'https://picsum.photos/id/16/200/300']},
        software_engineer: {name: "Software Engineer", info: "I was a Software Engineer", imgs: ['https://picsum.photos/id/11/1200/1200', 'https://picsum.photos/id/10/1200/1000', 'https://picsum.photos/id/16/200/300']},
        animal_lover: {name: "Animal Lover", info: "I am an animal lover"},
      },
    }
  }
};
</script>
