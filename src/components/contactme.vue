<template>
<v-container>
  <v-dialog
      :transition="style_preference"
      width="1024"
      v-model="overlay"
      id="change-location-dialog"
      @click:outside="close_contactme"
  >
    <v-form ref="form" @submit.prevent="submit_contactme">
      <v-card>
        <v-toolbar
            color="success"
            title="Contact Me"
            class="text-h3"
        >
          <v-btn
              variant="text"
              @click="close_contactme"
              class="justify-end"
          >Close</v-btn>
        </v-toolbar>
        <v-card-text>
          <v-container>
            <!-- email input -->
            <v-row>
              <v-col>
                <v-responsive
                    class="mx-auto"
                    max-width="444"
                >
                  <v-text-field
                      hide-details="auto"
                      label="Your Email Address *"
                      placeholder="johndoe@gmail.com"
                      type="email"
                      variant="outlined"
                      clearable
                      required
                      :rules="[rules.email]"
                      class="pa-4"
                  ></v-text-field>
                </v-responsive>
              </v-col>
            </v-row>

            <!-- Inquiry Option -->
            <v-row>
              <v-container class="select-container">
<!--                <v-select-->
<!--                    label="Inquiry Options"-->
<!--                    :items="Object.values(inquiry_options)"-->
<!--                    v-model="chosen_inquiry_option"-->
<!--                ></v-select>-->
                <select class="select-box" v-model="chosen_inquiry_option">
                  <option v-for="(option,index) in inquiry_options" :key="index" :value="option">
                    {{ option }}
                  </option>
                </select>
                <div class="icon-container">
                  <v-icon dark>mdi-arrow-down-box</v-icon>
                </div>
              </v-container>
            </v-row>
            <!-- Text Box for when the user chooses an option-->
            <div v-if="chosen_inquiry_option && chosen_inquiry_option !== inquiry_options.feedback">
              <v-row>
                <v-textarea label="Description" v-model="job_opp_connect.desc" required :rules="[rules.desc_required]"></v-textarea>
              </v-row>
              <!-- Any Files -->
              <v-row>
                <v-responsive class="mx-auto" max-width="444">
                  <v-file-input label="Optional Files"  v-model="job_opp_connect.file"></v-file-input>
                </v-responsive>
              </v-row>
            </div>
            <!-- Feedback Box -->
            <div v-else-if="chosen_inquiry_option && chosen_inquiry_option === inquiry_options.feedback">
              <v-row class="flex-center">
                <v-radio-group inline v-model="chosen_feedback_radio">
                  <v-radio
                      v-for="feedback_option in feedback_radio"
                      :label="feedback_option.label"
                      :value="feedback_option.value"
                  ></v-radio>
                </v-radio-group>
              </v-row>
              <!-- General -->
              <v-row v-if="chosen_feedback_radio === feedback_radio[0].value">
                <v-col>
                  <v-textarea label='Feedback' v-model="feedback_desc" required :rules="[rules.feedback_desc_required]"></v-textarea>
                </v-col>
              </v-row>
              <!-- Website -->
              <v-row v-else>
                <v-col>
                  <v-textarea label='Feedback' v-model="feedback_desc" required :rules="[rules.feedback_desc_required]"></v-textarea>
                </v-col>
                <v-divider vertical></v-divider>
                <v-col class="pa-3">
                  <v-sheet v-for="(question, index) in web_fb_questions" :key="index" class="mb-5 pa-2" color="grey-lighten-2">
                    <v-row justify="center" class="pa-2">
                      <span class="text-body-1">{{ question }}</span>
                    </v-row>
                    <v-row justify="center">
                      <v-rating
                          v-model="web_fb_answers[index]"
                          bg-color="orange-lighten-1"
                          color="blue"
                      ></v-rating>
                    </v-row>
                  </v-sheet>
                </v-col>
              </v-row>
            </div>
          </v-container>
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn
              variant="outline"
              size="large"
              color="success"
              type="submit"
          >Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</v-container>
</template>

<script>

export default{
  // we're going to create a modal with a contact me box
  name: "Contact Me",
  props:{
    style_top: {type:Boolean, required:false},
    style_bottom: {type:Boolean, required:false},
  },
  data(){
    return{
      overlay: true, // set to true by default because if this component is active then we need a modal
      style_preference: {'style_bottom': 'dialog-bottom-transition', 'style_top': 'dialog-top-transition'},
      inquiry_options: {
        job_opp: "Job Opportunity",
        connect: "Connect With Me",
        feedback: "General/Website Feedback",
      },
      feedback_radio: [
        {label:'General', value: 'gen_feedback'},
        {label:'Website', value: 'web_feedback'}
      ],
      chosen_inquiry_option: null,
      chosen_feedback_radio: null,
      // job_opp and connect inquiries
      job_opp_connect: {}, // using dynamic v-model, we'll get a list of objects {desc, file}
      // feedback answers
      feedback_desc: "",
      web_fb_questions: ['q1', 'q2'],
      web_fb_answers: {},  // using dynamic v-model, we'll get a list of objects {question.id, answer}'
      // form rules
      rules: {
        email: v => !!(v || '').match(/@/) || "Please enter a valid email address",
        desc_required: v => !!v || 'A Description is Required',
        feedback_desc_required: v => !!v || 'A Feedback Description is Required',
      },
      options : [ {
        id: 'a',
        label: 'a',
        children: [ {
          id: 'aa',
          label: 'aa',
        }, {
          id: 'ab',
          label: 'ab',
        } ],
      }, {
        id: 'b',
        label: 'b',
      }, {
        id: 'c',
        label: 'c',
      } ],
    }
  },
  methods: {
    close_contactme(){
      this.overlay = !this.overlay
      // we need to emit an event for our parent component to listen onto so that we could close this component on our parent component
      this.$emit('close-contact-me')  // this way the user doesnt have to click twice to close this component and click again to activate this component
    },
    async submit_contactme(){
      // Let's check if this form is valid first and follows all of our this.rules
      const { valid } = await this.$refs.form.validate()  // we have a ref='form' on our v-form
      if(valid && this.chosen_inquiry_option !== this.inquiry_options.feedback){
        // we're working with job opp or connects
        console.log(this.job_opp_connect.desc)
        console.log(this.job_opp_connect.file)
      } else if(valid && this.chosen_inquiry_option === this.inquiry_options.feedback){
        // we're working with feedbacks
        console.log(this.feedback_desc)
        console.log(this.web_fb_answers)
      }

      // we want to close this component once we are finished
      // this.close_contactme()
    }
  },
  created(){
    if(this.style_top){
      this.style_preference = this.style_preference['style_top']
    } else {
      this.style_preference = this.style_preference['style_bottom']
    }

    // default values
    this.chosen_inquiry_option = this.inquiry_options.connect
    this.chosen_feedback_radio = this.feedback_radio[0].value

  }
}
</script>

<style>

.flex-center{
  display: flex;
  flex-direction: column;
  align-items:center;
}

.select-container{
  display: flex;
  justify-content: center;
  position:relative;
  min-width: 250px;
  height: 70px;
}

.select-container .icon-container{
  width: 50px;
  height: 50%;
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
}

.select-box{
  border:none;
  appearance: none;
  padding: 0 30px 0 15px;
  width: 100%;
  color: black;
  background-color: lightgrey;
  font-size: 20px;
}

.icon-container i{
  font-size: 30px;
  color: black;
}

</style>