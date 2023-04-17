<template>
Project {{ project_slug }}
</template>

<script>

export default{
  name:"SpecificProject",
  data(){
    return{
      project_slug: "",
    }
  },
  created(){
    this.project_slug = this.$route.params.project_slug
    console.log(this.$route.params.project_slug)
  }
}
</script>
