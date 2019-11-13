<template>
  <div>
      <h4>{{ pts }} </h4>
  </div>
</template>

<script>
    export default {
    name: 'Rep1',
    data() {
      return {pts: ''}
    },
    
    computed: {
      reportName() {return this.$route.params.id}
    },
    
    methods: {
      getPts() {
        this.pts = 'pts is ' + this.$route.params.id
      }
    },
    
    created() {
      this.getPts();
    },

    watch: {
      '$route'() {
        this.getPts();
      }
    },
  }
</script>

<style>

</style>