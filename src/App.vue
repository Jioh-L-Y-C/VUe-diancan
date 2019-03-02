import store  from "./components/store"

<template>
  <div id="app">
    <Layout></Layout> 
  </div>
</template>
<script>
 import Layout  from  "./components/layout.vue"
export default {
  name: 'App',
  
  data(){
    return{
      
    }
  },
  //??
  components:{
    Layout
  }
}
</script>

<style>

</style>
