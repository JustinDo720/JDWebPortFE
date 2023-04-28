<template>
Project {{ project_slug }}
  {{ resized }}
</template>

<script>
import { mapState } from 'vuex'

export default{
  name:"SpecificProject",
  data(){
    return{
      project_slug: "",
    }
  },
  computed:{
    ...mapState([
        'resized'
    ])
  },
  created(){
    this.project_slug = this.$route.params.project_slug
    console.log(this.$route.params.project_slug)
  }
}
</script>
